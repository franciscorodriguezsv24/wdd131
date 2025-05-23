// Static weather values (matching displayed values)
const temperature = 5; // °C
const windSpeed = 15; // km/h
const units = 'metric'; // 'metric' for Celsius/km/h, 'imperial' for Fahrenheit/mph

function calculateWindChill(temp, wind, unitSystem) {
    if (unitSystem === 'metric') {
        // Metric formula: Windchill (°C) = 13.12 + 0.6215×T - 11.37×V^0.16 + 0.3965×T×V^0.16
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    } else {
        // Imperial formula: Windchill (°F) = 35.74 + 0.6215×T - 35.75×V^0.16 + 0.4275×T×V^0.16
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    }
}

/**
 * Check if windchill calculation conditions are met
 * @param {number} temp - Temperature
 * @param {number} wind - Wind speed
 * @param {string} unitSystem - 'metric' or 'imperial'
 * @returns {boolean} - True if conditions are met
 */
function isWindChillViable(temp, wind, unitSystem) {
    if (unitSystem === 'metric') {
        return temp <= 10 && wind > 4.8;
    } else {
        return temp <= 50 && wind > 3;
    }
}

/**
 * Display windchill factor on page load
 */
function displayWindChill() {
    const windchillElement = document.getElementById('windchill');
    
    if (isWindChillViable(temperature, windSpeed, units)) {
        const windchill = calculateWindChill(temperature, windSpeed, units);
        const unitSymbol = units === 'metric' ? '°C' : '°F';
        windchillElement.textContent = `${Math.round(windchill * 10) / 10}${unitSymbol}`;
    } else {
        windchillElement.textContent = 'N/A';
    }
}

/**
 * Update footer with current year and last modified date
 */
function updateFooter() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Set last modified date
    const lastModified = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('lastModified').textContent = lastModified.toLocaleDateString('en-US', options);
}

// Execute when page loads
window.addEventListener('load', function() {
    displayWindChill();
    updateFooter();
});