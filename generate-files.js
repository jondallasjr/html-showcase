const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir = './', prefix = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    let htmlFiles = [];
    
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        const relativePath = prefix + item.name;
        
        if (item.isDirectory()) {
            // Skip common build/system directories
            if (!['node_modules', '.git', '.vercel', 'dist', 'build'].includes(item.name)) {
                htmlFiles = htmlFiles.concat(findHtmlFiles(fullPath, relativePath + '/'));
            }
        } else if (item.isFile() && item.name.endsWith('.html') && item.name !== 'index.html') {
            htmlFiles.push(relativePath);
        }
    }
    
    return htmlFiles.sort();
}

function organizeFilesByFolder(files) {
    const structure = {};
    
    files.forEach(file => {
        const parts = file.split('/');
        const fileName = parts.pop();
        const folderPath = parts.join('/');
        
        if (folderPath === '') {
            // Root level file
            if (!structure['_root']) structure['_root'] = [];
            structure['_root'].push(file);
        } else {
            // File in folder
            if (!structure[folderPath]) structure[folderPath] = [];
            structure[folderPath].push(file);
        }
    });
    
    return structure;
}

function generateFilesList() {
    const htmlFiles = findHtmlFiles();
    const structure = organizeFilesByFolder(htmlFiles);
    
    const filesList = {
        files: htmlFiles,
        structure: structure,
        generatedAt: new Date().toISOString(),
        count: htmlFiles.length
    };
    
    fs.writeFileSync('./files.json', JSON.stringify(filesList, null, 2));
    
    console.log(`✅ Found ${htmlFiles.length} HTML files:`);
    
    // Display organized structure
    Object.keys(structure).forEach(folder => {
        if (folder === '_root') {
            console.log(`📁 Root folder:`);
        } else {
            console.log(`📁 ${folder}/:`);
        }
        structure[folder].forEach(file => {
            const fileName = file.split('/').pop();
            console.log(`   - ${fileName}`);
        });
    });
    
    return filesList;
}

// Run the script
generateFilesList();