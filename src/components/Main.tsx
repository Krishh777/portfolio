
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import React, { useEffect } from 'react';

function Main() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/profile.png"}
            alt="Krish Bagga"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/krishbagga7799" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Krish Bagga</h1>
          <p>Software Engineer</p>

          <a
            className="resume-btn"
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            download="Krish_Bagga_Resume.pdf"
          >
            <DownloadIcon fontSize="small" />
            Download Resume
          </a>

          {/* Credly AWS Certification Badge */}
          <div className="credly-badge">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="9252450c-0bea-4a58-8e16-ef6b8f04f34d"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/krishbagga7799" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
