const fs = require('fs');

const pages = [
  'LandingPage', 'Login', 'Signup', 'ForgotPassword', 'ResetPassword',
  'Dashboard', 'Scan', 'Result', 'History'
];
pages.forEach(p => fs.writeFileSync(`src/pages/${p}.jsx`, `import React from 'react';\n\nfunction ${p}() {\n  return (<div className="glass-panel" style={{margin: '2rem', padding: '2rem'}}>\n    <h1 className="neon-text">${p}</h1>\n  </div>);\n}\n\nexport default ${p};\n`));

const comps = ['Navbar', 'Chatbot', 'PlantCard', 'ParticlesBackground'];
comps.forEach(c => fs.writeFileSync(`src/components/${c}.jsx`, `import React from 'react';\n\nfunction ${c}(props) {\n  return (\n    <div className="glass-panel" style={{padding:'1rem'}}>\n      <h3 className="neon-text">${c}</h3>\n    </div>\n  );\n}\n\nexport default ${c};\n`));

fs.writeFileSync(`src/services/api.js`, `// Placeholder API service\nexport const API_URL = "http://localhost:3000";\n`);
fs.writeFileSync(`src/data/plants.js`, `// Placeholder Data service\nexport const plants = [];\n`);

console.log("Boilerplate generated successfully!");
