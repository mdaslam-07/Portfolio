// CodeChef certificates shown in the panel opened from the CodeChef card in the
// Certifications section. Each certificate has its own official URL.
// `file` = certificate image name (no extension) inside src/assets/codechef/,
// e.g. file: "sql-at-work" uses sql-at-work.jpg.
// `url: null` renders a disabled "URL pending" button — never put a guessed URL here.

export const codechef = {
  title: "CodeChef",
  subtitle: "Programming & Problem Solving",
  categories: [
    {
      id: "sql",
      label: "SQL",
      certificates: [
        { id: "sql-roadmap", file: "sql-roadmap", title: "SQL Roadmap for Data Analysis", url: "https://www.codechef.com/certificates/preview/4dc5472" },
        { id: "sql-interview", file: "sql-top-questions", title: "Top SQL Interview Questions", url: "https://www.codechef.com/certificates/preview/15a12b5" },
        { id: "sql-case-studies", file: "sql-case-study", title: "SQL Case Studies", url: "https://www.codechef.com/certificates/preview/affa16e" },
        { id: "sql-at-work", file: "sql-at-work", title: "SQL at Work", url: "https://www.codechef.com/certificates/preview/829908b" },
        { id: "sql-practice", file: "sql-practise", title: "SQL Practice Queries", url: "https://www.codechef.com/certificates/preview/0f8eb1b" },
        { id: "sql-advanced", file: "sql-learn-advanced", title: "Learn Advanced SQL", url: "https://www.codechef.com/certificates/preview/27ba034" },
        // URL not available in the project yet — add it here when you have it.
        { id: "sql-learn", file: "sql-learn", title: "Learn SQL", url: null },
      ],
    },
    {
      id: "python",
      label: "Python",
      certificates: [
        { id: "py-dsa-roadmap", file: "py-beginner-dsa", title: "Python with Beginner DSA Roadmap", url: "https://www.codechef.com/certificates/preview/1410506" },
        { id: "py-problem-solving", file: "py-problem-solving", title: "Problem Solving in Python", url: "https://www.codechef.com/certificates/preview/3e3e715" },
        { id: "py-learn", file: "py-learn-program", title: "Learn Python Programming", url: "https://www.codechef.com/certificates/preview/6dcc20b" },
        { id: "py-practice", file: "py-practise", title: "Practice Python", url: "https://www.codechef.com/certificates/preview/36e1061" },
        { id: "py-strings", file: "py-practise-string", title: "Practice Strings", url: "https://www.codechef.com/certificates/preview/b8b9271" },
        { id: "py-basic-math", file: "py-practise-basic-math", title: "Practice Basic Math", url: "https://www.codechef.com/certificates/preview/c19d550" },
        { id: "py-500-1000", file: "py-500-to-1000", title: "500 to 1000 Difficulty Rating", url: "https://www.codechef.com/certificates/preview/19de711" },
      ],
    },
    {
      id: "c",
      label: "C Programming",
      certificates: [
        { id: "c-dsa-roadmap", file: "c-beginner-dsa", title: "C Language with Beginner DSA Roadmap", url: "https://www.codechef.com/certificates/preview/e2c0cc5" },
        { id: "c-projects", file: "c-projects-beginner-dsa", title: "Projects for Beginners in C", url: "https://www.codechef.com/certificates/preview/8b67fa2" },
        { id: "c-problem-solving", file: "c-problem-solving", title: "Problem Solving in C", url: "https://www.codechef.com/certificates/preview/eac71d2" },
        { id: "c-practice", file: "c-practise", title: "Practice C", url: "https://www.codechef.com/certificates/preview/4d0ae67" },
        { id: "c-learn", file: "c-learn", title: "Learn C", url: "https://www.codechef.com/certificates/preview/c73a542" },
      ],
    },
  ],
};
