console.log("shub")

const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');

const allLinks = document.querySelectorAll('a');

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4> Hiii </h4>'

h1.style.color = 'hotpink';
h1.style.backgroundColor = 'green';

// for (let i = 0; i < allLinks.length; i++){
//     allLinks[0].style.color = 'teal';
// }

////////////use for Of Loop

for(const link of allLinks) {
    link.style.color = 'teal';
    link.style.textDecoration = 'none';
    link.style.fontWeight = '700'
    link.style.fontFamily = 'courier-bold'
}

