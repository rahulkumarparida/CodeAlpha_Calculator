
let Display =document.getElementById("Display");
let Numbers = document.getElementById("Numbers");
let Operators = document.getElementById("Operations")
let Enter = document.getElementById("Enter")
let Clear = document.getElementById("clear")
let CalculatedNum = document.getElementById("Calculated")

let arr = []
let currNum = "0" ;
    Numbers.addEventListener("click" , (e)=>{
        console.log(e.target.innerText);
        let id  = e.target.getAttribute("id")
        currNum += String(id)
        console.log(currNum);
       Display.innerHTML = currNum
    })
    Operators.addEventListener("click" , (e)=>{
        console.log(e.target.innerText);
        arr.push(Number(currNum))
            currNum = "0"
         arr.push(e.target.innerText)
         console.log(arr);
        Display.innerHTML = arr.join(' ')
    })

Enter.addEventListener("click" , ()=>{
   
        arr.push(Number(currNum))
        currNum = "0"
    Display.innerHTML = arr.join('')
    setTimeout(() => {
        CalculatedNum.innerHTML = arr.join(' ')
        Display.innerHTML = eval(arr.join(''))
    }, 500);
})
Clear.addEventListener("click" , (e)=>{
    location.reload()
    e.preventDefault();
})
