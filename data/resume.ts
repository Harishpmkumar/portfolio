const EXPERIENCE_START = new Date(2024, 1, 1); // Feb 2024
const EXPERIENCE_BUFFER_MONTHS = 3;

function getExperienceMonths(startDate: Date, bufferMonths: number): number {
  const now = new Date();
  const target = new Date(
    now.getFullYear(),
    now.getMonth() + bufferMonths,
    now.getDate(),
  );

  let months =
    (target.getFullYear() - startDate.getFullYear()) * 12 +
    (target.getMonth() - startDate.getMonth());

  if (target.getDate() < startDate.getDate()) months -= 1;
  return Math.max(months, 0);
}

function formatExperienceLabel(): string {
  const months = getExperienceMonths(
    EXPERIENCE_START,
    EXPERIENCE_BUFFER_MONTHS,
  );
  const years = Math.floor((months / 12) * 10) / 10;
  return `${years.toFixed(1)}+`;
}

export const profile = {
  name: "Harishkumar M",
  role: "Full-Stack Developer",
  tagline: "PHP · Laravel · Drupal · React · Next.js · Node.js",
  location: "Coimbatore, Tamil Nadu, India",
  email: "harishpmkumar2002@gmail.com",
  phone: "+91 8526309986",
  summary:
    "Software developer with nearly 3 years of professional development experience, specializing in PHP, Laravel, and Drupal, with additional full-stack project experience using React, Next.js, Node.js, Express, and MongoDB. Experienced in building REST APIs, custom CMS modules, database-driven workflows, authentication features, and third-party integrations. Focused on maintainable code, practical problem-solving, and responsive web applications.",
  resumeFile: "/resume.pdf",
};

export const stats = [
  { label: "experience", value: formatExperienceLabel() },
  { label: "development", value: "Full-Stack" },
  { label: "tech_stack", value: "Laravel · Drupal · MERN" },
  { label: "projects", value: "8+" },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Hapus Infotech Private Limited",
    location: "Coimbatore",
    period: "Feb 2024 — Present",
    status: "current",
    points: [
      "Develop and maintain web applications using PHP, Laravel, Drupal 10/11, JavaScript, and modern frontend technologies.",
      "Build and customize Drupal modules, forms, content structures, reusable components, and application functionality.",
      "Develop and integrate REST APIs, backend services, and third-party integrations, including Razorpay and PayPal.",
      "Build full-stack application features using React, Next.js, Node.js, and Express.js, with MongoDB and SQL databases.",
      "Work with MySQL, MariaDB, and PostgreSQL to manage application data, implement database workflows, and optimize SQL queries.",
      "Integrate AWS services, including S3 and IAM, for file storage and access management.",
      "Implement authentication, role-based access control, and responsive user interfaces across application workflows.",
      "Use Git for version control and collaborate with developers, QA engineers, and project stakeholders to deliver and maintain web applications.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Jogfalls Solutions",
    location: "Coimbatore",
    period: "Feb 2023 — Apr 2023",
    status: "past",
    points: [
      "Contributed to backend APIs and frontend interfaces using JavaScript, HTML, and CSS.",
      "Gained hands-on experience with AWS services, including CodeCommit, CloudWatch, DynamoDB, and S3.",
      "Used Git and Linux while collaborating with a small development team.",
    ],
  },
];

