const fs = require('fs');
const files = ['src/App.tsx', 'src/pages/Empresas.tsx'];
files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<span className="flex items-center gap-1\.5">\s*<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse text-white" \/>\s*ASN: 268801\s*<\/span>\s*<span>•<\/span>\s*/g, '');
    content = content.replace(/ • ASN: 268801/g, '');
    content = content.replace(/08h às 18h/g, '08h às 17h');
    fs.writeFileSync(file, content);
  }
});
