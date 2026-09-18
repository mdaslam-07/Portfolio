Drop project screenshots/renders here, then import them in src/data/projects.js
and set the `image` field, e.g.:

  import palmyrahImg from "../assets/projects/palmyrah-arm.jpg";
  ...
  { id: "palmyrah-arm", image: palmyrahImg, ... }

  import cropGuardImage from "../assets/projects/crop-guard.png";
  ...
  { id: "crop-guard", image: cropGuardImage, ... }

  import pestDetectionImage from "../assets/projects/pest-detection.png";
  ...
  { id: "pest-egg", image: pestDetectionImage, ... }

  import lifiDroneImage from "../assets/projects/lifi-drone.png";
  ...
  { id: "lifi-drone", image: lifiDroneImage, ... }

  import libraryMgmtImage from "../assets/projects/library-mgmt.png";
  ...
  { id: "library-mgmt", image: libraryMgmtImage, ... }

  import studentMgmtImage from "../assets/projects/student-mgmt.png";
  ...
  { id: "student-mgmt", image: studentMgmtImage, ... }

Then in src/components/ProjectCard.jsx, swap the placeholder <div> for:
  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
