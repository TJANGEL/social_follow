import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3 className="social-title">Follow Me</h3>
      <a href="www.youtube.com" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="www.facebook.com" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="www.instagram.com" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
