
import { createP } from "../js/createElements.js";

  describe("createP", () => {
    test("cria um elemento <p> com o texto fornecido", () => {
      const text = "Teste de parágrafo";
      const p = createP(text);
      expect(p.tagName).toBe("P"); // Verifica se o elemento é um <p>
      expect(p.textContent).toBe(text); // Verifica se o texto do elemento é o texto fornecido
    });
  });
  