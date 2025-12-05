export const dockApps = [
    {
        id: "finder",
        name: "포트폴리오", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "블로그", // was "Safari and Articles"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "사진", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "문의", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "스킬", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "휴지통", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
] as const;
