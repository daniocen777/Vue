import { shallowMount } from "@vue/test-utils";

describe("Componente", () => {
  test("Descripción de la prueba (Mayor a 10)", () => {
    // Arrange => variables y constantes a usar
    let value = 15;
    // Act => Disparar eventos
    value = value + 2;
    // Assert => Observar el resultado
    /*  if (value > 10) {
      // OK
    } else {
      throw `${value} no es mayor a 10`;
    } */

    // Ver: https://jestjs.io/docs/25.x/expect
    expect(value).toBeGreaterThan(10);
  });
});

/* describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
}) */
