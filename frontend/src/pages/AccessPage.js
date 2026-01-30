import { useState } from 'react';
import { Layout } from '../components/Layout';

export const AccessPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    context: '',
    why: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/access-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="access-page" data-testid="access-page-submitted">
          <header className="page-header">
            <h1 className="page-title">Received</h1>
          </header>
          <div className="access-confirmation">
            <p className="confirmation-text" data-testid="confirmation-text">
              Your request has been logged. If your context aligns with our 
              current work, we will be in touch. If you do not hear from us, 
              it is not an oversight.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="access-page" data-testid="access-page">
        {/* Header */}
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">Access</h1>
        </header>

        {/* Framing Statement */}
        <section className="access-framing">
          <p className="framing-text" data-testid="framing-text">
            BACKGRND engages selectively. We do not respond to general inquiries, 
            partnership proposals, or requests for introductory conversations. 
            The form below is not an invitation to contact—it is a filter.
          </p>
          <p className="framing-text">
            We review submissions periodically. Most do not receive a response. 
            This is not discourtesy; it is a reflection of how we allocate 
            attention. If your context does not align with our current work, 
            you will not hear from us.
          </p>
        </section>

        {/* Appropriate Contexts */}
        <section className="access-section">
          <h2 className="access-section-title" data-testid="section-contexts">Appropriate Contexts</h2>
          <div className="access-section-body">
            <p>
              Principals with capital at stake who require structural analysis 
              before making a commitment. Family offices, holding companies, or 
              independent investors evaluating a specific opportunity.
            </p>
            <p>
              Founders or operators seeking an independent view of their own 
              business architecture—not advice, but clarity.
            </p>
            <p>
              Individuals who have been referred directly and were given reason 
              to believe their inquiry would be appropriate.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="access-form-section">
          <form onSubmit={handleSubmit} className="access-form" data-testid="access-form">
            <div className="form-field">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                data-testid="input-name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="role" className="form-label">Role / Capacity</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                required
                data-testid="input-role"
              />
            </div>

            <div className="form-field">
              <label htmlFor="context" className="form-label">Context</label>
              <textarea
                id="context"
                name="context"
                value={formData.context}
                onChange={handleChange}
                className="form-textarea"
                rows={4}
                required
                data-testid="input-context"
              />
            </div>

            <div className="form-field">
              <label htmlFor="why" className="form-label">Why BACKGRND</label>
              <textarea
                id="why"
                name="why"
                value={formData.why}
                onChange={handleChange}
                className="form-textarea"
                rows={4}
                required
                data-testid="input-why"
              />
            </div>

            <button 
              type="submit" 
              className="form-submit"
              disabled={submitting}
              data-testid="submit-button"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default AccessPage;
