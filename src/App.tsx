import gsap from "gsap";
import { Draggable } from 'gsap/Draggable';

import { Contact, Finder, Image, Notepad, Photos, Resume, Safari, Terminal } from "@/windows"
import { Dock, Home, Navbar, Welcome } from "@/components"


gsap.registerPlugin(Draggable);

function App() {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />

            <Image />
            <Notepad />
            <Photos />
            <Contact />

            <Home />
        </main>
    )
}

export default App
