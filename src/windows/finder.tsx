import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

import type { FinderItem, FolderItem } from "@/types/window-types";

import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";
import WindowWrapper from "@/hoc/windowWrapper";
import { WindowControls } from "@/components/window-controls";
import { locations } from "@/constants/locations";


const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore()as { 
        activeLocation: FolderItem;
        setActiveLocation: (item: FinderItem) => void;
      };;

    const openItem = (item: FinderItem) => {
        if (item.kind === "file" && item.fileType === 'pdf') 
            return openWindow("resume")
        if (item.kind === "folder") 
            return setActiveLocation(item);
        if (item.kind === "file" && ["fig", "url"].includes(item.fileType) && item.href) {
            return window.open(item.href, "_blank");
          }

          if (item.kind === "file") {
            openWindow(`${item.fileType}${item.kind}` as "txtfile" | "imgfile", item);
          }
    };

    const renderList = (name: string, items: FolderItem[]) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => setActiveLocation(item)}
                        className={cn(
                            item.id === activeLocation.id ? "active" : "not-active"
                        )}
                    >
                        <img src={item.icon} alt={item.name} className="w-4" />
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />

                <h2 className="font-bold text-sm text-center w-full">
                    {activeLocation.name}
                </h2>

                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {renderList("즐겨찾기", Object.values(locations) as FolderItem[])}
                    {renderList("프로젝트" ,locations.work.children as FolderItem[])}
                </div>

                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li 
                            key={item.id} 
                            className={`cursor-pointer hover:bg-gray-200 hover:shadow-sm active:scale-95 rounded ${item.position}`}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>
                                {item.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;
