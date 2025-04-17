const costInput = document.getElementById('costPerLiter');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalCostDisplay = document.getElementById('totalCost');


calculateBtn.addEventListener('click', () => {

  const costPerLiter = parseFloat(costInput.value);
  const liters = parseFloat(litersInput.value);


  const totalCost = costPerLiter * liters;


  totalCostDisplay.textContent = `Total: $${totalCost.toFixed(2)}`;
});
