'use strict';
console.clear();
console.log('script is running...');

const someElement = document.getElementById('element');
const styles = getComputedStyle(someElement);
const maxBlockSize = styles.getPropertyValue('max-block-size');
console.log(maxBlockSize);
