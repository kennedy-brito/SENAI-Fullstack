describe("Teste Calculadora", function () {
  it("Somas válidas", () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(9, 9)).toBe(18);
  });

  it("Somas Inválidas", () => {
    expect(soma(1, 2)).not.toBe(5);
    expect(soma(9, 9)).not.toBe(15);
  });

  it("Subtrações válidas", () => {
    expect(subtracao(3, 2)).toBe(1);
    expect(subtracao(9, 9)).toBe(0);
  });

  it("multiplicações válidas", () => {
    expect(multiplicacao(1, 2)).toBe(2);
    expect(multiplicacao(9, 9)).toBe(81);
  });

  it("divisões válidas", () => {
    expect(divisao(2, 2)).toBe(1);
    expect(divisao(18, 9)).toBe(2);
  });
});
