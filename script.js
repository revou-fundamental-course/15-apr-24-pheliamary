function convertToCelsius() {
    var celciusInput = document.getElementById("celcius").value;
    var fahrenheitOutput = (celciusInput * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheitOutput;
    document.getElementById("calculation").innerText = celciusInput + "°C * (9/5) + 32 = " + fahrenheitOutput + "°F";
}

function reset() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").innerText = "";
}

function reverse() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celciusOutput = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celcius").value = celciusOutput;
    document.getElementById("calculation").innerText = fahrenheitInput + "°F - 32 * (5/9) = " + celciusOutput + "°C";
}