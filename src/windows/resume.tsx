import { useState } from "react";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, Loader2, ServerCrash } from "lucide-react";

import WindowWrapper from "@/hoc/windowWrapper";
import { WindowControls } from "@/components/window-controls";


/* react PDF */
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages} : { numPages: number }) {
        setNumPages(numPages);
    }
    
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a 
                    href="files/resume.pdf" 
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            <Document 
                file="files/resume.pdf"
                loading={
                    <p className="flex justify-center items-center py-10 text-gray-400">
                        <Loader2 className="animate-spin" />
                    </p>
                }
                error={
                    <div className="flex flex-col justify-center items-center py-10 gap-2 text-gray-400">
                        <ServerCrash />
                        <p>Failed to load PDF file.</p>
                    </div>
                }
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
            
            {/* 페이지 네비게이션 */}
            {numPages && numPages > 1 && (
                <div className="flex items-center justify-center gap-4 py-4">
                    <button
                        onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        이전
                    </button>

                    <span className="text-gray-600">
                        {pageNumber} / {numPages}
                    </span>

                    <button
                        onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                        disabled={pageNumber >= numPages}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        다음
                    </button>
                </div>
            )}
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
