
import { getWeatherForecast } from "../js/weather.js";

describe("getWeatherForecast", () => {
    test("obtém a previsão do tempo corretamente", async () => {
      const fetchSpy = jest.spyOn(window, 'fetch');
      fetchSpy.mockRejectedValue(new Error('Erro ao obter os dados da API'));
      
      await expect(getWeatherForecast()).rejects.toThrow('Erro ao obter os dados da API');
  
      fetchSpy.mockRestore();
    });
  });