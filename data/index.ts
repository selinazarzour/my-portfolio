import { links } from "@/config";

export const navItems = [
  { name: "About Me", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "My thoughts", link: "#testimonials" },
  { name: "Certificates", link: "#certificates" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Co-founder - Director of Operations & Software Engineer at G12",
    description: "Co-founded and led a student-focused EdTech startup. Architected a full-stack web platform that empowered students to make smarter university choices. Improved scalability and user experience by 30%.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "AI Student Researcher – MED Research Group (UofT)",
    description: "Advancing healthcare diagnostics by developing multimodal AI models for swallowing disorder analysis, under the supervision of Prof. Ervin Sejdic and Ayman Anwar. Sole undergraduate on the team.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "AI Student Researcher – Intelligent Sensory Microsystems Lab",
    description: "Researching Spiking Neural Networks (SNNs) for energy-efficient autonomous driving, focusing on sparse coding, neuromodulated learning, and sensor fusion. Applying models to real-world datasets like KITTI.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Hackathon Winner & Project Leader",
    description: "Joined and led impact-driven teams at multiple hackathons—including a win at Volontariato. Every project focused on solving real-world challenges in health, education, or community engagement.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Globally Minded & People-First",
    description: "Traveled to 11+ countries and fluent in working across cultures and time zones. Known for supporting teammates, motivating friends, and always bringing positive energy to every collaboration.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to Collaboration & New Ideas",
    description: "Always building, always learning. Let’s connect and create something that truly makes an impact—whether in AI, product development, or tech for good.",
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
    title: "CraveWell – AI-Powered Dietary Assistant",
    des: "Built during GenAI Genesis Hackathon, CraveWell uses AI and real-time image analysis to help users make smart food choices based on their dietary needs. Integrates Google Cloud Vision, Cohere AI, USDA API, and Firebase. Empowering food freedom and health.",
    img: "/cravewell.jpg",
    iconLists: ["/re.svg", "/python.svg", "/firebase.svg"],
    link: "https://devpost.com/software/crave-well",
    sourceCode: "",
  },
  {
    id: 2,
    title: "Toto – Smart Waste Management in Africa",
    des: "AI-driven web app predicting waste hotspots and engaging communities to report, recycle, and solve Africa's waste challenge. Features include object detection, location tracking, and idea generation for sustainable upcycling.",
    img: "/toto.jpg",
    iconLists: ["/ai.svg", "/js.svg", "/python.svg"],
    link: "https://www.linkedin.com/in/selinazarzour/details/projects/1628488663/multiple-media-viewer?profileId=ACoAAC8NmJgBR7NhMG97IDmGZ0D4mFTXHcXEJxs&treasuryMediaId=1730352825822&type=DOCUMENT",
    sourceCode: "",
  },
  {
    id: 3,
    title: "The Paper Toss Game",
    des: "Embedded C game on DE1-SoC board blending arcade physics, real-time VGA graphics, and sustainability messaging. Teaches recycling through interactive storytelling, keyboard interrupts, sound effects, and dynamic gameplay.",
    img: "/papertoss.jpg",
    iconLists: ["/c.svg", "/vga.svg"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7316527579316785152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3B%2B%2FOqgi%2BUTeS%2FwQ9HxgHnIw%3D%3D",
    sourceCode: "",
  },
  {
    id: 4,
    title: "Duck Maze Game",
    des: "Maze chase game for DE1-SoC FPGA board. Combines VGA graphics, PS2 keyboard input, sound, and finite-state machines for an interactive, Pac-Man-inspired experience—playable on real hardware.",
    img: "/duckmaze.jpg",
    iconLists: ["/vga.svg", "/c.svg"],
    link: "https://www.linkedin.com/in/selinazarzour/details/projects/1735836742404/single-media-viewer?type=IMAGE&profileId=ACoAAC8NmJgBR7NhMG97IDmGZ0D4mFTXHcXEJxs",
    sourceCode: "",
  },
  {
    id: 5,
    title: "EmpowerSafe – For Peace and Wellbeing in Toronto",
    des: "AI-powered safety web app using ML, open data, and geolocation to provide real-time safety indicators, chatbot assistance, and police station mapping. Designed to make city navigation safer and more inclusive.",
    img: "/empowersafe.jpg",
    iconLists: ["/re.svg", "/js.svg", "/python.svg", "/ai.svg"],
    link: "https://github.com/selinazarzour/EmpowerSafe",
    sourceCode: "https://github.com/selinazarzour/EmpowerSafe",
  },
  {
    id: 6,
    title: "PawMotion – Interactive Pet Control System",
    des: "Created an Arduino-based system using MPU6050 sensors to control a robotic pet vehicle with intuitive hand tilts. Merges hardware hacking, real-time sensor fusion, and playful user experience.",
    img: "/pawmotion.jpg",
    iconLists: ["/arduino.svg", "/c.svg"],
    link: "https://github.com/selinazarzour/Caring-Pet---MAKEUofT",
    sourceCode: "https://github.com/selinazarzour/Caring-Pet---MAKEUofT",
  },
  {
    id: 7,
    title: "CSGPT PRO – AI Chat Bot",
    des: "Engineered an AI chatbot using cosine similarity and NLP to answer student queries, boosting engagement and accessibility for Grade 12 and university users.",
    img: "/gallery.jpg",
    iconLists: ["/re.svg", "/c.svg", "/cython.svg", "/python.svg"],
    link: "https://devpost.com/software/csgptpro",
    sourceCode: "https://github.com/selinazarzour/CSGPTPROAI",
  },
  {
    id: 8,
    title: "Volontariato – NSBE Hackathon Project",
    des: "Developed a full-stack app for purposeful travel and volunteering, integrating TripAdvisor and Soup API. Boosted engagement by 30%—recognized as a hackathon-winning team.",
    img: "/Volontariato.jpeg",
    iconLists: ["/nextjs.svg", "/css.svg", "/js.svg", "/mongodb.svg"],
    link: "https://devpost.com/software/volontariato",
    sourceCode: "https://github.com/DavDeDev/Volontariato.git",
  },
  {
    id: 9,
    title: "Math Research Project – Maths en Jeans",
    des: "Tackled an open combinatorial problem with Python, exploring color possibilities on an octahedron. Presented original code and findings at an international math congress.",
    img: "/octahedre.png",
    iconLists: ["/python.svg"],
    link: "https://github.com/selinazarzour/MathEnJeans",
    sourceCode: "https://github.com/selinazarzour/MathEnJeans",
  },
  {
    id: 10,
    title: "G12 Platform Enhancement",
    des: "Enhanced G12's platform UX and functionality, driving up user engagement. Led development of Phase 2 automation, including a Chrome extension with voice and chatbot features.",
    img: "/g12.png",
    iconLists: ["/re.svg", "/vite.svg", "/js.svg", "/css.svg"],
    link: "https://g12uni.com",
    sourceCode: "https://g12uni.com",
  },
  {
    id: 11,
    title: "Information Technology Support Specialist",
    des: "Launched technical tutorial YouTube channel, providing IT support and practical troubleshooting for students and faculty—boosted digital confidence across the community.",
    img: "/p5.png",
    iconLists: ["/youtube.svg"],
    link: "https://www.youtube.com/@selinazarzour3266/videos",
    sourceCode: "https://www.youtube.com/@selinazarzour3266/videos",
  },
] as const;

// export const testimonials = [
//   {
//     quote: `As Co-Founder and Director of Operations at G12, I'm dedicated to revolutionizing how Grade 12 students navigate their educational journey. Together with my team, we're creating a platform that not only connects students with mentors and advisors but also simplifies the complex process of university and major selection.`,
//     name: "Selina Zarzour",
//     title: "Co-Founder and Director of Operations at G12",
//   },
//   {
//     quote: `Growing up in the Middle East, I've been shaped by a rich tapestry of cultures and perspectives. This upbringing fuels my passion for fostering inclusivity and innovation in everything I do.`,
//     name: "Selina Zarzour",
//     title: "A Young Woman Raised in the Middle East",
//   },
//   {
//     quote: `I approach every challenge with an open mind and a commitment to inspire positive change. Whether it's through technology, mentoring, or community engagement, I strive to empower others to reach their full potential.`,
//     name: "Selina Zarzour",
//     title: "An Open-Minded, Motivational Person",
//   },
//   {
//     quote: `I believe in the transformative power of technology, machine learning, and AI to build a better world for all. Through my work, I'm dedicated to creating solutions that drive meaningful impact and empower communities.`,
//     name: "Selina Zarzour",
//     title: "On a Mission to Make a Positive Impact",
//   },
//   // {
//   //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
//   //   name: "Selina Zarzour",
//   //   title: "Director of AlphaStream Technologies",
//   // },
// ] as const;

export const testimonials = [
  {
    quote: `Every project I join—whether it’s research, a hackathon, or a startup—has one purpose: to create real impact. I’m driven by curiosity, empathy, and the belief that technology should always make life better for others.`,
    name: "Selina Zarzour",
    title: "AI Student Researcher & Builder",
  },
  {
    quote: `From leading international hackathon teams to working on AI for healthcare, I’ve learned that the best results happen when people from different backgrounds come together, share their ideas, and lift each other up.`,
    name: "Selina Zarzour",
    title: "Collaborator & Hackathon Winner",
  },
  {
    quote: `I bring positivity and practical solutions to every challenge. Whether it’s building energy-efficient AI for self-driving, designing healthtech apps, or helping a friend troubleshoot code, my goal is always to empower others and leave things better than I found them.`,
    name: "Selina Zarzour",
    title: "Engineer with a People-First Mindset",
  },
  {
    quote: `Technology moves fast, but what matters most is the impact we have on people’s lives. I strive to bridge innovation with empathy—building products, tools, and communities that give everyone the chance to thrive.`,
    name: "Selina Zarzour",
    title: "Global Citizen & Changemaker",
  },
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
    title: "AI Student Researcher – MED Research Group, UofT",
    desc: "Conducting hands-on research in AI and machine learning for healthcare, developing multimodal models to improve clinical swallowing diagnostics under Prof. Ervin Sejdic and Ayman Anwar.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Student Researcher – Intelligent Sensory Microsystems Lab, UofT",
    desc: "Exploring Spiking Neural Networks (SNNs) for sensory processing in autonomous driving. Focused on efficient model development, sparse coding, and real-world dataset evaluation under Profs. Roman Genov and Amirali Amirsoleimani.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Co-Founder, COO & Director of Operations – G12",
    desc: "Co-founded and led operations for a student-centered EdTech startup. Architected and scaled web solutions to empower students in university decision-making.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Google Cloud for Startups Partnership",
    desc: "Collaborated with Google Cloud to integrate cloud technologies and enhance G12’s platform with technical support and user-focused solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Entreprise Conrad Intern",
    desc: "Worked with the G12 team to enhance website functionality and streamline team communication during a co-op placement at Entreprise Conrad.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
  {
    id: 6,
    title: "Lead Project Manager, Biomedical Engineering – UofT",
    desc: "Managed design projects in e-textile solutions for patient care. Oversaw project timelines, team coordination, and stakeholder communication.",
    className: "md:col-span-2",
    thumbnail: "/exp6.svg",
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
