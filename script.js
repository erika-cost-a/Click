
let fonts = document.getElementById('font')
let body = document.body
let num = 0

body.addEventListener('click', () => {
    let color = [
        'blue', 'purple', 'pink', 'orange'
    ]
    num ++
  
    if(num == 4){
        num = 0
    }

  body.style.backgroundColor = color[num]

    
})

let arr = [
    'C','O','L','O','R','S'
   ]

let tmp

function font(){    
    arr.forEach((letra, i)=>{
        setTimeout(()=>{
            fonts.innerText += letra    
        }, 150 *  i )

        setTimeout(() => {
            fonts.innerHTML = ' '
        }, 5000);

        setTimeout(() => {
            fonts.innerHTML = ' CLICK '
        }, 7000);

        setTimeout(() => {
            fonts.innerHTML = ' '
        }, 9000);
    })

}

font()

setInterval( () => {
    font()
    console.log('teste')
}, 10000);


