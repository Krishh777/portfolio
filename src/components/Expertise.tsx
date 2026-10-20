import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "CloudWatch",
    "S3",
    "EC2",
    "RDS",
    "IAM",
    "Azure",
    "Serverless"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "Git",
    "GitHub",
    "Linux",
    "Auto-scaling"
];

const labelsThird = [
    "Python",
    "FastAPI",
    "Flask",
    "PyTorch",
    "YOLOv5",
    "OpenCV",
    "PaddleOCR",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "PostgreSQL",
    "SQL",
    "C++",
    "CUDA"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Serverless</h3>
                    <p>I design cloud-native systems on AWS. My Attendees platform runs on Lambda, API Gateway and DynamoDB, supports 10,000+ concurrent users, and responds in under 35ms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I automate builds, testing and deployments with Docker and CI/CD pipelines, and I work with Kubernetes and Infrastructure as Code (Terraform).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML Pipelines & Backend</h3>
                    <p>At BlackBox IP I built a YOLOv5 document-processing pipeline with 0.991 precision and 0.929 recall. I also build REST APIs and backends with FastAPI and PostgreSQL.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;