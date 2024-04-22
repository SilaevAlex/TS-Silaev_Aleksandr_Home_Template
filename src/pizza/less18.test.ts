import { Pizza, PizzaBuilder, PizzaSize, PizzaShape, PizzaIngredient  } from './less18';


describe('Pizza Class', () => {
  test('toString method should return correct string representation', () => {
    const toppings = [PizzaIngredient.thin, PizzaIngredient.mozzarella, PizzaIngredient.mushrooms];
    const pizza = new Pizza(PizzaSize.medium, PizzaShape.oval, toppings);
    const expectedString = `Розмір: ${PizzaSize.medium}, Форма: ${PizzaShape.oval}, Інгредієнти: ${toppings.join(', ')}`;
    expect(pizza.toString()).toEqual(expectedString);
  });
});

describe('PizzaBuilder Class', () => {
  test('build method should return a Pizza object with correct properties', () => {
    const expectedPizza = new Pizza(PizzaSize.medium, PizzaShape.oval, [
      PizzaIngredient.thin,
      PizzaIngredient.mozzarella,
      PizzaIngredient.mushrooms,
      PizzaIngredient.chicken,
      PizzaIngredient.onions
    ]);

    const pizzaBuilder = new PizzaBuilder();
    const pizza = pizzaBuilder
      .setSize(PizzaSize.medium)
      .setShape(PizzaShape.oval)
      .addTopping(PizzaIngredient.thin)
      .addTopping(PizzaIngredient.mozzarella)
      .addTopping(PizzaIngredient.mushrooms)
      .addTopping(PizzaIngredient.chicken)
      .addTopping(PizzaIngredient.onions)
      .build();

    expect(pizza).toEqual(expectedPizza);
  });
});