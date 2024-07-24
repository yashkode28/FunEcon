function calculateSupplyDemand() {
    const price = document.getElementById('price').value;
    let supply = 0;
    let demand = 0;

    if (price) {
        // Example linear equations for supply and demand
        // Supply = 2 * Price
        // Demand = 100 - Price
        supply = 2 * price;
        demand = 100 - price;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>At a price of $${price}, the supply is ${supply} units and the demand is ${demand} units.</p>`;
    }
}

function calculateGDP() {
    // Get user inputs
    const consumption = parseFloat(document.getElementById('consumption').value);
    const investment = parseFloat(document.getElementById('investment').value);
    const governmentExpenditure = parseFloat(document.getElementById('governmentExpenditure').value);
    const exports = parseFloat(document.getElementById('exports').value);
    const imports = parseFloat(document.getElementById('imports').value);
    const net = exports - imports;

    // Calculate GDP
    const GDP = consumption + investment + governmentExpenditure + net;

    // Display the result
    const resultDiv = document.getElementById('gdpResult');
    resultDiv.innerHTML = `<p>The GDP in US Dollars is $${GDP.toFixed(2)}</p>`;
}

function checkPPF() {
    // Get values from the input fields
    const cars = document.getElementById('cars').value;
    const boats = document.getElementById('boats').value;
    const resultDiv = document.getElementById('result');
  
    // Validate inputs
    if (isNaN(cars) || isNaN(boats) || cars < 0 || boats < 0) {
      resultDiv.innerText = '<p>Please enter valid non-negative numbers for cars and boats.</p>';
      return;
    }
  
    // Calculate the maximum number of boats that can be produced for the given number of cars
    const maxBoats = 100 - 2 * cars;
    let resultMessage = '';
  
    // Determine the message based on the conditions
    if (boats > maxBoats) {
      resultMessage = '<p>Economy cannot produce this amount of cars and boats given its limited resources.</p>';
    } else if (boats == maxBoats) {
      resultMessage = '<p>Economy can produce this amount and is allocating its resources to the fullest.</p>';
    } else {
      resultMessage = '<p>Economy can produce this amount but is not allocating its resources to the fullest.</p>';
    }
  
    // Display the result message
    resultDiv.innerHTML = resultMessage;
  }

  function calculatePED() {
    // Get values from input fields
    const Q1 = parseFloat(document.getElementById('initialQuantity').value);
    const Q2 = parseFloat(document.getElementById('finalQuantity').value);
    const P1 = parseFloat(document.getElementById('initialPrice').value);
    const P2 = parseFloat(document.getElementById('finalPrice').value);
    const resultDiv = document.getElementById('result');

    // Validate inputs
    if (isNaN(Q1) || isNaN(Q2) || isNaN(P1) || isNaN(P2) || Q1 <= 0 || Q2 <= 0 || P1 <= 0 || P2 <= 0) {
      resultDiv.innerText = 'Please enter valid positive numbers for all fields.';
      return;
    }

    // Calculate percentage changes
    const deltaQ = Q2 - Q1;
    const deltaP = P2 - P1;
    const avgQ = (Q1 + Q2) / 2;
    const avgP = (P1 + P2) / 2;

    // Calculate PED
    const PED = (deltaQ / avgQ) / (deltaP / avgP);
    let Elasticity = '';
    if (PED > 1){
      Elasticity = 'Elastic'
    }

    else if (PED < 1){
      Elasticity = 'Inelastic'
    }

    else{
      Elasticity = 'neither elastic nor inelastic'
    }

    // Display result
    resultDiv.innerText = `The Price Elasticity of Demand (PED) is ${PED.toFixed(2)} and is ` + Elasticity;
  }