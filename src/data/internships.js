// To add a certificate image: drop the file into src/assets/internships/
// and set `image` below to that import, e.g. image: internCert1
import robCert from "../assets/internships/robotic-cert.jpeg";
import embCert from "../assets/internships/embed-cert.jpeg";
import apexCert from "../assets/internships/apex-cert.jpg";

export const internships = [
  {
    id: "internship-1",
    company: "Zetsphere Technologies Private Limited, Madurai",
    role: "Project-Based Robotics & IoT Trainee",
    duration: "22 Jan 2024 – 30 Jan 2024 (5-Day Training)",
    description:
      "Completed a project-based robotics and IoT training program conducted through the e-Yantra Lab Setup Initiative (eLSI) at Sethu Institute of Technology. Gained hands-on exposure to robotics, IoT concepts, hardware components, and project-based implementation.",
    image: robCert,
  },
  {
    id: "internship-2",
    company: "Tarcin Robotic LLP, KK Nagar, Madurai",
    role: "Embedded Systems Intern",
    duration: "08 Aug 2025 – 30 Aug 2025 (23 Days)",
    description:
      "Worked on real-time Embedded Systems projects, gaining practical experience applying theoretical concepts to real-world applications. Contributed to project development and built a practical understanding of hardware–software integration.",
    image: embCert,
  },
    {
    id: "internship-3",
    company: "APEX I SYS, Coimbatore-12",
    role: "Web Designing Intern",
    duration: "09 Jul 2026 – 08 Aug 2026 (1 Month)",
    description:
      "Completed a one-month internship in Web Designing at APEX I SYS, Coimbatore. Gained hands-on exposure to web design concepts, webpage structure, layout creation, styling, and user-friendly interface development.",
    image: apexCert,
  },
];