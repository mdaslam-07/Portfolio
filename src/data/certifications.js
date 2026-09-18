// To add a certificate image: drop the file into src/assets/certificates/
// and set `image` below to that import, e.g. image: certNptel
import nptelCert from "../assets/certificates/nptel-hci.jpeg";
import ociCert from "../assets/certificates/oci-ai.jpeg";
import sqlRoadmapCert from "../assets/certificates/sql-roadmap.jpeg";
import pythonCert from "../assets/certificates/python-ps.jpeg";

export const certifications = [
  {
    id: "nptel-hci",
    title: "Human-Computer Interaction",
    platform: "NPTEL",
    note: null,
    score: null,
    highlight: true,
    image: nptelCert,
    link: null,
  },
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    platform: "Oracle University",
    note: null,
    score: null,
    highlight: true,
    image: ociCert,
    link: null,
  },
  {
    id: "sql-roadmap",
    title: "SQL Roadmap for Data Analysis",
    platform: "CodeChef",
    note: null,
    score: null,
    highlight: false,
    image: sqlRoadmapCert,
    link: null,
  },
  {
    id: "python-problem-solving",
    title: "Problem Solving in Python",
    platform: "CodeChef",
    note: null,
    score: null,
    highlight: false,
    image: pythonCert,
    link: null,
  },
];
