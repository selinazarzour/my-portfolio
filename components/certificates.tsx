import Image from "next/image";

export const certificates = [
    {
        title: "Deep Learning, A-Z™: Hands-On Artificial Neural Networks",
        issuer: "SuperDataScience (Udemy)",
        date: "Aug 2024",
        image: "/udemy.svg",
        link: "https://www.udemy.com/certificate/UC-b47d083e-70a9-4a90-9973-b89a50b49884/",
    },
    {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "Jul 2024",
        image: "/azure.png",
        link: "https://learn.microsoft.com/en-ca/users/selinazarzour/credentials/fc857747ac679b31",
    },
    {
        title: "Introduction to AI, Machine Learning",
        issuer: "Google Cloud Skills Boost",
        date: "Jun 2024",
        image: "/Googlelogo.svg",
        link: "https://www.cloudskillsboost.google/public_profiles/8c712756-7d93-4fb3-a4a5-6bbb08b5cad7/badges/9563042",
    },
    {
        title: "AWS Cloud Essentials for Business Leaders",
        issuer: "Amazon Web Services (AWS)",
        date: "Jun 2024",
        image: "/aws.svg",
        link: "https://drive.google.com/file/d/1zHWgZ3LXXvuu_P9R9o1InVQZAY1uD44w/view?usp=sharing",
    },
    {
        title: "Developing Machine Learning Solutions",
        issuer: "Amazon Web Services (AWS)",
        date: "Jun 2024",
        image: "/aws.svg",
        link: "https://drive.google.com/file/d/1VhXplSYDGoaIHBbspJOINLxH8dLHO7Kr/view?usp=sharing",
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "Oct 2020",
        image: "/cisco.svg", // Or use a lock/shield/cybersecurity icon
        link: "https://www.credly.com/badges/a8dd3426-dbeb-4309-b8cf-cd31c912bef4?source=linked_in_profile",
    },
    {
        title: "CS50: Introduction to Computer Science",
        issuer: "Harvard University (edX)",
        date: "2023",
        image: "/harvard.png", // Or edX or CS50 logo
        link: "https://drive.google.com/file/d/1dFQoffmn4Nl599uUraXPTQK7M_Z0CE0_/view?usp=share_link",
    },
    {
        title: "UofT First Place Challenge Hackathon",
        issuer: "University of Toronto Engineering",
        date: "2023",
        image: "/uoft.png", // Or a trophy/award icon
        link: "https://drive.google.com/file/d/1uvYjujTKDYgfq5TvNVZP3HmxOtUPTAjU/view?usp=share_link",
    },
];

export const CertificatesSection = () => (
    <section id="certificates" className="py-20">
        <h1 className="heading">
            My <span className="text-purple">Certificates</span>
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certificates.map((cert, idx) => (
                <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center rounded-xl border border-white/10 bg-black-100 p-6 shadow-lg transition hover:scale-105 hover:border-purple min-h-[320px] min-w-[220px] max-w-[260px] w-full mx-auto"
                >
                    <div className="flex items-center justify-center w-20 h-20 mb-4 bg-white rounded-full overflow-hidden">
                        <Image
                            src={cert.image}
                            alt={cert.title}
                            width={64}
                            height={64}
                            className="object-contain w-16 h-16"
                        />
                    </div>
                    <div className="text-lg font-bold text-white text-center min-h-[48px] flex items-center justify-center">{cert.title}</div>
                    <div className="text-sm text-white-200 text-center min-h-[32px] flex items-center justify-center">{cert.issuer}</div>
                    <div className="text-xs text-white-200 mt-1">{cert.date}</div>
                </a>
            ))}
        </div>
    </section>
);
