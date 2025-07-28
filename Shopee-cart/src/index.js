import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!!!");

// cria 2 itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adiciona 2 itens do carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

//await cartService.removeItem(myCart, 1);

//exibe o carrinho
await cartService.displayCart(myCart);

// deleta 2 itens do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);