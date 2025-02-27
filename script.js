const input = document.getElementById('input');
const button = document.querySelectorAll('button');
button.forEach(element => {
    element.addEventListener('click',(e) => {
        console.log(e.target.textContent);
        if(e.target.textContent === 'C') {
            input.innerText = '';
        }
        else if(e.target.textContent === '<') {
            input.innerText = input.textContent.slice(0,-1);
        }
        else if(e.target.textContent === '=') {
            input.innerText = eval(input.innerText)
        }

        else{
            input.innerText += e.target.textContent;
        }
        input.scrollLeft = input.scrollWidth
    })
})