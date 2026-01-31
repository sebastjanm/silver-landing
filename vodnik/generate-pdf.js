const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'vodnik-srebro.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    await page.pdf({
        path: 'vodnik-kako-zaceti-z-nalozbo-v-srebro.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });
    
    await browser.close();
    console.log('PDF generated: vodnik-kako-zaceti-z-nalozbo-v-srebro.pdf');
}

generatePDF().catch(console.error);
