document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitResult.textContent = fahrenheit.toFixed(2);
        } else {
            fahrenheitResult.textContent = "Invalid input";
        }
    });
});
