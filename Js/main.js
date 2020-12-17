window.addEventListener('load', ()=>{


 const form = document.getElementById('form');   


calc = () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operator = document.getElementById('op').value;


    let result;




    if (operator === "add") {
        result = num1 + num2;
    }
    if (operator === "div") {
        result = num1 / num2;
    }
    if (operator === "sub") {
        result = num1 - num2;
    }



    document.getElementById('res').innerHTML = result;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
document.getElementById('res').style.color = "red";
form.addEventListener('submit', calc);

let imgLol = document.getElementById('img-test');

let btnN = document.getElementById('change');

btnN.addEventListener('click', () => {
    imgLol.src = "imgs/pubg.jpg"
})

})
