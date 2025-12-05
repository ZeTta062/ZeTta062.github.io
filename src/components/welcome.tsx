import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


/* 폰트 웨이트 최소-최대 크기 지정 */
type FontWeightKey = "subtitle" | "title";

type FontWeightConfig = {
  min: number;
  max: number;
  default: number;
};

const FONT_WEIGHTS: Record<FontWeightKey, FontWeightConfig> = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
}


/* 텍스트 렌더 */
const renderText = (
    text: string,
    className: string,
    baseWeight: number = 400
) => {
    return [...text].map((char, i) => (
        <span 
            key={i} 
            className={className} 
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            { char === " " ? '\u00A0' : char }
        </span>
    ))
}


/* Text Hover 시 애니메이션 */
const setupTextHover = (
    container: HTMLElement | null,
    type: FontWeightKey
) => {
    if (!container) return () => {};

    const letters = container.querySelectorAll('span')
    const{ min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (
        letter: HTMLSpanElement,
        weight: number,
        duration: number = 0.25
    ) => {
        return gsap.to(letter, { 
            duration, 
            ease:'power2.out',
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left:l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w/2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () => 
        letters.forEach((letter) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
};


export const Welcome = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() => {
        const titleCleanup =  setupTextHover(titleRef.current, 'title');
        const subtitleCleanup =setupTextHover(subtitleRef.current, 'subtitle');

        return () => {
            titleCleanup();
            subtitleCleanup();
        }
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm ZeTta! Welcome to my",
                    "text-3xl font-georama",
                    100,
                )}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText(
                    "Portfolio",
                    "text-9xl italic font-georama",
                    400,
                )}
            </h1>

            <div className="small-screen">
                <p>
                    이 포트폴리오는 데스크탑/태블릿 화면 전용으로 설계되었습니다.
                </p>
            </div>
        </section>
    )
}
