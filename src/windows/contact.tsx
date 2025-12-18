import socials from "@/constants/socials";
import WindowWrapper from "@/hoc/windowWrapper";
import { WindowControls } from "@/components/window-controls";


const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>문의</h2>
            </div>

            <div className="p-5 space-y-5">
                <img 
                    src="images/zetta1.png"
                    alt="ZeTta Profile"
                    className="w-20 rounded-full"
                />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>이메일</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text, canOpen }) => (
                        <li 
                            key={id} 
                            style={{ 
                                backgroundColor: canOpen ? bg : '#ccc',
                                opacity: canOpen ? 1 : 0.6,
                            }}
                            className={`rounded-md transition-all ${!canOpen ? 'cursor-not-allowed' : ''}`}
                        >
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title={text}
                                onClick={(e) => {
                                    if (!canOpen) e.preventDefault();
                                }}
                                className={`${!canOpen ? 'cursor-not-allowed' : ''}`}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
