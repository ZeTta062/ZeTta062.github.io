type NavLink = {
    id: number;
    name: string;
    type: "finder" | "contact" | "resume";
};

const navLinks: NavLink[] = [
    { 
      id:1, 
      name: "포트폴리오",
      type: "finder",
    },
    { 
      id:2, 
      name: "문의",
      type: "contact",
    },
    { 
      id:3, 
      name: "이력서",
      type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

export {
  navLinks,
  navIcons,
}