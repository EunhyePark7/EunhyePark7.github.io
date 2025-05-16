import AppLayout from '@/components/AppLayout';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Resume = () => {
  const targetRef = useRef();
  return (
    <AppLayout>
      <button onClick={() => generatePDF(targetRef, { filename: '박은혜 이력서.pdf' })}>Download PDF</button>
      <br />
      <div ref={targetRef}>
        <h1>Resume(이력서 - 컴포넌트모음) page</h1>
      </div>
    </AppLayout>
  );
};

export default Resume;
