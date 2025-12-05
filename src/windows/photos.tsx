import { Mail, Search } from "lucide-react";

import useWindowStore from "@/store/window";
import WindowWrapper from "@/hoc/windowWrapper";
import { gallery, photosLinks } from "@/constants/photos";
import { WindowControls } from "@/components/window-controls";




const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-center">
                    <h2>사진</h2>
                </div>
            
                <div className="flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>사진</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title}) => (
                            <li key={id} >
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {gallery.map(({id, img}) => (
                            <li 
                                key={id}
                                onClick={() => openWindow("imgfile", {
                                    id,
                                    name: "갤러리 이미지",
                                    icon: "/images/image.png",
                                    kind: "file",
                                    fileType: "img",
                                    imageUrl: img,
                                })}
                            >
                                <img src={img} alt={`${id}번 갤러리 이미지`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow
