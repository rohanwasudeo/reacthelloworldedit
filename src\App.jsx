import React, { useState } from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm animate__animated animate__fadeInDown" style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1050}}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <i className="bi bi-bootstrap-fill text-primary me-2" style={{fontSize: '1.5rem'}}></i>
          Hello World React
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-white shadow-sm animate__animated animate__fadeInUp" style={{position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 100}}>
      <div className="container text-center">
        <span className="text-muted">
          &copy; {new Date().getFullYear()} Hello World React App &mdash; Made with <i className="bi bi-heart-fill text-danger"></i> & Bootstrap 5
        </span>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required.';
    if (!values.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errs.email = 'Email is invalid.';
    }
    if (!values.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      }, 1200);
    }
  }

  return (
    <section id="contact" className="my-5 animate__animated animate__fadeInUp">
      <div className="container" style={{maxWidth: 600}}>
        <div className="card shadow border-0">
          <div className="card-body p-4">
            <h2 className="mb-3 text-center">Contact Us</h2>
            <p className="text-muted text-center mb-4">Have a question or feedback? Fill out the form below and we'll get back to you soon!</p>
            {submitted ? (
              <div className="alert alert-success animate__animated animate__fadeIn mb-0" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="off"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control${errors.email ? ' is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="off"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className={`form-control${errors.message ? ' is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    {loading ? (
                      <span>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </span>
                    ) : (
                      <span><i className="bi bi-send me-2"></i>Send Message</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="container vh-100 d-flex justify-content-center align-items-center" style={{paddingTop: '80px', paddingBottom: '60px'}}>
        <div className="text-center animate__animated animate__fadeIn">
          <h1 className="display-4 mb-3">Hello World</h1>
          <p className="lead">Welcome to your first React + Bootstrap app!</p>
          <i className="bi bi-emoji-smile" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
