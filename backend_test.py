import requests
import sys
from datetime import datetime

class BackgrndAPITester:
    def __init__(self, base_url="https://thoughtful-memos.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, expected_fields=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            
            success = response.status_code == expected_status
            response_data = {}
            
            if success:
                try:
                    response_data = response.json()
                    print(f"✅ Passed - Status: {response.status_code}")
                    
                    # Check expected fields if provided
                    if expected_fields:
                        for field in expected_fields:
                            if field not in response_data:
                                print(f"⚠️  Warning: Expected field '{field}' not found in response")
                            else:
                                print(f"   ✓ Field '{field}' present")
                    
                    self.tests_passed += 1
                    self.test_results.append({
                        "test": name,
                        "status": "PASS",
                        "response_status": response.status_code,
                        "data_sample": str(response_data)[:200] + "..." if len(str(response_data)) > 200 else str(response_data)
                    })
                except Exception as json_err:
                    print(f"⚠️  Response not JSON: {str(json_err)}")
                    response_data = response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                self.test_results.append({
                    "test": name,
                    "status": "FAIL",
                    "response_status": response.status_code,
                    "error": response.text[:200]
                })

            return success, response_data

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "test": name,
                "status": "ERROR",
                "error": str(e)
            })
            return False, {}

    def test_site_config(self):
        """Test GET /api/config"""
        return self.run_test(
            "Site Config",
            "GET",
            "config",
            200,
            expected_fields=["site_name", "tagline", "home_intro"]
        )

    def test_essays_list(self):
        """Test GET /api/essays"""
        success, data = self.run_test(
            "Essays List",
            "GET", 
            "essays",
            200
        )
        
        if success and isinstance(data, list):
            print(f"   Found {len(data)} essays")
            if len(data) > 0:
                essay = data[0]
                required_fields = ["id", "title", "slug", "date", "excerpt"]
                for field in required_fields:
                    if field in essay:
                        print(f"   ✓ Essay has '{field}' field")
                    else:
                        print(f"   ⚠️  Essay missing '{field}' field")
                
                # Check that body is NOT included in list view
                if "body" not in essay:
                    print("   ✓ Body content correctly excluded from list view")
                else:
                    print("   ⚠️  Body content should not be in list view")
        
        return success, data

    def test_recent_essays(self):
        """Test GET /api/essays/recent?limit=3"""
        success, data = self.run_test(
            "Recent Essays",
            "GET",
            "essays/recent?limit=3",
            200
        )
        
        if success and isinstance(data, list):
            print(f"   Found {len(data)} recent essays")
            if len(data) > 3:
                print(f"   ⚠️  Expected max 3 essays, got {len(data)}")
            else:
                print(f"   ✓ Correct number of essays returned")
        
        return success, data

    def test_essay_by_slug(self, slug="on-conviction"):
        """Test GET /api/essays/{slug}"""
        success, data = self.run_test(
            f"Essay by Slug ({slug})",
            "GET",
            f"essays/{slug}",
            200,
            expected_fields=["id", "title", "slug", "date", "excerpt", "body"]
        )
        
        if success and isinstance(data, dict):
            if "body" in data and isinstance(data["body"], list):
                print(f"   ✓ Essay body has {len(data['body'])} paragraphs")
            else:
                print("   ⚠️  Essay body should be a list of paragraphs")
        
        return success, data

    def test_essay_not_found(self):
        """Test GET /api/essays/{invalid-slug}"""
        return self.run_test(
            "Essay Not Found",
            "GET",
            "essays/invalid-slug-that-does-not-exist",
            404
        )

    def test_about_content(self):
        """Test GET /api/about"""
        success, data = self.run_test(
            "About Content",
            "GET",
            "about",
            200,
            expected_fields=["sections", "contact_email"]
        )
        
        if success and isinstance(data, dict):
            if "sections" in data and isinstance(data["sections"], list):
                print(f"   ✓ About has {len(data['sections'])} sections")
                for i, section in enumerate(data["sections"]):
                    if "title" in section and "content" in section:
                        print(f"   ✓ Section {i+1}: '{section['title']}'")
                    else:
                        print(f"   ⚠️  Section {i+1} missing title or content")
        
        return success, data

    def test_access_request_submission(self):
        """Test POST /api/access-requests"""
        url = f"{self.api_url}/access-requests"
        headers = {'Content-Type': 'application/json'}
        
        test_data = {
            "name": "Test User",
            "role": "Principal",
            "context": "Testing the access request functionality for automated testing purposes.",
            "why": "To verify that the access request system is working correctly."
        }

        self.tests_run += 1
        print(f"\n🔍 Testing Access Request Submission...")
        print(f"   URL: {url}")
        
        try:
            response = requests.post(url, json=test_data, headers=headers, timeout=10)
            
            success = response.status_code == 200
            response_data = {}
            
            if success:
                try:
                    response_data = response.json()
                    print(f"✅ Passed - Status: {response.status_code}")
                    
                    # Check expected fields in response
                    expected_fields = ["id", "received"]
                    for field in expected_fields:
                        if field not in response_data:
                            print(f"⚠️  Warning: Expected field '{field}' not found in response")
                        else:
                            print(f"   ✓ Field '{field}' present")
                    
                    # Check that received is True
                    if response_data.get("received") is True:
                        print("   ✓ Request marked as received")
                    else:
                        print("   ⚠️  Request not marked as received")
                    
                    self.tests_passed += 1
                    self.test_results.append({
                        "test": "Access Request Submission",
                        "status": "PASS",
                        "response_status": response.status_code,
                        "data_sample": str(response_data)
                    })
                except Exception as json_err:
                    print(f"⚠️  Response not JSON: {str(json_err)}")
                    response_data = response.text
            else:
                print(f"❌ Failed - Expected 200, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                self.test_results.append({
                    "test": "Access Request Submission",
                    "status": "FAIL",
                    "response_status": response.status_code,
                    "error": response.text[:200]
                })

            return success, response_data

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "test": "Access Request Submission",
                "status": "ERROR",
                "error": str(e)
            })
            return False, {}

def main():
    print("🚀 Starting BACKGRND API Tests")
    print("=" * 50)
    
    tester = BackgrndAPITester()
    
    # Test all endpoints
    print("\n📋 Testing Core API Endpoints...")
    
    # Site config
    tester.test_site_config()
    
    # Essays endpoints
    essays_success, essays_data = tester.test_essays_list()
    tester.test_recent_essays()
    
    # Test individual essay if we have essays
    if essays_success and essays_data and len(essays_data) > 0:
        first_essay_slug = essays_data[0].get("slug")
        if first_essay_slug:
            tester.test_essay_by_slug(first_essay_slug)
    
    # Test 404 handling
    tester.test_essay_not_found()
    
    # About page
    tester.test_about_content()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed")
        print("\nFailed tests:")
        for result in tester.test_results:
            if result["status"] != "PASS":
                print(f"  - {result['test']}: {result['status']}")
        return 1

if __name__ == "__main__":
    sys.exit(main())