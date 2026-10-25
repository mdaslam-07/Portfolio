// To add images for an achievement: drop the file(s) into
// src/assets/achievements/ and set `certificateImage` and/or `proofImage`
// below to that import.
//   certificateImage -> shows a "View Certificate" button
//   proofImage       -> shows a "View Proof" button (e.g. prize/award photo)
// Leave either one as null to hide that button for that achievement.
import paperCert from "../assets/achievements/paper-1st-cert.jpeg";
import paperProof from "../assets/achievements/paper-1st-proof.jpeg";
import icecisCert from "../assets/achievements/icecis.jpeg";
import codechefBadgeCert from "../assets/achievements/codechef-diamond.jpg";

export const achievements = [
  {
    id: "paper-1st",
    title: "1st Prize — Paper Presentation",
    org: "SBM College",
    detail: "Placed first for a technical paper presentation.",
    certificateImage: paperCert,
    proofImage: paperProof,
  },
  {
    id: "icecis",
    title: "ICECIS 2026",
    org: "International Conference",
    detail: "Presented the Automated Crop Guard scent-barrier system.",
    certificateImage: icecisCert,
    proofImage: null,
  },
  {
    id: "codechef-diamond",
    title: "CodeChef Diamond Badge",
    org: "CodeChef",
    detail: "Earned a Diamond Badge on CodeChef for solving 1,000 problems.",
    // Uses a Gem icon until an official badge image is added (set `badgeImage`).
    icon: "gem",
    badgeImage: null,
    // Add your CodeChef profile URL here to show a "View CodeChef Profile" link.
    profileUrl: null,
    certificateImage: codechefBadgeCert,
    proofImage: null,
  },
];
