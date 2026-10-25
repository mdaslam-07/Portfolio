// To add a certificate image: drop the file into src/assets/certificates/
// and set `image` below to that import, e.g. image: certNptel
//
// type: "codechef" marks the single CodeChef card — its certificates live in
// src/data/codechef.js and open in a panel.
//
// `pendingCertificate: true` shows a disabled "View Certificate" button until
// you add a real `image` (imported file) or `link` (verified URL).
import nptelCert from "../assets/certificates/nptel-hci.jpeg";
import ociCert from "../assets/certificates/oci-ai.jpeg";
import dataScienceCert from "../assets/certificates/data-science.jpg";
import aiMlCert from "../assets/certificates/ai-ml.jpg";
import cloudCert from "../assets/certificates/cloud.jpg";

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
  { id: "codechef", type: "codechef" },
  {
    id: "data-science-beginners",
    title: "Data Science for Beginners",
    platform: "Board Infinity",
    issuer: null,
    image: dataScienceCert,
    link: null,
    pendingCertificate: true,
  },
  {
    id: "ai-ml-futureskills",
    title: "Artificial Intelligence & Machine Learning (AI/ML)",
    platform: "FutureSkills Prime",
    issuer: "NASSCOM IT-ITeS SSC",
    image: aiMlCert,
    link: null,
    pendingCertificate: true,
  },
  {
    id: "cloud-computing-futureskills",
    title: "Cloud Computing Engineering (Azure / AWS)",
    platform: "FutureSkills Prime",
    issuer: "NASSCOM IT-ITeS SSC",
    image: cloudCert,
    link: null,
    pendingCertificate: true,
  },
];
