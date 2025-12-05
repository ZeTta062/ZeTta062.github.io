import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef, type ComponentType } from "react";

import useWindowStore from "@/store/window";
import type { WindowKey } from "@/types/window-types";



const WindowWrapper = <P extends object>(
    Component: ComponentType<P>,
    windowKey: WindowKey
) => {
    const Wrapped = (props: P) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef<HTMLElement | null>(null);

        /* 윈도우 열기 효과 */
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(
                el, 
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            );
        }, [isOpen]);

        /* 윈도우 드래그 */
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const header = el.querySelector<HTMLElement>("#window-header");
            if (!header) return;

            const [instance] = Draggable.create(el, { trigger: header, onPress: () => focusWindow(windowKey) });

            return () => instance.kill();
        }, [isOpen]);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section 
                id={windowKey} 
                ref={ref} 
                style={{zIndex}}
                className="absolute"
            >
                <Component  {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}

export default WindowWrapper;