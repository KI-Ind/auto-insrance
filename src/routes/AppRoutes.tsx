import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const Comment = lazy(() => import('../pages/Comment'));
const Comparateur = lazy(() => import('../pages/Comparateur'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Legal = lazy(() => import('../pages/Legal'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const ResetPassword = lazy(() => import('../pages/ResetPassword'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Team = lazy(() => import('../pages/Team'));
const History = lazy(() => import('../pages/History'));
const Careers = lazy(() => import('../pages/Careers'));
const Admin = lazy(() => import('../pages/Admin'));
const Contact = lazy(() => import('../pages/Contact'));
const Ressources = lazy(() => import('../pages/Ressources'));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/comment-ca-marche" element={<Comment />} />
        <Route path="/comparateur" element={<Comparateur />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="/conditions" element={<Terms />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/notre-histoire" element={<History />} />
        <Route path="/carrieres" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ressources" element={<Ressources />} />

        {/* Auth Routes */}
        <Route path="/connexion" element={<SignIn />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/reinitialisation-mot-de-passe" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/tableau-de-bord"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profil"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
