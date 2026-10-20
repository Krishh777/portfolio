import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/ace2.jpg"}
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
            <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/krishbagga7799" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
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

          <div className="mobile_social_icons">
            <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/krishbagga7799" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;