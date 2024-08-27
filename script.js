document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const heightUnit = document.querySelector('#height-unit').value;
  const weight = parseFloat(document.querySelector('#weight').value);
  const weightUnit = document.querySelector('#weight-unit').value;
  const results = document.querySelector('#results');

  let heightInCm;
  let weightInKg;

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight`;
    return;
  }

  // Convert height to centimeters
  switch (heightUnit) {
    case 'm':
      heightInCm = height * 100;
      break;
    case 'ft':
      heightInCm = height * 30.48;
      break;
    case 'in':
      heightInCm = height * 2.54;
      break;
    default:
      heightInCm = height;
  }

  // Convert weight to kilograms
  switch (weightUnit) {
    case 'lb':
      weightInKg = weight * 0.453592;
      break;
    default:
      weightInKg = weight;
  }

  const bmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);

  results.innerHTML = `Your BMI is <span>${bmi}</span>`;
});
