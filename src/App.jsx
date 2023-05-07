import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import { ServiceProvider } from './Context API/ServicesContext';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ServicesPage from './Pages/ServicesPage';
import Service from './Pages/Service';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import BlogPostPage from './Pages/BlogPostPage';
import { BlogProvider } from './Context API/BlogContext';
import Layout from './Pages/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardCards from './Components/DashbordCards/DashboardCards';
import Orders from './Pages/Orders';
import MiniServicePage from './Pages/MiniServicePage';
import YouTubeScript from './Pages/YouTubeScript';
import WordPressweb from './Pages/WordPressweb';
import Videoediting from './Pages/Videoediting';
import TechnicalSEOplans from './Components/Plans/TechnicalSEOplans';
import Socialmedia from './Pages/Socialmedia';
import SEOblog from './Pages/SEOblog';
import Logodesign from './Pages/Logodesign';
import LocalSEO from './Pages/LocalSEO';
import LeadGeneration from './Pages/LeadGeneration';
import Landingpages from './Pages/Landingpages';
import Keywordresearch from './Pages/Keywordresearch';
import Googleads from './Pages/Googleads';
import Fullstackweb from './Pages/Fullstackweb';
import Flyerdesign from './Pages/Flyerdesign';
import Facebookads from './Pages/Facebookads';
import Emailcopywriting from './Pages/Emailcopywriting';
import Ecommerce from './Pages/Ecommerce';
import Copywriting from './Pages/Copywriting';
import BlogWriting from './Pages/BlogWriting';
import { AuthProvider } from './Context API/AuthContext';



function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <BlogProvider>
          <ServiceProvider>
              <Routes>
                  <Route path="/signup" element={<SignUpPage/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/services" element={<ServicesPage/>}/>
                  <Route path="/mini_service" element={<MiniServicePage/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/blog" element={<BlogsPage/>}/>
                  <Route path="/post" element={<BlogPostPage/>}/>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/blog_writing" element={<BlogWriting/>}/>
                  <Route path="/copywriting" element={<Copywriting/>}/>
                  <Route path="/ecommerce" element={<Ecommerce/>}/>
                  <Route path="/email_copywriting" element={<Emailcopywriting/>}/>
                  <Route path="/facebook_ads" element={<Facebookads/>}/>
                  <Route path="/flyer_design" element={<Flyerdesign/>}/>
                  <Route path="/full_stack" element={<Fullstackweb/>}/>
                  <Route path="/google_ads" element={<Googleads/>}/>
                  <Route path="/keyword_search" element={<Keywordresearch/>}/>
                  <Route path="/landing_pages" element={<Landingpages/>}/>
                  <Route path="/lead_gen" element={<LeadGeneration/>}/>
                  <Route path="/local_seo" element={<LocalSEO/>}/>
                  <Route path="/logo_design" element={<Logodesign/>}/>
                  <Route path="/seo_blog" element={<SEOblog/>}/>
                  <Route path="/social_media" element={<Socialmedia/>}/>
                  <Route path="/technical_seo" element={<TechnicalSEOplans/>}/>
                  <Route path="/video_editing" element={<Videoediting/>}/>
                  <Route path="/wordpress" element={<WordPressweb/>}/>
                  <Route path="/youtube" element={<YouTubeScript/>}/>
              </Routes>
          </ServiceProvider>
        </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
