const fs = require('fs');
const path = require('path');

function findHtmlFiles() {
    const files = fs.readdirSync('./');
    const htmlFiles = files
        .filter(file => file.endsWith('.html') && file !== 'index.html')
        .sort();
    
    return htmlFiles;
}

function generateFilesList() {
    const htmlFiles = findHtmlFiles();
    
    const filesList = {
        files: htmlFiles,
        generatedAt: new Date().toISOString(),
        count: htmlFiles.length
    };
    
    fs.writeFileSync('./files.json', JSON.stringify(filesList, null, 2));
    
    console.log(`✅ Found ${htmlFiles.length} HTML files:`);
    htmlFiles.forEach(file => console.log(`   - ${file}`));
    
    return filesList;
}

// Run the script
generateFilesList();