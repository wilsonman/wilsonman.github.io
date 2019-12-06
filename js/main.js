{
  const select = document.getElementById('food');
  const search = document.getElementById('search');

  const calories = document.getElementById('cal');
  const cholesterol = document.getElementById('chol');
  const sugars = document.getElementById('sugar');

  select.addEventListener('change', getInformation); // run the getInformation() function whenever a dropdown option is selected
  search.addEventListener('click', getInformation);


  function getInformation() {
    let choice = select.value;
    switch (choice) {
      case 'almond':
        calories.innerHTML = '7.7';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '0.1 g';
        break;
      case 'apple':
        calories.innerHTML = '95';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '19 g';
        break;
      case 'banana':
        calories.innerHTML = '105';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '14 g';
        break;
      case 'blueberry':
        calories.innerHTML = '0.8';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '0.1 g';
        break;
      case 'carrot':
        calories.innerHTML = '16';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '1.6 g';
        break;
      case 'egg':
        calories.innerHTML = '72';
        cholesterol.innerHTML = '186 mg';
        sugars.innerHTML = '0.2 g';
        break;
      case 'garlic':
        calories.innerHTML = '4.5';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '0 g';
        break;
      case 'grape':
        calories.innerHTML = '3.4';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '0.8 g';
        break;
      case 'kale':
        calories.innerHTML = '36';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '1.6 g';
        break;
      case 'liver':
        calories.innerHTML = '73';
        cholesterol.innerHTML = '248 mg';
        sugars.innerHTML = '0 g';
        break;
      case 'potatoes':
        calories.innerHTML = '161';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '2 g';
        break;
      case 'salmon':
        calories.innerHTML = '468';
        cholesterol.innerHTML = '143 mg';
        sugars.innerHTML = '0 g';
        break;
      case 'sardine':
        calories.innerHTML = '25';
        cholesterol.innerHTML = '17 mg';
        sugars.innerHTML = '0 g';
        break;
      case 'seaweed':
        calories.innerHTML = '0.9';
        cholesterol.innerHTML = '0 mg';
        sugars.innerHTML = '0 g';
        break;
      case 'shellfish':
        calories.innerHTML = '41';
        cholesterol.innerHTML = '25 mg';
        sugars.innerHTML = '0 g';
        break;
      default:
        calories.innerHTML = '';
        cholesterol.innerHTML = '';
        sugars.innerHTML = '';
    }
  }
}
