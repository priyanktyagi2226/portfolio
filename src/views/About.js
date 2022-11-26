import Header from '../components/header';
import AboutPage from '../components/aboutPage';
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
const About = () => {
    return (
        <>
           <Helmet>
           <title>Priyank Tyagi - About Me</title>
                    <meta name="title" content="Priyank Tyagi - Software Engineer" />
                    <meta name="description" content="Priyank Tyagi is a software engineer who specializes in UI development and react js development.Skills like html,css,scss,js,jquery,bootstrap,react,wordpress,hubspot,webflow." />
                    <meta name="keywords" content="priyank,tyagi,https://priyanktyagi.com/,https://www.linkedin.com/in/priyank-tyagi-a09468139/,https://www.instagram.com/priyank.tyagi.engineer/,Priyank Tyagi,priyank tyagi,https://www.facebook.com/priyank.tyagi.engineer,accenture,priyank_tyagi_,priyanktyagi,priyanktyagi.com,Software Engineer,Software Developer,Portfolio,HTML,CSS,JS,JQUERY" />
                    <meta property="og:title" content="priyank,tyagi,https://priyanktyagi.com/,https://www.linkedin.com/in/priyank-tyagi-a09468139/,https://www.instagram.com/priyank.tyagi.engineer/,Priyank Tyagi,priyank tyagi,https://www.facebook.com/priyank.tyagi.engineer,accenture,priyank_tyagi_,priyanktyagi,priyanktyagi.com,Software Engineer,Software Developer,Portfolio,HTML,CSS,JS,JQUERY" />
                    <meta property="og:description" content="Priyank Tyagi is a software engineer who specializes in UI development and react js development.Skills like html,css,scss,js,jquery,bootstrap,react,wordpress,hubspot,webflow." />
                    <meta name="twitter:card" content="Software Engineer | Priyank Tyagi" />
                    <meta property="og:site_name" content="Priyank Tyagi" />
                    <meta property="og:type" content="Portfolio" />
                    <meta property="category" content="Software engineer" />
                    <meta property="og:url" content="https://priyanktyagi.com" />
                    <link rel="canonical" href="https://priyanktyagi.com" />
                    <meta name="author" content="Priyank Tyagi" />
            </Helmet>
            <Header></Header>
             <AboutPage></AboutPage>
            
            <Footer></Footer>
        </>
    )
}

export default About;