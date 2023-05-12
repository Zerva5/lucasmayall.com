const fs = require('fs');
const path = require('path');
const svgToJsx = require('svg-to-jsx');

const inputFolderPath = './public/icons';
const outputFilePath = './SvgIcons.tsx';

async function convertSvgToComponent(svg, componentName) {
  const jsx = await svgToJsx(svg);
  return `
export const ${componentName} = () => {
  return (
    ${jsx}
  );
};
`;
}

function convertFileNameToComponentName(fileName) {
  return fileName
    .replace('.svg', '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

async function main() {
  const svgFiles = fs
    .readdirSync(inputFolderPath)
    .filter((fileName) => path.extname(fileName) === '.svg');

  let outputContent = `import React from 'react';\n\n`;

  for (const svgFile of svgFiles) {
    const filePath = path.join(inputFolderPath, svgFile);
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const componentName = convertFileNameToComponentName(svgFile);
    const componentCode = await convertSvgToComponent(svgContent, componentName);
    outputContent += componentCode;
  }

  fs.writeFileSync(outputFilePath, outputContent);
  console.log('SVG icons successfully converted to React functional components in', outputFilePath);
}

main().catch((error) => console.error(error));
