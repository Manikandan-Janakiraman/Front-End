import React, { useState } from 'react'
import PdfUploader from './components/PdfUploader'
import AudioControls from './components/AudioControls'


export default function App(){
const [text, setText] = useState('')
const [status, setStatus] = useState('')


return (
<div className="container">
<h1 style={{margin:0}}>PDF → Audio (Web)</h1>
<p className="small">Upload a PDF, extract text, and listen using your browser's TTS.</p>


<section style={{marginTop:18}}>
<PdfUploader onTextExtracted={(t)=>setText(t)} setStatus={setStatus} />
<div style={{marginTop:8}} className="small">{status}</div>
</section>


<section style={{marginTop:18}}>
<AudioControls text={text} />
</section>


<section style={{marginTop:18}}>
<h3>Extracted Text</h3>
<textarea value={text} readOnly />
</section>


<section style={{marginTop:12}}>
<p className="small">Tips: For large PDFs, extraction may take time. If you need downloadable audio, I can show you how to integrate an external TTS API to synthesize and return MP3 files.</p>
</section>
</div>
)
}
