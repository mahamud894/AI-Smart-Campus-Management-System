import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import campusImg from '../assets/campus-hero.webp';
import { useAuth } from '../auth/auth-context';
import { getDashboardPath } from '../utils/routes';

function HomePage() {
  const { isAuthenticated, user } = useAuth();
  const dashboardPath = getDashboardPath(user);
  const features = [
    { title: 'Attendance Tracking', desc: 'Real-time updates on class participation and absence patterns.', icon: 'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 11 2 2 4-4' },
    { title: 'Academic Insights', desc: 'Clear view of marks, GPA trends, and performance summaries.', icon: 'M4 19V9m5 10V5m5 14v-7m5 7V3' },
    { title: 'AI Study Support', desc: 'Smart guidance and academic recommendations 24/7.', icon: 'M12 3 10.7 7.1a5 5 0 0 1-3.2 3.2L3.5 12l4 1.7a5 5 0 0 1 3.2 3.2L12 21l1.7-4.1a5 5 0 0 1 3.2-3.2L21 12l-4.1-1.7a5 5 0 0 1-3.2-3.2L12 3Z' },
  ];

  return (
    <Layout title="Home" subtitle="Welcome to NUBTK Smart Campus">
      <section className="home-hero rounded-4 shadow-sm p-4 p-lg-5 mb-5 mt-3" style={{ background: 'linear-gradient(145deg, #f8fafc, #e2e8f0)' }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-4 border border-primary-subtle">
              NUBTK Smart Campus Platform
            </div>

            <h1 className="display-4 mb-3" style={{ fontWeight: 800, color: '#1e293b', lineHeight: '1.2' }}>
              Northern University of <br />
              <span style={{ color: '#2563eb' }}>Business &amp; Technology, Khulna</span>
            </h1>

            <p className="lead text-secondary mb-5 fs-4">
              Smarter campus operations, attendance, and student progress from one unified platform.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              {!isAuthenticated && (
                <Link to="/register" className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm fw-bold">Create Account</Link>
              )}
              <Link to={isAuthenticated ? dashboardPath : '/login'} className="btn btn-white btn-lg rounded-pill px-5 bg-white shadow-sm border fw-bold text-dark">
                {isAuthenticated ? 'View Dashboard' : 'Sign In'}
              </Link>
            </div>

            <div className="d-flex gap-4">
              <div>
                <h3 className="fw-bold mb-0 text-dark">3</h3>
                <span className="text-muted small fw-semibold">Student, faculty &amp; admin workspaces</span>
              </div>
              <div className="border-start ps-4 border-2">
                <h3 className="fw-bold mb-0 text-dark">24/7</h3>
                <span className="text-muted small fw-semibold">AI Support Available</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative">
              <img src={campusImg} alt="NUBTK Campus" decoding="async" className="img-fluid w-100" style={{ height: '420px', objectFit: 'cover' }} />

              {isAuthenticated && (
                <div className="position-absolute bottom-0 start-0 w-100 p-3 p-lg-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <div className="bg-white rounded-4 p-3 shadow-sm border-top border-primary border-4 d-flex justify-content-between align-items-center gap-3">
                    <div className="min-w-0">
                      <small className="text-muted d-block fw-semibold">Signed in as</small>
                      <span className="fw-bold text-dark">{user?.name || 'Campus member'}</span>
                    </div>
                    <Link to={dashboardPath} className="btn btn-primary rounded-pill px-3 flex-shrink-0">Open dashboard</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mb-5">
        {features.map((feature) => (
          <div key={feature.title} className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white" style={{ transition: 'transform 0.3s ease' }}>
              <div className="home-feature-icon mb-3" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg>
              </div>
              <h4 className="fw-bold text-dark">{feature.title}</h4>
              <p className="text-secondary mb-0 fs-6">{feature.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-4 p-5 text-center text-white shadow-lg mb-4" style={{ background: 'linear-gradient(135deg, #2563eb, #0f172a)' }}>
        <span className="badge bg-white bg-opacity-25 text-white rounded-pill px-3 py-2 mb-3 shadow-sm border border-light">READY TO EXPLORE</span>
        <h2 className="display-6 fw-bold mb-4">Launch your smart campus experience today.</h2>
        <Link to={isAuthenticated ? dashboardPath : '/login'} className="btn btn-light btn-lg text-primary rounded-pill px-5 fw-bold shadow">
          {isAuthenticated ? 'Open Dashboard' : 'Get Started Now'}
        </Link>
      </section>
    </Layout>
  );
}

export default HomePage;
