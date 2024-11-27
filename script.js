function calcPoints(formNode) {
  const { elements } = formNode;

  const checkedInputs = [];

  Array.from(elements)
    .filter((item) => !!item.name)
    .forEach((element) => {
      if (element.type === 'checkbox') {
        element.checked === true ? checkedInputs.push(1) : checkedInputs.push(0);
        element.checked = false;
      }
    });

  return checkedInputs.reduce((x, y) => x + y);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const points = calcPoints(event.target);

  console.dir(data);
}

const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);
