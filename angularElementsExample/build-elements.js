const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angularElementsExample/runtime.js',
        './dist/angularElementsExample/polyfills.js',
        './dist/angularElementsExample/scripts.js',
        './dist/angularElementsExample/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/shout-element.js');
})();