import type { FileItem } from "@/types/window-types";

import useWindowStore from "@/store/window";
import WindowWrapper from "@/hoc/windowWrapper";
import { WindowControls } from "@/components/window-controls";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const fileData = data as FileItem;

    const name = fileData.name;
    const imageUrl = fileData.imageUrl;

    if (!imageUrl) {
        console.error("Image file data is missing imageUrl:", fileData);
        return null; 
    }


    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <img 
                            src={imageUrl} 
                            alt={name} 
                            className="w-full h-auto max-h-[70vh] object-contain rounded"
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow
