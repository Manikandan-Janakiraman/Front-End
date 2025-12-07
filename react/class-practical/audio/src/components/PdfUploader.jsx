import React, { useRef } from 'react'


export default function PdfUploader({ onTextExtracted, setStatus }) {
const fileInputRef = useRef(null);


const handleFile = async (file) => {
if (!file) return;
if (file.type !== 'application/pdf') {
setStatus('Please upload a PDF file.');
return;
}
setStatus('Reading PDF...');
const reader = new FileReader();
reader.onload = async () => {
try {
const arrayBuffer = reader.result;
// dynamic import to avoid bundler issues in some setups
const { extractTextFromPdfArrayBuffer } = await import('../utils/pdfReader');
const text = await extractTextFromPdfArrayBuffer(arrayBuffer, (p) => setStatus(`Reading pages: ${(p*100).toFixed(0)}%`));
onTextExtracted(text);
setStatus('Text extraction complete.');
} catch (err) {
console.error(err);
setStatus('Failed to extract text from PDF.');
}
};
reader.readAsArrayBuffer(file);
}


const onChange = (e) => handleFile(e.target.files?.[0]);


return (
<div style={{display:'flex', gap:12, alignItems:'center'}}>
<input ref={fileInputRef} type="file" accept="application/pdf" onChange={onChange} />
<button className="button" onClick={() => fileInputRef.current?.click()}>Choose PDF</button>
</div>
);
}