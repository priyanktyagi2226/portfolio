import React from "react";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import boopSfx from '../sound/sound2.mp3';

const Footer = () => {
  const [play] = useSound(boopSfx);
  return (
    <>
      <div className="priyank_ty_section">
        <div className="priyank_ty_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} by{" "}
                <a
                  href="https://priyanktyagi.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={play}
                >
                  Priyank Tyagi
                </a>
                . All rights reserved.
              </p>
              <p className="legal-box-foot social-icons">
                <ul>
                <li>
                  <a onClick={play} target="_blank" href="https://www.linkedin.com/in/priyank-tyagi/">
                    <img src={process.env.PUBLIC_URL + "images/linkedin.svg"
                        } alt="linkedin"></img>
                  </a>
                  </li>
                  <li>
                  <a onClick={play} target="_blank" href="https://www.facebook.com/priyank.tyagi.engineer">
                    <img src={process.env.PUBLIC_URL + "images/facebook.svg"
                        } alt="facebook"></img>
                  </a>
                  </li>
                  <li>
                  <a onClick={play} target="_blank" href="https://www.instagram.com/priyank.tyagi.engineer" className="instagram-circle">
                    <img src={process.env.PUBLIC_URL + "images/instagram.svg"
                        } alt="instagram"></img>
                  </a>
                  </li>
                </ul>
              </p>
              <p className="legal-box-foot">
                <ul>
                  <li>
                    <Link onClick={play} to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link onClick={play} to="/terms-and-condition">Terms & Conditions</Link>
                  </li>
                </ul>
              </p>
             
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End priyank_ty_copyright */}
      </div>
    </>
  );
};

export default Footer;
