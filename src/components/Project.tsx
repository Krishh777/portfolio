import React from "react";
import radius from '../assets/images/radius.png';
import pipeline from '../assets/images/pipeline.png';
import cloudguard from '../assets/images/cloudguard.png';
import attendease from '../assets/images/attendees.png'
import cancervisionnet from '../assets/images/cancervis.png';
import lightsail from '../assets/images/light.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><img src={radius} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><h2>Radius: Your 5-km Internet</h2></a>
                <p>AI-powered hyperlocal discovery platform (in development) that recommends nearby people and activities within a 1-5 km radius. Uses PostGIS geospatial filtering, TF-IDF and cosine similarity matching, and weighted ranking on distance and interest relevance, with opt-in privacy controls. Built with Python, FastAPI, PostgreSQL/PostGIS, scikit-learn, and Azure.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><img src={pipeline} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777" target="_blank" rel="noreferrer"><h2>Self-Healing CI/CD Pipeline</h2></a>
                <p>End-to-end delivery pipeline (in development): Jenkins builds and tests a containerized app, pushes the Docker image to a registry, and deploys to Kubernetes using canary releases. Prometheus metrics trigger automatic rollback on a bad release, and an LLM step reads failed build logs and posts a root-cause summary. Built with Jenkins, Docker, Kubernetes, Prometheus, and Python.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Krishh777/Cloud_Guard_ai" target="_blank" rel="noreferrer"><img src={cloudguard} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777/Cloud_Guard_ai" target="_blank" rel="noreferrer"><h2>CloudGuard AI</h2></a>
                <p>Intelligent AWS data security platform built as a three-layer edge-fog-cloud architecture for data protection and threat detection. Built with Python and AWS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Krishh777/AttendEase" target="_blank" rel="noreferrer"><img src={attendease} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777/AttendEase" target="_blank" rel="noreferrer"><h2>AttendEase</h2></a>
                <p>Serverless attendance management system built on cloud-native services. Built with JavaScript and AWS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Krishh777/CancerVisionNet" target="_blank" rel="noreferrer"><img src={cancervisionnet} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777/CancerVisionNet" target="_blank" rel="noreferrer"><h2>CancerVisionNet</h2></a>
                <p>Deep learning system for automated histopathological classification of cancerous and non-cancerous tissue samples. Built with Python and Jupyter.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Krishh777/aws-lightsail-wordpress-rds-deployment" target="_blank" rel="noreferrer"><img src={lightsail} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Krishh777/aws-lightsail-wordpress-rds-deployment" target="_blank" rel="noreferrer"><h2>WordPress on AWS Lightsail + RDS</h2></a>
                <p>Production-ready WordPress deployment on AWS Lightsail with Amazon RDS integration, automated backups, and a scalable architecture.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;