export const projects = [
  {
    name: "Placement Pro",
    tag: "Student placement preparation platform",
    category: "Full-stack application",
    stack: ["Laravel", "Next.js", "PostgreSQL", "Redis", "AI APIs", "AWS S3"],
    description:
      "A student placement preparation platform covering assessments, aptitude practice, programming challenges, coding practice, and AI-assisted interview preparation.",
    points: [
      "Developed Laravel APIs for assessments, practice activities, and student progress workflows.",
      "Managed PostgreSQL data for assessment records and progress tracking.",
      "Used Redis caching and integrated AI APIs and AWS S3 for supporting application features.",
      "Integrated communication gateways and application usage tracking.",
    ],
  },
  {
    name: "Bill Mastr",
    tag: "Billing and inventory management",
    category: "Business application",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "REST APIs"],
    description:
      "A billing and inventory management system supporting retail operations, including products, vendors, taxes, invoices, user access, and sales reporting.",
    points: [
      "Implemented product, vendor, tax, and invoice management workflows.",
      "Structured role-based access for employees and administrators.",
      "Built API-driven functionality and dashboard views for sales and reporting.",
    ],
  },
  {
    name: "WP CRM",
    tag: "Multi-tenant CRM",
    category: "CRM application",
    stack: ["PHP", "MySQL", "AWS S3", "Payment Gateway", "RBAC"],
    description:
      "A CRM application for managing companies, contacts, products, and users, with tenant-aware access controls and customer purchasing workflows.",
    points: [
      "Built company, contact, product, and user management workflows.",
      "Implemented role-based access control and tenant-specific data handling.",
      "Added product and cart functionality, payment gateway integration, and AWS S3 file storage.",
    ],
  },
  {
    name: "Food Revive",
    tag: "Surplus food marketplace",
    category: "MERN application",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Razorpay"],
    description:
      "A marketplace application connecting food vendors and customers through food listings, discovery, ordering, and payment workflows.",
    points: [
      "Developed REST API workflows for authentication, food listings, and orders.",
      "Connected the React frontend with backend endpoints using the Fetch API.",
      "Implemented JWT-based authentication and role-aware access controls.",
      "Integrated Razorpay payment workflow support.",
    ],
  },
  {
    name: "Real-Time Chat & Collaboration",
    tag: "Live messaging application",
    category: "MERN application",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO",
      "JWT",
      "Bootstrap",
    ],
    description:
      "A real-time messaging application with authenticated users, private conversations, and live message delivery.",
    points: [
      "Implemented authentication and protected API workflows using JWT.",
      "Built conversation and message APIs backed by MongoDB.",
      "Used Socket.IO for real-time message communication.",
      "Developed a responsive chat interface using React and Bootstrap.",
    ],
    url: "https://github.com/Harishpmkumar/realtime-chat-collaboration",
  },
  {
    name: "Drupal Data Export Module",
    tag: "Reusable Drupal utility",
    category: "Drupal module",
    stack: ["Drupal 10", "PHP", "MySQL", "AJAX", "PhpSpreadsheet", "TCPDF"],
    description:
      "A Drupal module for exporting records into CSV, XLSX, PDF, and DOCX formats, with configurable fields and export options.",
    points: [
      "Supports dynamic field selection and export header configuration.",
      "Provides custom SQL query support for advanced data selection.",
      "Includes error handling for export workflows and large datasets.",
    ],
  },
  {
    name: "Custom Paragraphs",
    tag: "Published Drupal.org module",
    category: "Drupal module",
    stack: ["Drupal 10/11", "PHP", "JavaScript", "CKEditor 5", "Form API"],
    description:
      "A JavaScript-powered repeatable field group for Drupal forms, enabling developers to collect multiple related values without creating a separate entity for each group.",
    points: [
      "Supports dynamic add/remove fields and client-side validation.",
      "Includes file-upload previews and CKEditor 5 integration.",
      "Uses JSON-based storage for lightweight form-level repeatable groups.",
    ],
    url: "https://www.drupal.org/project/custom_paragraphs",
  },
  {
    name: "Content Like",
    tag: "Published Drupal.org module",
    category: "Drupal module",
    stack: ["Drupal 10/11/12", "PHP", "AJAX", "Twig"],
    description:
      "An AJAX-powered like/unlike module for Drupal content, supporting authenticated users and anonymous visitors with duplicate-like prevention.",
    points: [
      "Supports identification of authenticated users and anonymous visitors.",
      "Uses a unique database constraint to help prevent duplicate likes.",
      "Supports configuration by content type and custom Twig output.",
    ],
    url: "https://www.drupal.org/project/content_like",
  },
];

export const skills = {
  "Programming Languages": ["PHP", "JavaScript", "HTML5", "CSS3"],
  "Frontend Development": [
    "React",
    "Next.js",
    "React Hooks",
    "Bootstrap",
    "jQuery",
    "Responsive UI",
    "Fetch API",
  ],
  "Backend Development": [
    "Laravel",
    "Node.js",
    "Express.js",
    "Drupal",
    "REST APIs",
    "MVC Architecture",
    "Middleware",
  ],
  "Drupal Development": [
    "Drupal 10/11",
    "Custom Module Development",
    "Forms API",
    "Entity API",
    "Database API",
    "AJAX API",
    "Hooks",
    "Plugins",
    "Services",
    "Caching",
    "Twig",
    "Drush",
  ],
  Databases: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Mongoose"],
  "Authentication & Real-Time": [
    "JWT",
    "bcrypt",
    "Role-Based Access Control",
    "Protected Routes",
    "Socket.IO",
    "WebSockets",
  ],
  "Integrations & Cloud": [
    "Razorpay",
    "PayPal",
    "Third-Party APIs",
    "AWS S3",
    "AWS IAM",
    "CloudWatch",
    "DynamoDB",
  ],
  Tools: ["Git", "GitHub", "Composer", "npm", "Postman", "Vite", "XAMPP"],
};

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  school: "Park College of Engineering and Technology",
  period: "Aug 2019 — Jun 2023",
  detail: "CGPA: 8.3/10",
};

export const certifications = [
  "Full Stack Development in Java — Brainery Spot Technology, Coimbatore",
];

export const exportFields = [
  { id: "name", label: "Name & Role", defaultChecked: true },
  { id: "contact", label: "Contact Info", defaultChecked: true },
  { id: "experience", label: "Work Experience", defaultChecked: true },
  { id: "projects", label: "Key Projects", defaultChecked: true },
  { id: "skills", label: "Technical Skills", defaultChecked: true },
  { id: "education", label: "Education", defaultChecked: true },
];

export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "GitHub", href: "https://github.com/Harishpmkumar" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harish-kumar-894b65225/",
  },
  { label: "Drupal.org", href: "https://www.drupal.org/u/harishpmkumar" },
];
