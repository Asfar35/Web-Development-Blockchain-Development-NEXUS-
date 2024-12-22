const res = document.getElementById("result");
const b1 = document.getElementById("calculate");

b1.addEventListener('click', () => {
    const height = Number(document.getElementById("input1").value);
    const weight = Number(document.getElementById("input2").value);
    if (isNaN(height) || isNaN(weight)) {
        res.innerText = "Invalid input...";
    }
    else if (weight === 0 || height == 0) {
        res.innerText = "Please enter weight and height...";
    }
    else {
        let h = height / 100;
        let bmi = weight / (h * h);

        if (bmi < 18.5) {
            res.innerText = `Your BMI is ${bmi.toFixed(2)}(Under Weight)`;
            res.style.color = 'blue';
        }
        else if (bmi > 18.5 && bmi < 24.9) {
            res.innerText = `Your BMI is ${bmi.toFixed(2)}(Normal Weight)`;
            res.style.color = 'green';
        }
        else if (bmi > 24.5 && bmi < 29.9) {
            res.innerText = `Your BMI is ${bmi.toFixed(2)}(Over Weight)`;
            res.style.color = 'orange';
        }
        else {
            res.innerText = `Your BMI is ${bmi.toFixed(2)}(Obesity)`;
            res.style.color = 'red';
        }
    }
    // setTimeout(()=>{
    //     res.remove();
    // },3000);
});
