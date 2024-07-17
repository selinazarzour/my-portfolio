import { links } from "@/config";

export const navItems = [
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "My thoughts", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Co-founder - Director of Operations & Software Engineer at G12",
    description: "Architected a full-stack web application, improving scalability and user experience by 30%.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with Time Zone Communications",
    description: "Able to coordinate and communicate effectively across different time zones.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Advanced AI Chat Bot Project",
    description: "Engineered CSGPT PRO using React, Node, and Python, enhancing user satisfaction by 25%.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a Passion for Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Improving G12 Website",
    description: "Currently enhancing the G12 website, focusing on improving user experience and functionality.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in Starting a Project Together?",
    description: "Let's collaborate and build something amazing.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;


export const projects = [
  {
    id: 1,
    title: "CSGPT PRO - AI Chat Bot",
    des: "Engineered an advanced AI Chat Bot using cosine similarity algorithms to deliver precise and instant responses to university and grade 12 students’ queries, enhancing user satisfaction by 25%.",
    img: "/gallery.jpg",
    iconLists: ["/re.svg", "/c.svg", "/cython.svg", "/python.svg"],
    link: "https://devpost.com/software/csgptpro",
    sourceCode: "https://github.com/selinazarzour/CSGPTPROAI",
  },
  {
    id: 2,
    title: "Volontariato NSBE Hackathon Project",
    des: "Developed a full-stack web application empowering travelers to explore the world with purpose and compassion. Integrated APIs like TripAdvisor and Soup API, increasing app engagement by 30%.",
    img: "/Volontariato.jpeg",
    iconLists: ["/nextjs.svg", "/css.svg", "/js.svg", "/mongodb.svg"],
    link: "https://devpost.com/software/volontariato",
    sourceCode: "https://github.com/DavDeDev/Volontariato.git",
  },
  {
    id: 3,
    title: "Math Research Project - Maths en Jeans",
    des: "Collaborated on solving an unsolved problem involving an octahedron, determining the number of possibilities with varying colors using Python. Contributed over 400 lines of code to develop a solution and presented findings at an international congress.",
    img: "/octahedre.png",
    iconLists: ["/python.svg"],
    link: "https://github.com/selinazarzour/MathEnJeans",
    sourceCode: "https://github.com/selinazarzour/MathEnJeans",
  },
  {
    id: 4,
    title: "G12 Platform Enhancement",
    des: "Enhanced website functionality and user experience of G12, resulting in a 20% increase in user engagement. Currently leading Phase 2 of 100% automation AI, developing a Chrome extension with voice recognition and chatbot capabilities.",
    img: "/g12.png",
    iconLists: ["/re.svg", "/vite.svg", "/js.svg", "/css.svg"],
    link: "https://g12uni.com",
    sourceCode: "https://g12uni.com",
  },
  {
    id: 5,
    title: "Information Technology Support Specialist",
    des: "Set up technical tutorials and published them using Python, troubleshooting computer problems for students, faculty, and staff, improving technical skills by 20%.",
    img: "/p5.png",
    iconLists: ["/youtube.svg"],
    link: "https://www.youtube.com/@selinazarzour3266/videos",
    sourceCode: "https://www.youtube.com/@selinazarzour3266/videos",
  },
] as const;


export const testimonials = [
  {
    quote: `As Co-Founder and Director of Operations at G12, I'm dedicated to revolutionizing how Grade 12 students navigate their educational journey. Together with my team, we're creating a platform that not only connects students with mentors and advisors but also simplifies the complex process of university and major selection.`,
    name: "Selina Zarzour",
    title: "Co-Founder and Director of Operations at G12",
  },
  {
    quote: `Growing up in the Middle East, I've been shaped by a rich tapestry of cultures and perspectives. This upbringing fuels my passion for fostering inclusivity and innovation in everything I do.`,
    name: "Selina Zarzour",
    title: "A Young Woman Raised in the Middle East",
  },
  {
    quote: `I approach every challenge with an open mind and a commitment to inspire positive change. Whether it's through technology, mentoring, or community engagement, I strive to empower others to reach their full potential.`,
    name: "Selina Zarzour",
    title: "An Open-Minded, Motivational Person",
  },
  {
    quote: `I believe in the transformative power of technology, machine learning, and AI to build a better world for all. Through my work, I'm dedicated to creating solutions that drive meaningful impact and empower communities.`,
    name: "Selina Zarzour",
    title: "On a Mission to Make a Positive Impact",
  },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: "Selina Zarzour",
  //   title: "Director of AlphaStream Technologies",
  // },
] as const;

export const companies = [
  {
    id: 1,
    name: "g12",
    img: "/g12icon.png",
    nameImg: "/G12.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/Googlelogo.svg",
    nameImg: "/google-1-1-logo-svgrepo-com.svg",
  },
  {
    id: 3,
    name: "Conrad Business School",
    img: "/ConradIcon.png",
    nameImg: "/Conrad.svg",
  },
  {
    id: 4,
    name: "UTAT",
    img: "/utaticon.png",
    nameImg: "/utat.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/microsofticon.png",
    nameImg: "/microsoft.png",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Co-Founder, COO & Director of Operations",
    desc: "Led strategic execution and operational oversight at G12, transforming it into a dynamic platform connecting Grade 12 students with mentors and advisors.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Google Cloud For Startups Partnership",
    desc: "Collaborated with Google Cloud to enhance G12's platform, receiving guidance and technical support to deliver greater user value.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Entreprise Conrad Intern",
    desc: "Collaborated with G12 team to enhance website functionality and streamline communication during co-op at Entreprise Conrad.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Project Manager, Biomedical Engineering",
    desc: "Led design projects at University of Toronto focusing on e-textile solutions for patient care, managing timelines and stakeholder communication.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/selinazarzour",
  },
  // {
  //   name: "Twitter",
  //   img: "/twit.svg",
  //   link: "https://x.com/Selina_Tech",
  // },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/selinazarzour",
  },
] as const;

export const techStack = {
  stack1: ["JS", "React", "Node", "Python"],
  stack2: ["ML", "Google Colab", "Node", "Python"],
} as const;
