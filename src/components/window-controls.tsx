import useWindowStore from "@/store/window";
import type { WindowKey } from "@/types/window-types";

type WindowControlsProps = {
    target: WindowKey;
  };

export const WindowControls = ({ target }: WindowControlsProps) => {
    const { closeWindow } = useWindowStore();
    
    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)} />
            <div className="minimize" onClick={()=> {}} />
            <div className="maximize" onClick={()=> {}} />
        </div>
    )
}
