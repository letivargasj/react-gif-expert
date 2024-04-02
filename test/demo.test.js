describe("Pruebas en Componente", () => {
  test("Esta prueba es no debe fallar", () => {
    //1. INICIALIZACION
    const messsage1 = "Hola MUndo";

    //2. ESTIMULO
    const messsage2 = messsage1.trim();

    //3.OBSERVAR EL COMPORTAMIENTO ...ESPERADO
    expect(messsage1).toBe(messsage2);
  });
});
