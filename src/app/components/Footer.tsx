import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faFacebook, faGithub, faDiscord, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
export default function Footer(){
    return (
    
        <div className="footer flex flex-col justify-evenly items-center ">
  <div className="media-buttons flex gap-4">
          <a
            href="https://www.linkedin.com/in/syeda-maham-amjad-4467b1295"
            
            target="_blank" 
            rel="noopener noreferrer"
          >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088904124091"
            target="_blank"
            rel="noopener noreferrer"
          >
                                <FontAwesomeIcon icon={faFacebookF} />

          </a>
          <a
            href="https://github.com/maham719"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
          <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.instagram.com/syeda_maham_amjadd/">
          <FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="links">
            <ul className="flex justify-center items-center  gap-4">
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQs</li>
                <li>Help</li>
            </ul>
        </div>
        <div className="copyright"><a href="#">© Domain Name</a>. All Rights Reserved. Designed by <a href="#">Syeda Maham Amjad</a>
        </div>
        </div>
        
    );
}