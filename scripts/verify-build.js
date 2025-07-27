#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build output...\n');

const outDir = path.join(__dirname, '..', 'out');
const requiredFiles = [
  'index.html',
  '404.html',
  '_next/static'
];

let allGood = true;

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Output directory "out" does not exist');
  process.exit(1);
}

// Check required files
requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.error(`❌ ${file} - Missing`);
    allGood = false;
  }
});

// Check index.html content
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  
  const checks = [
    { name: 'Title tag', test: /<title>.*Thunder Auto.*<\/title>/ },
    { name: 'Meta description', test: /<meta name="description"/ },
    { name: 'React content', test: /Thunder Auto/ },
    { name: 'CSS styles', test: /_next\/static.*\.css/ },
    { name: 'JavaScript', test: /_next\/static.*\.js/ }
  ];
  
  console.log('\n📄 Checking index.html content:');
  checks.forEach(check => {
    if (check.test.test(content)) {
      console.log(`✅ ${check.name} - Found`);
    } else {
      console.error(`❌ ${check.name} - Missing`);
      allGood = false;
    }
  });
}

// Final result
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 Build verification PASSED! Ready for deployment.');
  process.exit(0);
} else {
  console.error('💥 Build verification FAILED! Check the issues above.');
  process.exit(1);
}