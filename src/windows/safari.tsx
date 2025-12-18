import { 
    ChevronLeft, 
    ChevronRight, 
    Copy, 
    PanelLeft, 
    Plus, 
    Search, 
    Share, 
    ShieldHalf 
} from 'lucide-react';
import { toast, Toaster } from 'sonner';

import WindowWrapper from '@/hoc/windowWrapper';
import { WindowControls } from '@/components/window-controls';


const Safari = () => {
    const onCopy = () => {
        navigator.clipboard.writeText('https://next-blog-ivory-beta-36.vercel.app/')
        toast.success(`주소를 클립보드에 복사되었습니다.`)
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />

                <PanelLeft className='ml-10 icon' />

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className='icon' />

                    <div className="search">
                        <Search className='icon' />
                        <input 
                            type='text'
                            placeholder='https://next-blog-ivory-beta-36.vercel.app/'
                            className='flex-1'
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' 
                        onClick={onCopy}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <iframe 
                    src="https://next-blog-ivory-beta-36.vercel.app/" 
                    width={"896px"}
                    height={"480px"}
                >
                </iframe>
            </div>

            <Toaster richColors />

            {/* <div className="blog">
                <h2>개발자 블로그</h2>

                <div className="space-y-8">
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                <img src={image} alt={title} />
                            </div>

                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a 
                                    href={link} 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    Check out the full post 
                                    <MoveRight className='icon-hover' />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;
