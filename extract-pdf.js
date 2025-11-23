const fs = require('fs');
const pdfParse = require('pdf-parse');

const dataBuffer = fs.readFileSync('public/images/boudoir_25-invoegbladenA4-NL.pdf');

pdfParse(dataBuffer).then(data => {
  console.log(data.text);
}).catch(err => {
  console.error('Error:', err.message);
  console.error(err.stack);
});

