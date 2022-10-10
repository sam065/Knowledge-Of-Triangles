const sideInputs = document.querySelectorAll(".side-input");

var calculateButton = document.querySelector("#calculate-hypotenuse-btn");

const outputHypotenuse = document.querySelector(".output");

function calcuateSumOfSquares(x, y) {
    const sumOfSquares = (x * x) + (y * y);
    //console.log(sumOfSquares);
    return sumOfSquares;

}


function calculateHypotenuse() {


    if (sideInputs[0].value.length === 0 || sideInputs[1].value.length === 0) {
        outputHypotenuse.innerText = "Please do not leave any field empty";
        return;
    }

    if (Number(sideInputs[0].value) <= 0 || Number(sideInputs[1].value) <= 0) {
        outputHypotenuse.innerText = "Base and Height must be >= 1 ";
        return;
    }

    const sumOfSquares = calcuateSumOfSquares(
        Number(sideInputs[0].value),
        Number(sideInputs[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputHypotenuse.innerText = "The length of Hypotenuse is : " + lengthOfHypotenuse.toFixed(2);

}

calculateButton.addEventListener("click", calculateHypotenuse);



