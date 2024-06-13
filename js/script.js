const container = document.querySelector('#weather-forecast')
const containerCity = document.querySelector('#display-city')

export const baseUrl = 'http://127.0.0.1:5500/'

export function createP(text){
  const P = document.createElement('p')
  P.textContent = text
  return P
}
export function createImg(urlImg){
  const img = document.createElement('img')
  img.src = `${baseUrl}/icons/${urlImg}.png`
  return img
}

export function displayCity(city, icon){
  const div = document.createElement('div');
  div.className = 'display-city';
  const createCity = createP(city)
  const createIcon = createImg(icon)
  div.appendChild(createCity)
  div.appendChild(createIcon)

  return div
}

export async function getWeatherForecast(){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rio%20de%20Janeiro?unitGroup=metric&key=48BKZ8B29EQYMEN525NBFEF7A&contentType=json")
    const data = await response.json()
    console.log(data)
    
    const renderCity = displayCity(data.resolvedAddress,data.currentConditions.icon)

    
    containerCity.appendChild(renderCity)
    
    const createDay = data.days.map(day =>{
      const div = document.createElement('div');
      div.className = 'day-container';
      const date = createP(day.datetime);
      const img = createImg(day.icon);
      const description = createP(day.description);
      const temp = createP(day.temp);

      div.appendChild(date)
      div.appendChild(img)
      div.appendChild(temp)
      div.appendChild(description)

      return div

    })

    createDay.forEach(dayDiv => container.appendChild(dayDiv));

    //  não funcionará diretamente porque createDay é um array de elementos <div>.
    //Você precisa iterar sobre esse array e adicionar cada <div> individualmente ao contêiner.
    // container.appendChild(createDay)
    }
  getWeatherForecast();