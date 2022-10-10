const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (sides[0].value.length === 0 || sides[1].value.length === 0) {
        outputEl.innerText = "Please do not leave any field empty.";
        return;
    }

  if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
        outputEl.innerText = "Base and Height must be greater than 1.";
        return;
    }
  else{
    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
  
}

calculateBtn.addEventListener("click", calculateHypotenuse);