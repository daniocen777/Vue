import { shallowMount } from "@vue/test-utils";

import Indecision from "@/components/Indecision";

describe("Pruebas del componente Indecision", () => {
  let wrapper;
  let clgSpy; // pendiente de cualquier evento
  // Para las APIS, fetch (que retorna una promesa de tipo json que es un método en el vue)
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeAll(() => {
    wrapper = shallowMount(Indecision);
    // SPY => jest.spyOn([Object], "[Method]")
    clgSpy = jest.spyOn(console, "log");
    // Limpiar
    jest.clearAllMocks();
  });

  test("Match con l snapshot (template", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar un evento (console.log)", async () => {
    // wrapper.vm => Instancia de vue
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input"); // solo hay 1
    await input.setValue("Prueba del input");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test("Disparar evento fetch al escribir '?'", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input"); // solo hay 1
    await input.setValue("Prueba del input?");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("Pruebas en método getAnswer", async () => {
    await wrapper.vm.getAnswer(); // Llamar la función

    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("¡Sí!");
  });

  test("Pruebas en método getAnswer - Fallo de la API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API de baja (catch)")); // catch
    await wrapper.vm.getAnswer(); // Llamar la función
    const img = wrapper.find("img");

    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo cargar el API");
  });
});
