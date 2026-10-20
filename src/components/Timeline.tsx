import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Cloud & DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent</h4>
            <p>
              Delivered a small client project covering AWS infrastructure setup, CI/CD pipeline automation, and containerized deployment. AWS, Docker, GitHub Actions, Linux
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2026 - Jul 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BlackBox IP Corporation</h4>
            <p>
              YOLOv5 field detection for USPTO OATH PDFs (0.991 precision, 0.929 recall, 45% better extraction accuracy). Re-architected OCR pipeline with 88.7% batch success rate. Python, PyTorch, OpenCV, PaddleOCR, Kubernetes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026 - Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research: AI Agent-Based Disaster Management</h3>
            <h4 className="vertical-timeline-element-subtitle">Recovery Systems</h4>
            <p>
              Predictive Analytics, Automated Response Workflows, Scalable Emergency Coordination
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2027"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech, Computer Science Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Bennett University, Greater Noida</h4>
            <p>
              Cloud Computing Specialization, CGPA 7.26/10. Data Structures & Algorithms, Microservices, System Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Certifications"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AWS Academy Graduate: Cloud Architecting</h3>
            <h4 className="vertical-timeline-element-subtitle">Also: CUDA C++ (Accelerated Computing)</h4>
            <p>
              Designed scalable cloud architectures, secured and managed AWS services, wrote parallel GPU-accelerated C++ code
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;