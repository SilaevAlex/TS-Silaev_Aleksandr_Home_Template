type PizzaSize = 'мала' | 'середня' | 'велика';
type PizzaShape = 'кругла' | 'квадратна' | 'овальна';
type PizzaTopping = 'сир' | 'шинка' | 'ананаси' | 'гриби' | 'оливки';

class Pizza {
  private size: PizzaSize;
  private shape: PizzaShape;
  private toppings: PizzaTopping[];

  constructor(size: PizzaSize, shape: PizzaShape, toppings: PizzaTopping[]) {
    this.size = size;
    this.shape = shape;
    this.toppings = toppings;
  }

  toString(): string {
    return `Піца розміру ${this.size}, форми ${this.shape}, з начинками: ${this.toppings.join(', ')}.`;
  }
}

const myPizza = new Pizza('велика', 'кругла', ['сир', 'шинка', 'гриби']);

console.log(myPizza.toString());