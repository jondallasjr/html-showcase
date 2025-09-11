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

function createNestedStructure(files, maxDepth = 5) {
    const nested = {};
    
    files.forEach(file => {
        const parts = file.split('/');
        const fileName = parts.pop();
        
        // Limit depth to prevent infinite nesting
        const limitedParts = parts.slice(0, maxDepth);
        
        let current = nested;
        
        // Navigate/create the folder structure
        limitedParts.forEach(folder => {
            if (!current[folder]) {
                current[folder] = {};
            }
            current = current[folder];
        });
        
        // Add the file to the deepest level
        if (!current['_files']) {
            current['_files'] = [];
        }
        current['_files'].push(file);
    });
    
    return nested;
}

function printNestedStructure(structure, indent = '') {
    Object.keys(structure).sort().forEach(key => {
        if (key === '_files') {
            // Print files
            structure[key].forEach(file => {
                const fileName = file.split('/').pop().replace('.html', '');
                console.log(`${indent}📄 ${fileName}`);
            });
        } else {
            // Print folder and recurse
            console.log(`${indent}📁 ${key}/`);
            printNestedStructure(structure[key], indent + '  ');
        }
    });
}

function generateFilesList() {
    const htmlFiles = findHtmlFiles();
    const flatStructure = organizeFilesByFolder(htmlFiles);
    const nestedStructure = createNestedStructure(htmlFiles);
    
    const filesList = {
        files: htmlFiles,
        structure: flatStructure, // Keep for backward compatibility
        nestedStructure: nestedStructure, // New nested structure
        generatedAt: new Date().toISOString(),
        count: htmlFiles.length
    };
    
    fs.writeFileSync('./files.json', JSON.stringify(filesList, null, 2));
    
    console.log(`✅ Found ${htmlFiles.length} HTML files:`);
    console.log('\n📊 Nested Structure:');
    printNestedStructure(nestedStructure);
    
    console.log('\n📊 Flat Structure (legacy):');
    // Display organized structure
    Object.keys(flatStructure).forEach(folder => {
        if (folder === '_root') {
            console.log(`📁 Root folder:`);
        } else {
            console.log(`📁 ${folder}/:`);
        }
        flatStructure[folder].forEach(file => {
            const fileName = file.split('/').pop();
            console.log(`   - ${fileName}`);
        });
    });
    
    return filesList;
}

// Run the script
generateFilesList();