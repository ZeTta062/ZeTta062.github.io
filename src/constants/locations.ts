/* top-10 | left-8, 52 | right-8 */

const POSITION1 = "top-10 left-8"
const POSITION2 = "top-10 left-52"
const POSITION3 = "top-10 right-8"
const POSITION4 = "top-44 left-8"

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "포트폴리오",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "유튜브 클론코딩",
            icon: "/images/folder.png",
            kind: "folder",
            position: POSITION1, // icon position inside Finder
            windowPosition: "top-[2vh] left-3.5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "new-tube.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: POSITION1,
                    description: [
                    "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
                    "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
                    "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
                    "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
                    ],
                },
                {
                    id: 2,
                    name: "new-tube.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: POSITION2,
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 3,
                    name: "new-tube.com",
                    icon: "/images/project-icon-1.svg",
                    kind: "file",
                    fileType: "url",
                    href: "https://newtube-iota.vercel.app",
                    position: POSITION3,
                },
            ],
        },
  
        // ▶ Project 2
        {
            id: 6,
            name: "Jira 클론코딩",
            icon: "/images/folder.png",
            kind: "folder",
            position: POSITION2,
            windowPosition: "top-[13vh] left-6",
            children: [
                {
                    id: 1,
                    name: "Jira-Clone.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: POSITION1,
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "Jira-Clone.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: POSITION2,
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 3,
                    name: "Jira-clone.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://jira-clone-public.vercel.app",
                    position: POSITION3,
                },
                {
                    id: 4,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: POSITION4,
                },
            ],
        },
  
      // ▶ Project 3
        {
            id: 7,
            name: "Next 블로그",
            icon: "/images/folder.png",
            kind: "folder",
            position: POSITION3,
            windowPosition: "top-[24vh] left-6.5",
            children: [
                {
                    id: 1,
                    name: "Next-blog.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: POSITION1,
                    description: [
                    "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                    "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                    "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                    "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "Next-blog.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: POSITION2,
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 3,
                    name: "Next-blog.com",
                    icon: "/images/project-icon-3.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://next-blog-ivory-beta-36.vercel.app",
                    position: POSITION3,
                },
                {
                    id: 4,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: POSITION4,
                },
            ],
        },
    ],
};
    
const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: POSITION1,
            imageUrl: "/images/zetta1.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: POSITION2,
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: POSITION3,
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: POSITION4,
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/adrian.jpg",
            description: [
                "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};
    
const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "이력서",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};
    
const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "휴지통",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: POSITION1,
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: POSITION2,
            imageUrl: "/images/trash-2.png",
        },
    ],
};
  
export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
}as const;