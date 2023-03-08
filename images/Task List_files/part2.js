let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//val = list;
val = listItem;

// val = list.childNodes; // child node including the break
// val = list.children; // HTML collection of all the elements

// val = list.childNodes[0].nodeName; 
// val = list.childNodes[0].nodeType;

// //children of children
// val = list.children[1].textContent = 'hello';
// val = list.children[3].children[0].id = 'Test-link';

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// //count child elemenets
// val = list.childElementCount;

// // get parent node -- > both output the same thind
// val = listItem.parentElement;
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// val = list.nextSibling;





console.log(val);