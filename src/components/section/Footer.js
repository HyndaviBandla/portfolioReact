import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div>
      {" "}
      <footer id="footer">
        <div class="container-fluid">
          <div class="social-icons mt-4">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitch.tv/" target="_blank">
              <i class="fab fa-twitch"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
