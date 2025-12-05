import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";
import { locations } from "@/constants/locations";
import type { FolderItem } from "@/types/window-types";




const projects: FolderItem['children'] = (locations.work as FolderItem)?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } =useWindowStore();

    const handleOpenProjectFinder = (project: FolderItem) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => {
        Draggable.create(".folder");
    }, []);

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li 
                        key={project.id}
                        className={cn(
                            (project as FolderItem).windowPosition || '', 
                            "group folder"
                        )}
                        onClick={() => handleOpenProjectFinder(project as FolderItem)}
                    >
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home
