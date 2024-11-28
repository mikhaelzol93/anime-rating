function countCheckedInputs() {
  const inputsChecked = [];

  Array.from(ratingContent.children).forEach((divElement) => {
    Array.from(divElement.children).forEach((labelElement) => {
      labelElement.children[0].checked === true ? inputsChecked.push(1) : inputsChecked.push(0);
      labelElement.children[0].checked = false;
    });
  });

  return inputsChecked.reduce((x, y) => x + y);
}

function buttonClickHandler(event) {
  event.preventDefault();

  const checkedInputsNumber = countCheckedInputs();

  rating.textContent = `${checkedInputsNumber}`;
}

const ratingContent = document.getElementById('rating-content');
const rating = document.getElementById('rating');
const button = document.getElementById('button');
button.addEventListener('click', buttonClickHandler);
