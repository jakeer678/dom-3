// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold' 
// items[2].style.backgroundColor = 'green'
 

// for(var i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold' 
// }


// var tag = document.getElementsByTagName("li");
// var tagName = document.getElementsByName('test');
// tag[4].style.backgroundColor = 'green'

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
var thirddItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.backgroundColor = 'green'
thirddItem.style.display = "none"

var list = document.querySelectorAll('#items');
list[1].style.backgroundColor = 'green'


var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green'
}














