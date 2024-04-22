export enum PizzaSize {
  small = 'Мала',
  medium = 'Середня',
  large = 'Велика'
}

export enum PizzaShape {
  round = 'Кругла',
  square = 'Квадратна',
  oval = 'Овальна'
}

export enum PizzaIngredient {
  thin = 'Тісто тонке',
  lush = 'Тісто пишне',
  mozzarella = 'Моцарела',
  cheddar = 'Чеддер',
  mushrooms = 'Гриби',
  chicken = 'Курка',
  tomatoes = 'Помідори',
  onions = 'Цибуля'
}

export class Pizza {
  private size: string;
  private shape: string;
  private toppings: string[];

  constructor(size: string, shape: string, toppings: string[]) {
      this.size = size;
      this.shape = shape;
      this.toppings = toppings;
  }

  public toString(): string {
      const sizeString = `Розмір: ${this.size}`;
      const shapeString = `Форма: ${this.shape}`;
      const toppingsString = `Інгредієнти: ${this.toppings.join(', ')}`;
      return `${sizeString}, ${shapeString}, ${toppingsString}`;
  }
}

export class PizzaBuilder {
  private size: PizzaSize = PizzaSize.small;
  private shape: PizzaShape = PizzaShape.round;
  private toppings: PizzaIngredient[] = [];

  setSize(size: PizzaSize): this {
      this.size = size;
      return this;
  }

  setShape(shape: PizzaShape): this {
      this.shape = shape;
      return this;
  }

  addTopping(ingredient: PizzaIngredient): this {
      this.toppings.push(ingredient);
      return this;
  }

  build(): Pizza {
      return new Pizza(this.size, this.shape, this.toppings);
  }
}


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

console.log(pizza.toString());