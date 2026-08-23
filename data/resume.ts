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
  role: "Software Developer",
  tagline: "PHP · Laravel · Drupal 10/11 · React",
  location: "Coimbatore, Tamil Nadu, India",
  email: "harishpmkumar2002@gmail.com",
  phone: "+91 8526309986",
  summary: `Software developer with ${formatExperienceLabel()} years building scalable web applications in PHP, Laravel, Drupal 10/11, and React. Focused on custom module development, REST API integration, payment gateways, AWS infrastructure, and MySQL performance tuning — with a habit of shipping tools other developers reuse, like a data-export module built for CSV, XLSX, PDF, and DOCX output.`,
  resumeFile: "/resume.pdf",
};

export const stats = [
  { label: "years_experience", value: formatExperienceLabel() },
  { label: "production_modules", value: "3" },
  { label: "export_formats_shipped", value: "4" },
  { label: "stack_depth", value: "PHP→React" },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Hapus Infotech Private Limited",
    location: "Coimbatore",
    period: "Feb 2024 — Present",
    status: "current",
    points: [
      "Developed scalable web applications using PHP, Laravel, Drupal 10/11, and React.",
      "Built and customized Drupal modules, themes, and content types for production sites.",
      "Designed and integrated REST APIs and third-party services including Razorpay and PayPal.",
      "Worked with AWS S3 and IAM for secure file storage and access management.",
      "Designed and optimized MySQL databases and SQL queries for performance.",
      "Collaborated with frontend developers, QA engineers, and project managers in an Agile team.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Jogfalls Solutions",
    location: "Coimbatore",
    period: "Feb 2023 — Apr 2023",
    status: "past",
    points: [
      "Developed backend APIs and enhanced frontend interfaces using JavaScript, HTML, and CSS.",
      "Worked with AWS services including CodeCommit, CloudWatch, DynamoDB, and S3.",
      "Collaborated using Git and Linux in a small development team.",
    ],
  },
];

export const projects = [
  {
    name: "Drupal Data Export Module",
    tag: "open-source-flavored utility",
    stack: ["Drupal 10", "PHP", "MySQL", "AJAX", "PhpSpreadsheet", "TCPDF"],
    description:
      "A reusable Drupal module that exports records to CSV, XLSX, PDF, and DOCX with dynamic field selection, custom SQL queries, and configurable export options — built into Drupal's admin interface following core coding standards.",
    points: [
      "Dynamic header configuration and field selection at export time",
      "Custom SQL query support for advanced data slices",
      "Robust error handling for large dataset exports",
    ],
  },
  {
    name: "Bill Mastr",
    tag: "billing & inventory system",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "REST API"],
    description:
      "A billing and inventory management system for retail shops, covering product, vendor, tax, and invoice management with role-based access control and an admin dashboard for sales and reporting.",
    points: [
      "Role-based access control for employees and admins",
      "REST APIs with query optimization for dashboard performance",
      "Admin dashboard for real-time sales and revenue visibility",
    ],
  },
  {
    name: "Custom Paragraphs",
    tag: "published Drupal.org module",
    stack: ["Drupal 10/11", "PHP", "JavaScript", "CKEditor 5", "Form API"],
    description:
      "A lightweight, JS-powered repeatable field group system for custom Drupal forms — lets developers add dynamic, repeatable inputs (multiple addresses, team members, documents) without entity-based overhead.",
    points: [
      "Dynamic add/remove fields with client-side validation",
      "File uploads with preview and CKEditor 5 integration",
      "JSON-based data storage for lightweight, form-level repeatable groups",
    ],
    url: "https://www.drupal.org/project/custom_paragraphs",
  },
  {
    name: "Content Like",
    tag: "published Drupal.org module",
    stack: ["Drupal 10/11/12", "PHP", "AJAX", "Twig"],
    description:
      "An AJAX-powered like/unlike module for Drupal content, supporting both authenticated users and anonymous visitors with duplicate-like prevention and lazy builder rendering.",
    points: [
      "Tracks authenticated users by Drupal user ID, anonymous visitors via hashed cookie",
      "Unique-key database constraint prevents duplicate likes",
      "Configurable per content type and custom block type, with default and custom Twig support",
    ],
    url: "https://www.drupal.org/project/content_like",
  },
];

export const skills = {
  Languages: ["PHP", "JavaScript", "HTML5", "CSS3"],
  Frameworks: ["Laravel", "Drupal 10/11", "React", "Bootstrap", "jQuery"],
  Database: ["MySQL"],
  CMS: ["Drupal", "WordPress"],
  Cloud: ["AWS S3", "AWS IAM", "CloudWatch", "DynamoDB", "CodeCommit"],
  Tools: ["Git", "Composer", "Postman", "XAMPP"],
};

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  school: "Park College of Engineering and Technology",
  period: "Aug 2019 — Jun 2023",
  detail: "CGPA: 8.3",
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
  // Add your real profiles here:
  { label: "GitHub", href: "https://github.com/Harishpmkumar" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harish-kumar-894b65225/",
  },
  { label: "Drupal.org", href: "https://www.drupal.org/u/harishpmkumar" },
];
