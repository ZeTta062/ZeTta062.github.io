import { navIcons, navLinks } from "@/constants/nav";
import { useClock } from "@/hooks/use-clock";
import useWindowStore from "@/store/window";




export const Navbar = () => {
    const { openWindow } = useWindowStore();
    const time = useClock();

    return (
        <nav>
            {/* navbar 왼쪽 섹션 */}
            <div >
                {/* 로고 */}
                <img src="/images/logo.svg" alt="로고" />

                {/* 제목 */}
                <p className="font-bold">
                    ZeTta's Portfolio
                </p>

                {/* nav links */}
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>
                                {name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* navbar 오른쪽 섹션 */}
            <div>
                {/* nav 아이콘 */}
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img 
                                src={img} 
                                alt={`icon-${id}`} 
                                className="icon-hover" 
                            />
                        </li>
                    ))}
                </ul>

                {/* 시간 */}
                <time >{time}</time>
            </div>
        </nav>
    )
}

