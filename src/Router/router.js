import React from "react";


// import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import Blog from "../views/Blog";
// import BlogDetail from "../views/BlogDetail";
import Privacy from "../views/Privacy";
import Terms from "../views/Terms";
const RoutesData = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blog></Blog>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy></Privacy>} />
          <Route path="/terms-and-condition" element={<Terms></Terms>} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
          {/* <Route exact path="/" component={Preview} />
          <Route path="/home-one" component={HomeOne} />
          <Route path="/home-two" component={HomeTwo} />
          <Route path="/home-three" component={HomeThree} /> */}
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/" exact component={HomeFour} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/products/:slug" component={BlogDetail} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/terms-and-condition" component={Terms} />
          <Route component={NotFound} /> */}
    </>
  );
};

export default RoutesData;
