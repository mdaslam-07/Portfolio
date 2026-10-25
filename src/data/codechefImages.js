// Certificate images for the CodeChef panel.
//
// Drop the image files into src/assets/codechef/. Each certificate in
// src/data/codechef.js has a `file` name (without extension); the image whose
// file name matches it (png, jpg, jpeg or webp) is picked up automatically,
// so no import lines are needed. Example: file: "sql-at-work" -> sql-at-work.jpg
//
// Two images that were already in the project are used until you add files.
import sqlRoadmapImg from "../assets/certificates/sql-roadmap.jpeg";
import pythonProblemSolvingImg from "../assets/certificates/python-ps.jpeg";

const dropped = import.meta.glob("../assets/codechef/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
});

const fromFolder = Object.fromEntries(
  Object.entries(dropped).map(([path, src]) => {
    const fileName = path.split("/").pop();
    // "sql-interview.png.png" still maps to "sql-interview"
    const stem = fileName.split(".")[0].toLowerCase();
    return [stem, src];
  })
);

const defaults = {
  "sql-roadmap": sqlRoadmapImg,
  "py-problem-solving": pythonProblemSolvingImg,
};

export function getCodechefImage(cert) {
  return fromFolder[cert.file] ?? fromFolder[cert.id] ?? defaults[cert.id] ?? null;
}
