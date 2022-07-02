const cart = {
  products: [],
  add(product) {
    this.products.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice(i, 1);
        return;
      }
    }
  },
  clear() {
    this.products = [];
  },
  getAll() {
    return this.products;
  },
  getTotalPrice() {
    let total = 0;
    for (const product of this.products) {
      total += product.price * product.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.quantity -= 1;
      }
    }
  },
  changePrice(productName, newPrice) {
    for (const product of this.products) {
      if (product.name === productName) {
        product.price = newPrice;
      }
    }
  },
  getProductNames() {
    const names = [];
    for (const product of this.products) {
      names.push(product.name);
    }
    return names;
  },
  generateRandomPhrase() {
    const phrases = [
      "Сьогодні вам пощастить з грошима",
      "Вас буде переслідувати удача",
      "Сьогодні вам прийде погана новина",
      "Вас чекає подарунок від близької людини",
      "Сьогодні будуть складнощі на роботі",
    ];
    const randomIndex = Math.round(Math.random() * (phrases.length - 1));
    return phrases[randomIndex];
  },
  order() {
    let message = "";
    let products = "";
    const divider = "---------\n";

    for (const product of this.products) {
      const { name, price, quantity } = product;
      products += `${name} ${quantity} x ${price} грн. = ${
        price * quantity
      } грн.\n${divider}`;
    }
    message += divider;
    message += "Чек\n";
    message += products;
    message += `Сума = ${this.getTotalPrice()} грн.\n`;
    message += divider;
    message += "Дякуємо за покупку!\n";
    message += divider;
    message += this.generateRandomPhrase();
    console.log(message);
    // console.log(
    //   `---------\nЧек${products}\nСума = ${this.getTotalPrice()}\n---------\nДякуємо за покупку!\n---------\n${this.generateRandomPhrase()}`
    // );
  },
};

// const apple = {
//   name: 'Яблуко',
//   price: 9.99,
//   quantity: 3,
// };

// const orange = {
//   name: 'Апельсин',
//   price: 12,
//   quantity: 1,
// };

// cart.add(apple);
// cart.changePrice('Яблуко', 15);
// cart.add(orange);
// console.table(cart.getAll());
// console.log(cart.getProductNames());
// cart.order();

const apple = {
  name: "Яблуко",
  price: 9.99,
  quantity: 3,
  totalPrice: 12,
};

const orange = {
  name: "Апельсин",
  price: 12,
  quantity: 1,
};

const combinedProduct = {
  ...apple,
  ...orange,
};

console.log(combinedProduct);

// const productName = apple.name;
// const totalPrice = apple.totalPrice;
// const { name, ...otherValues } = apple;
// console.log(name);
// console.log(otherValues);

// const products = ['Апельсин', 'Яблуко'];

// const [product1, product2, product3] = products;
// console.log(product3);
