import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/FAQ/FAQ";
import Pricing from "../pages/Pricing/Pricing";
import Team from "../pages/Team/Team";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Wishlist from "../pages/Wishlist/Wishlist";
import Dashboard from "../pages/Dashboard/Dashboard";
import {
  Career,
  Events,
  BlogTwo,
  BlogThree,
  ContactTwo,
} from "../pages/ExtraPages/ExtraPages";
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career" element={<Career />} />
        <Route path="/events" element={<Events />} />

        <Route path="/blog-two" element={<BlogTwo />} />
        <Route path="/blog-three" element={<BlogThree />} />

        <Route path="/contact-two" element={<ContactTwo />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
