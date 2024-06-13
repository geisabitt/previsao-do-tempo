export function createP(text, className){
    const P = document.createElement('p')
    P.className = className
    P.textContent = text
    return P
}

export function createImg(baseUrl, idImg){
    const img = document.createElement('img')
    img.src = `${baseUrl}/icons/${idImg}.png`
    return img
}
  
  export function displayCity(city, baseUrl, icon){
    const div = document.createElement('div');
    div.className = 'display-city';
    const createCity = createP(city)
    const createIcon = createImg(baseUrl, icon)
    div.appendChild(createCity)
    div.appendChild(createIcon)
  
    return div
}
  