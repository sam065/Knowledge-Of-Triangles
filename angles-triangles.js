const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  if (inputs[0].value.length === 0 || inputs[1].value.length === 0 || inputs[2].value.length === 0) {
    outputIsTriangle.innerText = "Please enter positive values for angles.";
    return;
}
if (Number(inputs[0].value) === 0 || Number(inputs[1].value) === 0 || Number(inputs[2].value) === 0) {
    outputIsTriangle.innerText = "All three angles must be non-zero and positive."
    return;
}


if (Number(inputs[0].value) < 0 || Number(inputs[1].value < 0) || Number(inputs[2].value < 0)) {
    outputIsTriangle.innerText = "All three angles must be positive. Please enter valid inputs and retry."
    return;
}
else{
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sum === 180) {
    outputEl.innerText = "Yay, the angles form a triangle!";
  } else {
    outputEl.innerText = "Oh no! The angle doesn't form a triangle";
  }

}

}

isTriangleBtn.addEventListener("click", isTriangle);