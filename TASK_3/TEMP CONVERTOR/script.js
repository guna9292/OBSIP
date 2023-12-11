function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value.trim();
    const selectedUnit = document.querySelector('input[name="unit"]:checked');
    const errorMessage = document.getElementById('error-message');
    const resultElement = document.getElementById('result');

    // Reset error and result messages
    errorMessage.textContent = '';
    resultElement.textContent = '';

    // Validate input
    if (inputTemp === '' || isNaN(inputTemp)) {
        errorMessage.textContent = 'Please enter a valid number.';
        return;
    }

    // Perform conversion
    const inputValue = parseFloat(inputTemp);
    const inputUnit = selectedUnit.value;

    let result = '';

    switch (inputUnit) {
        case 'celsius':
            result = `Fahrenheit: ${(inputValue * 9/5) + 32}°F, Kelvin: ${inputValue + 273.15}K`;
            break;
        case 'fahrenheit':
            result = `Celsius: ${(inputValue - 32) * 5/9}°C, Kelvin: ${(inputValue - 32) * 5/9 + 273.15}K`;
            break;
        case 'kelvin':
            result = `Celsius: ${inputValue - 273.15}°C, Fahrenheit: ${(inputValue - 273.15) * 9/5 + 32}°F`;
            break;
        default:
            errorMessage.textContent = 'Invalid input unit.';
            return;
    }

    resultElement.textContent = result;
}
