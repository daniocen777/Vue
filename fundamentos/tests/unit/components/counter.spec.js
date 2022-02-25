import { shallowMount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Counter); // Instancia del componente
  });

  /*  */
  test("Establece valor por defecto", () => {
    // Leer props
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  /* 1° Prueba */
  /* test("Debe ser match con el snapshot (template)", () => {
    const wrapper = shallowMount(Counter); // Instancia del componente
    // Para actualizar el snapshot, ejecutar: npm run test:unit -u
    expect(wrapper.html()).toMatchSnapshot();
  }); */
  /* 2° Prueba => <h2> */
  test("h2 debe de tener valor por defecto 'Contador'", () => {
    const h2 = wrapper.find("h2"); // Encontrr el primer h2
    expect(h2.text()).toBe("Contador");
  });

  /* 3° Prueba*/
  test("El valor por defecto debe ser 15 en <p>", () => {
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe("15");
  });
  /* 4° Prueba*/
  test("Debe incrementar y decrementar el valor del contador", async () => {
    const [increaseButton, decreaseButton] = wrapper.findAll("button");
    // Evaluar un evento click (referencia al botón)
    await increaseButton.trigger("click"); // simulando un click
    await increaseButton.trigger("click"); // simulando un click
    await increaseButton.trigger("click"); // simulando un click
    await decreaseButton.trigger("click"); // simulando un click
    await decreaseButton.trigger("click"); // simulando un click

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("16");
  });

  /* Enviar props */
  test("Muestra la prop 'title'", () => {
    const title = "Título de prueba";
    const wraper = shallowMount(Counter, {
      props: {
        title: title,
      },
    });

    expect(wraper.find("h2").text()).toBe(title);
  });
});
