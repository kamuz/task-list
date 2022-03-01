// Select elements
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Get and check classes
val = firstLi.className;
val = link.classList;
val = link.classList[0];
val = link.classList.contains('delete-item');

// Add remove classes
link.classList.add('text');
val = link;
link.classList.remove('text');
val = link;

// Atributes
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link.getAttribute('href');
val = link.hasAttribute('href');

console.log(val);