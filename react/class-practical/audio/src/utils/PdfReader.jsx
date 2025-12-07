import * as pdfjsLib from "pdfjs-dist/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function extractTextFromPdfArrayBuffer(arrayBuffer, onProgress = null) {
const typedArray = new Uint8Array(arrayBuffer);
const loadingTask = pdfjsLib.getDocument(typedArray);
const pdf = await loadingTask.promise;
const max = pdf.numPages;
let fullText = '';
for (let i = 1; i <= max; i++) {
const page = await pdf.getPage(i);
const content = await page.getTextContent();
const pdfjsLib = await import("pdfjs-dist/build/pdf");
const strings = content.items.map(item => item.str);
fullText += strings.join(' ') + '\n\n';
if (onProgress) onProgress(i / max);
}
return fullText;
}