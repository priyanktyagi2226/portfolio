import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";

const Terms = () => {
    return (
        <>
           <Helmet>
           <title>Priyank Tyagi - Tersms & Conditions</title>
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
            <div className='legal-header'>
                    <div className='container'>
                        <h1>Terms & Conditions</h1>
                    </div>
                </div>
                <div className='container legal-pages'>
                    <h2>1.Terms of Service</h2>
                    <h3>1. Terms</h3>
                    <p>By accessing the website at <a href='https://priyanktyagi.com/'>Priyank Tyagi</a> you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law. </p>
                    <h3>2. Use License</h3>
                    <ol>
                        <li> Permission is granted to temporarily download one copy of the materials (information or software) on Priyank Tyagi's website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not: <ol>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Priyank Tyagi website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or 'mirror' the materials on any other server.</li>
                        </ol>
                        </li>
                        <li> 2. This licence shall automatically terminate if you violate any of these restrictions and may be terminated by Priyank Tyagi at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format. </li>
                    </ol>
                    <h3>3. Disclaimer</h3>
                    <ol>
                        <li>1. The materials on Priyank Tyagi's website are provided on an 'as is' basis. Priyank Tyagi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                        <li>2. Further, Priyank Tyagi does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
                    </ol>
                    <h3>4. Limitations</h3>
                    <p>In no event shall Priyank Tyagi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Priyank Tyagi's website, even if Priyank Tyagi or a Priyank Tyagi authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                    <h3>5. Accuracy of materials</h3>
                    <p>The materials appearing on Priyank Tyagi's website could include technical, typographical, or photographic errors. Priyank Tyagi does not warrant that any of the materials on its website are accurate, complete or current. Priyank Tyagi may make changes to the materials contained on its website at any time without notice. However Priyank Tyagi does not make any commitment to update the materials.</p>
                    <h3>6. Links</h3>
                    <p>Priyank Tyagi has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Priyank Tyagi of the site. Use of any such linked website is at the user's own risk.</p>
                    <h3>7. Modifications</h3>
                    <p>Priyank Tyagi may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                    <h3>8. Governing Law</h3>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Priyank Tyagi and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

                </div>
            
            <Footer></Footer>
        </>
    )
}

export default Terms;