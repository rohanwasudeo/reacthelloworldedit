import React from "react";

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

function App() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center animate__animated animate__fadeIn">
          <h1 className="display-4 mb-3">Hello World</h1>
          <p className="lead">Welcome to your first React + Bootstrap app!</p>
          <i className="bi bi-emoji-smile" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
