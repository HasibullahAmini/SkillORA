const coursesData = [
  {
    id: 1,
    title: "Complete JavaScript Development",
    category: "Development",
    instructor: "John Smith",
    price: "$49",
    duration: "12 Weeks",
    rating: "4.9",
    students: "1,250",
    level: "Beginner",
    lessons: 48,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description:
      "Learn JavaScript from the fundamentals to advanced concepts. Build practical projects and develop the skills needed to create modern interactive websites.",
    learn: [
      "Understand JavaScript fundamentals",
      "Work with variables, functions and objects",
      "Understand DOM manipulation and events",
      "Build interactive web applications",
      "Work with APIs and asynchronous JavaScript",
    ],
    curriculum: [
      {
        title: "Module 1: JavaScript Fundamentals",
        lessons: [
          "Introduction to JavaScript",
          "Variables and Data Types",
          "Operators and Conditions",
        ],
      },
      {
        title: "Module 2: Functions and Arrays",
        lessons: ["Functions", "Arrays and Objects", "Loops and Array Methods"],
      },
      {
        title: "Module 3: DOM and Events",
        lessons: [
          "Understanding the DOM",
          "DOM Manipulation",
          "JavaScript Events",
        ],
      },
      {
        title: "Module 4: Advanced JavaScript",
        lessons: [
          "Promises and Async/Await",
          "Working with APIs",
          "Final Project",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Sarah Johnson",
    price: "$39",
    duration: "8 Weeks",
    rating: "4.8",
    students: "980",
    level: "Beginner",
    lessons: 32,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description:
      "Learn the principles of user interface and user experience design. Create attractive, accessible and user-friendly digital experiences.",
    learn: [
      "Understand UI and UX principles",
      "Learn design fundamentals",
      "Create wireframes and prototypes",
      "Understand user research",
      "Design modern interfaces",
    ],
    curriculum: [
      {
        title: "Module 1: Design Fundamentals",
        lessons: [
          "Introduction to UI/UX",
          "Design Principles",
          "Color and Typography",
        ],
      },
      {
        title: "Module 2: User Experience",
        lessons: ["User Research", "User Journey", "Wireframing"],
      },
      {
        title: "Module 3: Interface Design",
        lessons: ["Layout Design", "Design Systems", "Prototyping"],
      },
    ],
  },
  {
    id: 3,
    title: "Complete React Development",
    category: "Development",
    instructor: "Michael Brown",
    price: "$59",
    duration: "10 Weeks",
    rating: "4.9",
    students: "1,800",
    level: "Intermediate",
    lessons: 42,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    description:
      "Build modern web applications using React. Learn components, hooks, state management and routing through practical examples.",
    learn: [
      "Understand React components",
      "Work with props and state",
      "Use React Hooks",
      "Implement React Router",
      "Build complete frontend projects",
    ],
    curriculum: [
      {
        title: "Module 1: React Basics",
        lessons: ["Introduction to React", "JSX and Components", "Props"],
      },
      {
        title: "Module 2: React Hooks",
        lessons: ["useState", "useEffect", "Custom Hooks"],
      },
      {
        title: "Module 3: React Projects",
        lessons: ["React Router", "API Integration", "Final Project"],
      },
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    category: "Marketing",
    instructor: "Emma Wilson",
    price: "$35",
    duration: "6 Weeks",
    rating: "4.7",
    students: "750",
    level: "Beginner",
    lessons: 24,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description:
      "Explore digital marketing strategies, social media marketing, search engine optimization and online campaigns.",
    learn: [
      "Understand digital marketing",
      "Learn SEO fundamentals",
      "Explore social media marketing",
      "Understand content strategy",
      "Measure marketing performance",
    ],
    curriculum: [
      {
        title: "Module 1: Marketing Basics",
        lessons: [
          "Introduction to Marketing",
          "Digital Marketing Channels",
          "Marketing Strategy",
        ],
      },
      {
        title: "Module 2: Online Marketing",
        lessons: ["SEO Basics", "Social Media Marketing", "Content Marketing"],
      },
    ],
  },
  {
    id: 5,
    title: "Python Programming for Beginners",
    category: "Development",
    instructor: "David Miller",
    price: "$45",
    duration: "9 Weeks",
    rating: "4.8",
    students: "1,100",
    level: "Beginner",
    lessons: 36,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
    description:
      "Start programming with Python. Learn the fundamentals, solve problems and build small applications.",
    learn: [
      "Understand Python syntax",
      "Work with variables and data types",
      "Use conditions and loops",
      "Create functions",
      "Build beginner Python projects",
    ],
    curriculum: [
      {
        title: "Module 1: Python Basics",
        lessons: [
          "Introduction to Python",
          "Variables and Data Types",
          "Operators",
        ],
      },
      {
        title: "Module 2: Programming Logic",
        lessons: ["Conditions", "Loops", "Functions"],
      },
      {
        title: "Module 3: Practical Python",
        lessons: [
          "Lists and Dictionaries",
          "Working with Files",
          "Final Project",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Graphic Design Essentials",
    category: "Design",
    instructor: "Olivia Davis",
    price: "$29",
    duration: "5 Weeks",
    rating: "4.6",
    students: "650",
    level: "Beginner",
    lessons: 20,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    description:
      "Explore graphic design fundamentals and learn how to create clear and attractive visual designs.",
    learn: [
      "Understand graphic design principles",
      "Learn color theory",
      "Work with typography",
      "Understand visual composition",
      "Create design projects",
    ],
    curriculum: [
      {
        title: "Module 1: Design Principles",
        lessons: [
          "Introduction to Graphic Design",
          "Color Theory",
          "Typography",
        ],
      },
      {
        title: "Module 2: Practical Design",
        lessons: ["Visual Composition", "Design Projects", "Final Portfolio"],
      },
    ],
  },
];

export default coursesData;
