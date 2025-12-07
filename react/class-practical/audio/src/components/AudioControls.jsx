import React, { useEffect, useState } from 'react'


export default function AudioControls({ text }) {
const [isSpeaking, setIsSpeaking] = useState(false);
const [rate, setRate] = useState(1);
const [pitch, setPitch] = useState(1);
const [voiceIndex, setVoiceIndex] = useState(0);
const [voices, setVoices] = useState([]);
const [chunkSize, setChunkSize] = useState(1500);


useEffect(() => {
const loadVoices = () => setVoices(window.speechSynthesis.getVoices() || []);
loadVoices();
window.speechSynthesis.onvoiceschanged = loadVoices;
return () => { window.speechSynthesis.onvoiceschanged = null; }
}, []);


const speak = async () => {
if (!text) return;
if (isSpeaking) stop();
setIsSpeaking(true);


// Break text into chunks to avoid browser cutting off long speeches
const sentences = splitTextIntoChunks(text, chunkSize);
for (let i = 0; i < sentences.length; i++) {
if (!isSpeaking) break; // user stopped
const utter = new SpeechSynthesisUtterance(sentences[i]);
const selectedVoice = voices[voiceIndex];
if (selectedVoice) utter.voice = selectedVoice;
utter.rate = rate;
utter.pitch = pitch;
// wait for each chunk to finish
await speakUtterance(utter);
}
setIsSpeaking(false);
}


const speakUtterance = (utter) => new Promise((resolve) => {
utter.onend = () => resolve();
utter.onerror = () => resolve();
window.speechSynthesis.speak(utter);
});


const stop = () => {
window.speechSynthesis.cancel();
setIsSpeaking(false);
}


return (
<div>
<div style={{display:'flex', gap:12, alignItems:'center'}}>
<button className="button" onClick={speak} disabled={!text || isSpeaking}>▶ Play</button>
<button className="button" onClick={stop} disabled={!isSpeaking}>■ Stop</button>
<span className="small">{isSpeaking ? 'Speaking...' : 'Idle'}</span>
</div>

<div style={{marginTop:12}}>
<label className="small">Voice</label>
<select value={voiceIndex} onChange={(e) => setVoiceIndex(Number(e.target.value))}>
{voices.length === 0 && <option>Default</option>}
{voices.map((v, i) => <option key={i} value={i}>{v.name} — {v.lang}</option>)}
</select>
</div>


<div style={{marginTop:8}}>
<label className="small">Speed: {rate.toFixed(2)}</label>
<input type="range" min="0.5" max="2" step="0.05" value={rate} onChange={(e)=>setRate(Number(e.target.value))} />
</div>


<div style={{marginTop:8}}>
<label className="small">Pitch: {pitch.toFixed(2)}</label>
<input type="range" min="0.5" max="2" step="0.05" value={pitch} onChange={(e)=>setPitch(Number(e.target.value))} />
</div>


<div style={{marginTop:8}}>
<label className="small">Chunk size (characters) — smaller helps avoid truncation: {chunkSize}</label></div>
</div>
)};