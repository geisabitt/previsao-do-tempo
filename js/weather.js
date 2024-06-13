import { createP, createImg, displayCity } from "./createElements.js"
export const container = document.querySelector('#weather-forecast')
export const containerCity = document.querySelector('#display-city')

export const baseUrl = 'http://127.0.0.1:5500/'

export async function getWeatherForecast(){
  try {
      const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rio%20de%20Janeiro?unitGroup=metric&key=48BKZ8B29EQYMEN525NBFEF7A&contentType=json");
      if (!response.ok) {
          console.log('Erro ao obter os dados da API');
      }
      const data = await response.json();
      
      const renderCity = displayCity(data.resolvedAddress, baseUrl, data.currentConditions.icon);
      containerCity.appendChild(renderCity);

      
      
      const createDay = data.days.map(day =>{
          const div = document.createElement('div');
          const formatDay = day.datetime.split('-')[2];
          div.className = 'day-container';
          const date = createP(`Previsão para o dia ${formatDay}`,'date');
          const img = createImg(baseUrl, day.icon);
          const temp = createP(`${day.temp}°`,'temp');
          const description = createP(day.description,'description');
    
          div.appendChild(date)
          div.appendChild(img)
          div.appendChild(temp)
          div.appendChild(description)
    
          return div
      })
      return createDay.forEach(dayDiv => container.appendChild(dayDiv));
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
  getWeatherForecast();