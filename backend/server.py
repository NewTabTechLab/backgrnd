from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class EssayBase(BaseModel):
    title: str
    slug: str
    date: str
    excerpt: str
    body: List[str]
    published: bool = True

class Essay(EssayBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class EssayListItem(BaseModel):
    id: str
    title: str
    slug: str
    date: str
    excerpt: str

class AboutContent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    intro: str
    sections: List[dict]
    contact_email: str

class SiteConfig(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    site_name: str
    tagline: str
    home_intro: str

# Seed data on startup
async def seed_initial_data():
    """Seed essays and site content if not exists"""
    
    # Check if essays exist
    essay_count = await db.essays.count_documents({})
    if essay_count == 0:
        essays = [
            {
                "id": str(uuid.uuid4()),
                "title": "On Conviction",
                "slug": "on-conviction",
                "date": "November 2024",
                "excerpt": "The distinction between confidence and conviction is often blurred. Confidence is a feeling; conviction is a position. One can be confident without being right, and one can hold conviction without certainty.",
                "body": [
                    "The distinction between confidence and conviction is often blurred. Confidence is a feeling; conviction is a position. One can be confident without being right, and one can hold conviction without certainty. The difference lies in the foundation upon which each rests.",
                    'Confidence tends to emerge from pattern recognition—having seen something work before, we expect it to work again. It is extrapolative by nature. Conviction, by contrast, is more deliberate. It requires not just observation but reasoning. It asks not "has this worked?" but "why would this work?"',
                    "In capital allocation, the distinction matters considerably. Confidence alone can lead to overcommitment in familiar territories while missing entirely the new. Conviction, built on first principles, allows for positions that may appear contrarian but are in fact simply reasoned.",
                    "We find that conviction is best developed slowly. It is not the product of a single meeting or memorandum, but of sustained attention to a question. The most durable convictions we hold are those we have tested repeatedly—not through affirmation, but through active skepticism.",
                    "This is why we tend to move slowly. Speed and conviction are not natural partners. The pressure to deploy capital quickly often produces confidence masquerading as conviction. We prefer to wait.",
                    "The cost of waiting is real—missed opportunities accumulate. But the cost of acting on confidence rather than conviction is higher still. A portfolio built on conviction can withstand doubt; one built on confidence cannot."
                ],
                "published": True,
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Notes on Information Asymmetry",
                "slug": "information-asymmetry",
                "date": "September 2024",
                "excerpt": "The traditional view holds that information asymmetry is an edge to be exploited. We take a different view: in most markets, the asymmetry that matters is not informational but interpretive.",
                "body": [
                    "The traditional view holds that information asymmetry is an edge to be exploited. We take a different view: in most markets, the asymmetry that matters is not informational but interpretive.",
                    "Consider: the same quarterly report is available to all market participants at precisely the same moment. The data is symmetric. What differs is interpretation—what questions each reader brings to the data, what frameworks they use to process it, what conclusions they draw.",
                    "This suggests that the pursuit of informational edge, while not without merit, is often misallocated effort. The more interesting question is: given the same information, how might one think about it differently?",
                    "Interpretive asymmetry is not easily acquired. It requires building mental models over time, through experience and study. It requires developing a point of view on how systems work—not just how they appear to work.",
                    "We invest considerable time in developing these interpretive frameworks. They are not proprietary in any legal sense—anyone could, in principle, arrive at similar views through similar effort. But the effort is non-trivial, and that creates the asymmetry.",
                    "The implication for our practice is clear: we spend relatively little time gathering information that others do not have, and relatively more time developing views that others do not hold. This is not a faster path to returns. It is, we believe, a more durable one."
                ],
                "published": True,
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Time Arbitrage",
                "slug": "time-arbitrage",
                "date": "July 2024",
                "excerpt": "Most market participants operate on remarkably similar time horizons. This creates structural opportunity for those willing to extend their frame of reference.",
                "body": [
                    "Most market participants operate on remarkably similar time horizons. Quarterly earnings, annual reviews, three-year fund cycles—these rhythms create structural opportunity for those willing to extend their frame of reference.",
                    "Time arbitrage is not merely patience, though patience is required. It is the willingness to take positions that may appear wrong for extended periods before proving right. This requires not just conviction but also constituents who share that time horizon.",
                    "The challenge is both psychological and structural. Psychologically, it is difficult to maintain conviction when interim results suggest error. Structurally, most capital is subject to review cycles that punish short-term underperformance regardless of long-term merit.",
                    "We have attempted to address both challenges. Psychologically, through process: decisions are documented with explicit time horizons and expected interim patterns. When results match our expected interim pattern, even if that pattern is negative, we view this as confirmation rather than refutation.",
                    "Structurally, through alignment: our capital base is composed of partners who understand and share our time horizon. We have deliberately remained small to preserve this alignment.",
                    "Time arbitrage is not a strategy that scales. Its very effectiveness depends on most capital being unable or unwilling to operate on extended horizons. We are comfortable with this constraint."
                ],
                "published": True,
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "On Simplicity",
                "slug": "on-simplicity",
                "date": "May 2024",
                "excerpt": "Complex systems tend to produce simple-sounding explanations and simple systems tend to produce complex-sounding ones. This asymmetry is worth noting.",
                "body": [
                    "Complex systems tend to produce simple-sounding explanations and simple systems tend to produce complex-sounding ones. This asymmetry is worth noting.",
                    "When a situation is genuinely complex—many interacting variables, feedback loops, emergent properties—participants often retreat to simple narratives. The market fell because of inflation fears. This is not wrong, exactly, but it is radically incomplete. The simplicity of the explanation belies the complexity of the underlying system.",
                    "Conversely, when a situation is relatively simple—a company with one product, one customer, one risk—participants often produce elaborate analyses. The simplicity of the underlying system is obscured by the complexity of the explanation.",
                    "We try to match the complexity of our analysis to the complexity of the subject. This is harder than it sounds. The temptation to oversimplify the complex and overcomplicate the simple runs deep.",
                    "In practice, this means we are often uncertain where others are confident, and confident where others are uncertain. Complex situations warrant humility; simple situations warrant conviction. Most investors do the opposite.",
                    "Our portfolio reflects this view. We hold concentrated positions in situations we regard as relatively simple, and smaller positions—or no position at all—in situations we regard as genuinely complex. This is not a formula, but a disposition."
                ],
                "published": True,
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": str(uuid.uuid4()),
                "title": "A Note on Process",
                "slug": "memo-process",
                "date": "March 2024",
                "excerpt": "We are often asked about our process. The question assumes that process is a stable thing—a set of steps to be followed. Our experience suggests otherwise.",
                "body": [
                    "We are often asked about our process. The question assumes that process is a stable thing—a set of steps to be followed. Our experience suggests otherwise.",
                    "What we have is less a process than a set of questions we return to repeatedly. Some are general: What do we know? What do we think we know but actually do not? What would change our mind? Some are specific to the situation at hand.",
                    "The value of these questions lies not in their novelty—they are ordinary questions—but in the discipline of returning to them. It is easy, in the flow of analysis, to lose sight of what one is actually trying to determine.",
                    "We keep extensive notes. Not summaries or conclusions, but the raw material of thought: observations, questions, contradictions, confusions. These notes are not for others; they are for ourselves, to be revisited when memory fades or circumstances change.",
                    "The discipline of writing is central to our process, such as it is. Writing forces precision that speaking does not. It exposes gaps in reasoning that conversation conceals. We distrust conclusions that cannot survive the discipline of being written down.",
                    "This memo is itself an example. The act of articulating our view on process has forced us to examine that view more closely than we otherwise would. We are not certain it will survive the examination."
                ],
                "published": True,
                "created_at": datetime.now(timezone.utc).isoformat()
            }
        ]
        await db.essays.insert_many(essays)
        logging.info("Seeded 5 essays")

    # Check if site config exists
    config_count = await db.site_config.count_documents({})
    if config_count == 0:
        config = {
            "id": str(uuid.uuid4()),
            "site_name": "BACKGRND",
            "tagline": "A private investment firm",
            "home_intro": "BACKGRND is a private investment firm. We allocate capital with long time horizons and write occasionally about our thinking."
        }
        await db.site_config.insert_one(config)
        logging.info("Seeded site config")

    # Check if about content exists
    about_count = await db.about.count_documents({})
    if about_count == 0:
        about = {
            "id": str(uuid.uuid4()),
            "intro": "",
            "sections": [
                {
                    "title": "Firm",
                    "content": [
                        "BACKGRND is a private investment firm. We deploy capital with extended time horizons, typically measured in years rather than quarters. Our approach emphasizes judgment over process, conviction over diversification, and patience over activity.",
                        "We operate with a small team and a deliberately limited capital base. This constraint is intentional: it preserves optionality, reduces pressure to deploy, and allows us to remain selective."
                    ]
                },
                {
                    "title": "Philosophy",
                    "content": [
                        "We believe that most value in capital allocation comes from getting a few decisions right, rather than from optimizing many decisions marginally. This view shapes our practice: we make relatively few investments, hold them for extended periods, and spend most of our time thinking rather than transacting.",
                        "We are skeptical of complexity. The most durable investment theses we have encountered tend to be simple—not simplistic, but reducible to a small number of key judgments. Complexity often signals uncertainty masquerading as sophistication."
                    ]
                },
                {
                    "title": "Writing",
                    "content": [
                        "The essays on this site represent our attempts to think clearly about questions that interest us. They are not investment advice, marketing materials, or position statements. They are working notes, published in the spirit of intellectual honesty.",
                        "We write primarily for ourselves—writing forces a precision that thinking alone does not. That others may find these notes useful is incidental, though welcome."
                    ]
                }
            ],
            "contact_email": "contact@backgrnd.co"
        }
        await db.about.insert_one(about)
        logging.info("Seeded about content")

@app.on_event("startup")
async def startup_event():
    await seed_initial_data()

# API Routes

@api_router.get("/")
async def root():
    return {"message": "BACKGRND API"}

# Site Config
@api_router.get("/config")
async def get_site_config():
    """Get site configuration"""
    config = await db.site_config.find_one({}, {"_id": 0})
    if not config:
        raise HTTPException(status_code=404, detail="Site config not found")
    return config

# Essays
@api_router.get("/essays", response_model=List[EssayListItem])
async def get_essays(published_only: bool = True):
    """Get all essays (list view - no body content)"""
    query = {"published": True} if published_only else {}
    essays = await db.essays.find(query, {"_id": 0, "body": 0}).sort("created_at", -1).to_list(100)
    return essays

@api_router.get("/essays/recent", response_model=List[EssayListItem])
async def get_recent_essays(limit: int = 3):
    """Get recent essays for homepage"""
    essays = await db.essays.find(
        {"published": True}, 
        {"_id": 0, "body": 0}
    ).sort("created_at", -1).limit(limit).to_list(limit)
    return essays

@api_router.get("/essays/{slug}")
async def get_essay_by_slug(slug: str):
    """Get single essay by slug"""
    essay = await db.essays.find_one({"slug": slug, "published": True}, {"_id": 0})
    if not essay:
        raise HTTPException(status_code=404, detail="Essay not found")
    return essay

# About
@api_router.get("/about")
async def get_about():
    """Get about page content"""
    about = await db.about.find_one({}, {"_id": 0})
    if not about:
        raise HTTPException(status_code=404, detail="About content not found")
    return about

# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
