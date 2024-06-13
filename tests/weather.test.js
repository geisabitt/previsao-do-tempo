import fetch from 'node-fetch';
import { getWeatherForecast, container, containerCity } from '../js/weather';

jest.mock('node-fetch');

describe('getWeatherForecast', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="weather-forecast"></div>
      <div id="display-city"></div>
    `;
  });

  it('deve obter a previsão do tempo corretamente', async () => {
    const mockData = {
      resolvedAddress: "Rio de Janeiro, RJ, Brasil",
      currentConditions: { icon: "clear-day" },
      days: [
        {
          datetime: "2024-06-13",
          icon: "clear-day",
          description: "Clear conditions throughout the day.",
          temp: 22.8
        }
      ]
    };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    });

    await getWeatherForecast();

    expect(containerCity.querySelector('.display-city')).not.toBeNull();
    expect(container.querySelector('.day-container')).not.toBeNull();

    expect(containerCity.querySelector('p').textContent).toBe(mockData.resolvedAddress);
    expect(containerCity.querySelector('img').src).toContain("clear-day.png");
    expect(container.querySelector('.day-container p').textContent).toBe(mockData.days[0].datetime);
    expect(container.querySelector('.day-container img').src).toContain("clear-day.png");
    expect(container.querySelector('.day-container p:nth-child(3)').textContent).toBe(String(mockData.days[0].temp));
    expect(container.querySelector('.day-container p:nth-child(4)').textContent).toBe(mockData.days[0].description);
  });

  it('deve lidar com erro ao obter os dados da API', async () => {
    fetch.mockImplementation(() => Promise.reject(new Error('Erro ao obter os dados da API')));

    await expect(getWeatherForecast()).rejects.toThrow('Erro ao obter os dados da API');
  });
});
