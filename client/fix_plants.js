import fs from 'fs';
import path from 'path';

// Load raw file
const filePath = path.resolve('./src/data/plants.js');
let rawStr = fs.readFileSync(filePath, 'utf-8');

// The file might be `export const plants = [...]`
// We need to parse it, transform objects, and rewrite it.
// To bypass complex ATS AST parsers, we will extract the array block.

console.log("Reading plants file...");

try {
  // Use a regex to extract the array body... or better, dynamically import it if possible.
  // Actually, easiest is a regex replace on string property properties:
  // e.g. herbalUses: "something, something else" -> herbalUses: ["something", "something else"]
  // But wait, what if it's already an array? 
  // Let's rely on standard functional regex matching:

  const convertToArrayStr = (match, prop, strContent) => {
    // If it's already an array `herbalUses: ["a", "b"]`, the regex won't match if we strictly target strings.
    // match: `prop: "val1, val2"`
    
    // Split the string and construct a JS array string
    const items = strContent.split(/[,;]/).map(s => s.trim()).filter(Boolean);
    const arrStr = "[\n" + items.map(t => '      "' + t.replace(/"/g, '\\"') + '"').join(',\n') + "\n    ]";
    return `${prop}: ${arrStr}`;
  };

  rawStr = rawStr.replace(/(herbalUses|medicalUses|diseases|medicineForm|sideEffects)\s*:\s*["'](.*?)["']/g, convertToArrayStr);
  
  // What about template literals? 
  rawStr = rawStr.replace(/(herbalUses|medicalUses|diseases|medicineForm|sideEffects)\s*:\s*`([\s\S]*?)`/g, (match, prop, strContent) => {
    const items = strContent.split(/[,;]/).map(s => s.trim().replace(/\n/g, '')).filter(Boolean);
    const arrStr = "[\n" + items.map(t => '      "' + t.replace(/"/g, '\\"') + '"').join(',\n') + "\n    ]";
    return `${prop}: ${arrStr}`;
  });

  fs.writeFileSync(filePath, rawStr, 'utf-8');
  console.log("Successfully transformed scalar strings to exact arrays inside plants.js!");
} catch (e) {
  console.error("Failed!", e);
}
