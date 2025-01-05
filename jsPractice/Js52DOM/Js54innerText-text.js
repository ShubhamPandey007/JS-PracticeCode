////difference between innertext and text content

//let's see what is diff b/w innertext and innerHTML 

const paragraph = document.querySelector('p') 

console.log(paragraph.innerHTML);

paragraph.innerHTML = '<h4> Hello Mr. Shubh </h4>'
//text set kar sakate hai
paragraph.textContent = '<h4> Hello Mr. Shubh </h4>'

paragraph.innerText = '<h4> Hello Mr. Shubh </h4>'
// textcontent and innertext ka use karke text nahi set kar sakte hai.

