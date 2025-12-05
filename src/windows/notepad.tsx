import { WindowControls } from "@/components/window-controls";
import WindowWrapper from "@/hoc/windowWrapper";
import useWindowStore from "@/store/window";
import type { FileItem } from "@/types/window-types";


const Notepad = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const fileData = data as FileItem;

    const name = fileData.name;
    const image = fileData.image;
    const subtitle = fileData.subtitle;
    const description = fileData.description;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white">
                {image 
                    ? (<img src={image} alt={name} className="w-full h-auto rounded" />)
                    : null
                }
                
                {subtitle 
                    ? <h3 className="text-lg font-semibold">{subtitle}</h3> 
                    : null
                }

                {Array.isArray(description) && description.length > 0 
                    ? (
                        <div className="space-y-3 leading-relaxed text-base text-gray-800">
                            {description.map((item, id) => (
                                <p key={id}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    )
                    : null
                }
            </div>
        </>
    )
}

const NotepadWindow = WindowWrapper(Notepad, "txtfile");

export default NotepadWindow
