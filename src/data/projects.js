// Replace `image` paths with your own screenshots/renders.
// Drop image files into: src/assets/projects/ and update the path below.
// Until then, each project falls back to a generated placeholder panel.

import palmyrahArmImage from "../assets/projects/palmyrah-arm.jpeg";
import cropGuardImage from "../assets/projects/crop-guard.png";
import pestDetectionImage from "../assets/projects/pest-detection.png";
import lifiDroneImage from "../assets/projects/lifi-drone.png";
import libraryMgmtImage from "../assets/projects/library-mgmt.png";
import studentMgmtImage from "../assets/projects/student-mgmt.png";

export const projects = [
  {
    id: "palmyrah-arm",
    featured: true,
    title: "AI-Based Robotic Arm for Palmyrah Fruit Harvesting",
    category: "Robotics · Computer Vision",
    description:
      "A robotic arm that identifies ripe Palmyrah fruit through a camera feed and reaches it with servo-driven joints — built so harvesters no longer have to climb the tree by hand.",
    tech: ["Arduino", "Servo Motors", "Computer Vision", "AI/ML", "Embedded C"],
    image: palmyrahArmImage,
    links: { github: null, demo: null },
    detail: {
      problem:
        "Palmyrah harvesting is traditionally done by climbing tall, unstable trees — a slow and physically dangerous task for farm workers.",
      solution:
        "A ground-operated robotic arm with base, shoulder, elbow and gripper joints, guided by a camera that detects ripe fruit and plans a reach path toward it.",
      how:
        "A camera stream is processed for fruit detection, the detected coordinates are mapped to joint angles, and an Arduino drives the servo motors through the base, shoulder, elbow and gripper in sequence to grasp the fruit.",
      tech: ["Arduino", "Servo Motors", "Camera-based detection", "Computer Vision", "AI/ML", "IoT/Embedded Systems"],
      contribution:
        "Designed the arm's movement logic and integrated the detection pipeline with the servo control sequence.",
      future:
        "Improve detection accuracy across lighting conditions and add autonomous positioning so the arm can reposition itself along a row of trees.",
    },
  },
  {
    id: "crop-guard",
    featured: true,
    title: "Automated Crop Guard — Scent Barrier",
    category: "IoT · Smart Agriculture",
    description:
      "A camera-triggered scent deterrent that keeps wild boars and other animals away from crops without harming them, presented at ICECIS 2026.",
    tech: ["Arduino", "YOLO", "Camera", "Sensors", "Automated Spraying"],
    image: cropGuardImage,
    links: { github: null, demo: null },
    conference: "Presented at ICECIS 2026",
    detail: {
      problem:
        "Wild animals, particularly wild boars, damage standing crops overnight, and manual guarding isn't practical for most small farms.",
      solution:
        "A field-deployed unit that watches for animal movement and releases a scent-based deterrent automatically, keeping animals away without traps or harm.",
      how:
        "A camera feed is run through a YOLO detection model to spot animals entering the field; on detection, a microcontroller triggers an automated sprayer to release a scent barrier around the crop perimeter.",
      tech: ["IoT", "Arduino", "Camera", "YOLO", "Sensors", "Automated spraying mechanism"],
      contribution:
        "Built the detection-to-actuation pipeline and presented the system at ICECIS 2026.",
      future:
        "Extend detection to multiple animal species and add solar power for fully off-grid deployment.",
    },
  },
  {
    id: "pest-egg",
    featured: true,
    title: "Autonomous Pest Egg Detection & Neutralization",
    category: "Agri-Robotics · Computer Vision",
    description:
      "A solar-powered rover that scans crops for pest eggs using computer vision and neutralizes them with an automated spraying mechanism.",
    tech: ["YOLO", "Computer Vision", "AI/ML", "Solar Power", "Robotics"],
    image: pestDetectionImage,
    links: { github: null, demo: null },
    detail: {
      problem:
        "Pest eggs are hard to spot early by hand, and by the time an infestation is visible, crop damage has already begun.",
      solution:
        "An autonomous rover patrols the field, uses a camera and detection model to locate pest eggs on leaves and stems, and neutralizes them with a targeted spray.",
      how:
        "A YOLO-based model scans camera frames for egg clusters; on a positive detection, the rover's onboard controller triggers a spray nozzle aimed at the affected area, powered entirely by an onboard solar panel.",
      tech: ["YOLO", "Computer Vision", "AI/ML", "Camera", "Robotics", "Solar Power", "Automated spraying"],
      contribution:
        "Worked on the detection model integration and the rover's spray-triggering logic.",
      future:
        "Add path planning so the rover can cover a full field autonomously rather than a fixed route.",
    },
  },
  {
    id: "lifi-drone",
    featured: true,
    title: "Autonomous Drone for Women's Safety Using Li-Fi",
    category: "Concept · IoT / Wireless",
    description:
      "A conceptual autonomous drone for safety monitoring in campuses, malls, stations and hospitals, communicating over Li-Fi instead of RF.",
    tech: ["Drone", "Li-Fi", "IoT", "Wireless Communication", "Autonomous Systems"],
    image: lifiDroneImage,
    links: { github: null, demo: null },
    detail: {
      problem:
        "Public spaces like campuses, stations and malls often lack fast, discreet ways to monitor for safety incidents in real time.",
      solution:
        "An autonomous drone concept that patrols a defined area and streams data over Li-Fi, a light-based communication method that's harder to intercept than standard RF.",
      how:
        "The drone is designed to relay monitoring data through Li-Fi transceivers positioned across the coverage area, with autonomous navigation handling patrol routes.",
      tech: ["Drone", "Li-Fi", "IoT", "Wireless communication", "Autonomous systems"],
      contribution:
        "Designed the system concept and mapped out its application across campuses, transit hubs and healthcare settings.",
      future:
        "Move from concept to a working prototype, starting with the Li-Fi communication link.",
    },
  },
  {
    id: "library-mgmt",
    featured: true,
    title: "Library Management System",
    category: "Java · Academic Project",
    description:
      "A Java application for handling day-to-day library operations — cataloguing, issuing and returns — built around core OOP and database concepts.",
    tech: ["Java", "OOP", "Database Concepts"],
    image: libraryMgmtImage,
    links: { github: null, demo: null },
    detail: {
      problem: "Manual library record-keeping is slow and error-prone.",
      solution: "A Java-based system to manage books, members and transactions in one place.",
      how: "Built using core object-oriented design, with a database layer for persistent records of books and members.",
      tech: ["Java", "OOP", "Database concepts"],
      contribution: "Designed and implemented the full application as an academic project.",
      future: "Add a proper GUI and move the storage layer to a relational database.",
    },
  },
  {
    id: "student-mgmt",
    featured: true,
    title: "Student Management System",
    category: "Java · Academic Project",
    description:
      "A Java application for maintaining student records and related academic operations, built with core OOP principles.",
    tech: ["Java", "OOP", "Database Concepts"],
    image: studentMgmtImage,
    links: { github: null, demo: null },
    detail: {
      problem: "Tracking student information across multiple spreadsheets doesn't scale.",
      solution: "A centralized Java application for storing and updating student records.",
      how: "Implemented using object-oriented principles with a structured data layer for student information.",
      tech: ["Java", "OOP", "Database concepts"],
      contribution: "Designed and implemented the full application as an academic project.",
      future: "Add role-based access and export reports directly from the app.",
    },
  },
];
