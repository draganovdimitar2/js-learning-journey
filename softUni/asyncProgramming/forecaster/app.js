// Write a program that requests a weather report from a server and displays it to the user.
// Use the skeleton from the provided resources.
// When the user writes the name of a location and clicks “Get Weather”, make a GET request to the server at address http://localhost:3030/jsonstore/forecaster/locations. The response will be an array of objects, with the following structure:
// { 
//   name: locationName,
//   code: locationCode
// }
// Find the object, corresponding to the name that the user submitted in the input field with ID "location" and use its code value to make two more GET requests:
// •	For current conditions, make a request to:
// http://localhost:3030/jsonstore/forecaster/today/:code
// The response from the server will be an object with the following structure:
// { 
//   name: locationName,
//   forecast: { low: temp,
//               high: temp,
//               condition: condition } 
// }
// •	For a 3-day forecast, make a request to: 
// http://localhost:3030/jsonstore/forecaster/upcoming/:code

// The response from the server will be an object with the following structure:

// { 
//   name: locationName,
//   forecast: [{ low: temp,
//                high: temp,
//                condition: condition }, … ] 
// }
// Use the information from these two objects to compose a forecast in HTML and insert it inside the page. Note that the <div> with ID "forecast" must be set to visible. See the examples for details. 

// If an error occurs (the server doesn’t respond or the location name cannot be found) or the data is not in the correct format, display "Error" in the forecast section.
// Use the following codes for weather symbols:
// •	Sunny			&#x2600; // ☀
// •	Partly sunny	             &#x26C5; // ⛅
// •	Overcast		&#x2601; // ☁
// •	Rain			&#x2614; // ☂
// •	Degrees		&#176;   // °



function attachEvents() {
    const buttonEl = document.querySelector('#submit');
    const inputEl = document.querySelector('#location');
    const forecastDivEl = document.querySelector('#forecast');
    const currentDivEl = document.querySelector('#current');
    const upcomingDivEl = document.querySelector('#upcoming');

    const conditionsSymbols = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601", 
        "Rain":	"&#x2614", 
        "Degrees": "&#176"
    }

    buttonEl.addEventListener('click', handleRequest)


    function handleRequest(e) {
        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then(data => {
                forecastDivEl.style.display = 'block'
                const weatherObjEntries = Object.entries(data);
                weatherObjEntries.forEach(obj => {
                    const inputText = inputEl.value.trim();
                    const currentObj = obj[1];
                    const name = currentObj.name;
                    const code = currentObj.code;

                    if(name == inputText) {
                        fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                            .then(res => res.json())
                            .then(data => {
                                const currentConditions = data;
                                const fullName = currentConditions.name;
                                const condition = currentConditions.forecast.condition;
                                const highesTemp = currentConditions.forecast.high;
                                const lowestTemp = currentConditions.forecast.low;

                                const newForecastDivEl = document.createElement('div');
                                newForecastDivEl.classList.add('forecasts');
                                currentDivEl.appendChild(newForecastDivEl);
                                const newSpanEl = document.createElement('span');
                                newSpanEl.classList.add('condition', 'symbol');
                                newSpanEl.innerHTML = conditionsSymbols[condition];
                                newForecastDivEl.appendChild(newSpanEl);

                                const newSpanConditionEl = document.createElement('span');
                                newSpanConditionEl.classList.add('condition');
                                newForecastDivEl.appendChild(newSpanConditionEl);

                                const spanNameEl = document.createElement('span');
                                spanNameEl.classList.add('forecast-data');
                                spanNameEl.textContent = fullName;

                                const spanTempEl = document.createElement('span');
                                spanTempEl.classList.add('forecast-data');
                                spanTempEl.textContent = `${lowestTemp}°/${highesTemp}°`;

                                const spanConditionEl = document.createElement('span');
                                spanConditionEl.classList.add('forecast-data');
                                spanConditionEl.textContent = condition;

                                newSpanConditionEl.appendChild(spanNameEl);
                                newSpanConditionEl.appendChild(spanTempEl);
                                newSpanConditionEl.appendChild(spanConditionEl);
                            });

                        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                            .then(res => res.json())
                            .then(data => {

                                const forecastInfoDivEl = document.createElement('div');
                                forecastInfoDivEl.classList.add('forecast-info');
                                upcomingDivEl.appendChild(forecastInfoDivEl);

                                const upcomingConditions = data;
                                for (const {condition, high, low} of upcomingConditions.forecast) {
                                    const upcomingSpanEl = document.createElement('span');
                                    upcomingSpanEl.classList.add('upcoming');
                                    
                                    const symbolSpanEl = document.createElement('span');
                                    symbolSpanEl.classList.add('symbol');
                                    symbolSpanEl.innerHTML = conditionsSymbols[condition];

                                    const degreesSpanEl = document.createElement('span');
                                    degreesSpanEl.classList.add('forecast-data');
                                    degreesSpanEl.innerHTML = `${low}°/${high}°`;

                                    const conditionSpanEl = document.createElement('span');
                                    conditionSpanEl.classList.add('forecast-data');
                                    conditionSpanEl.textContent = condition;

                                    upcomingSpanEl.appendChild(symbolSpanEl);
                                    upcomingSpanEl.appendChild(degreesSpanEl);
                                    upcomingSpanEl.appendChild(conditionSpanEl);

                                    forecastInfoDivEl.appendChild(upcomingSpanEl);
                                    upcomingDivEl.appendChild(forecastInfoDivEl);

                                }
                            });
                    };
                });
            })
            .catch(() => {
                forecastDivEl.style.display = 'block';
                forecastDivEl.textContent = 'Error';
        });
    };
};

attachEvents();