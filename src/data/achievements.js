// To add images for an achievement: drop the file(s) into
// src/assets/achievements/ and set `certificateImage` and/or `proofImage`
// below to that import.
//   certificateImage -> shows a "View Certificate" button
//   proofImage       -> shows a "View Proof" button (e.g. prize/award photo)
// Leave either one as null to hide that button for that achievement.
import paperCert from "../assets/achievements/paper-1st-cert.jpeg";
import paperProof from "../assets/achievements/paper-1st-proof.jpeg";
import icecisCert from "../assets/achievements/icecis.jpeg";

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
];
