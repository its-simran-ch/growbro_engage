const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.jsx')) filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Navbar / Footer html logo text
  content = content.replace(/growbro<span className="text-primary">\.ai<\/span>/g, 'Growbro <span className="text-primary">Engage</span>');
  
  // 2. Specific existing terms
  content = content.replace(/Growbro AI Base/g, 'Growbro Engage AI');
  content = content.replace(/Growbro AI/g, 'Growbro Engage');
  content = content.replace(/Growbro\.ai/gi, 'Growbro Engage');
  content = content.replace(/growbro\.ai/gi, 'Growbro Engage');
  
  // 3. Prevent double replacement if "Growbro" is already next to "Engage"
  // Replaces "Growbro" with "Growbro Engage" ONLY IF not followed by " Engage"
  content = content.replace(/Growbro(?!\s*Engage)/g, 'Growbro Engage');
  content = content.replace(/growbro(?!\s*Engage|-logo)/g, 'Growbro Engage'); // ignore growbro-logo
  
  fs.writeFileSync(file, content);
});
console.log("Replaced in " + files.length + " files.");
