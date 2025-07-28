//Quais ações meu carrinho pode fazer

//Adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}

//Deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1){
        userCart.splice(index,1);
    }
}

//Remover um item - Diminui -1
async function removeItem(userCart, item) {
    // encontra o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    //console.log("Item encontrado no INDEX");
    //console.log(indexFound);

    // caso não encontre o tem
    if(indexFound == -1){
        console.log("item não encontrado");
        return;
    }

    // em caso do item for maior que 1 ou se tiver apenas 1 item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return;
    }

   /* // transforma o indice visual do FrontEnd em indice usual do BackEnd
    const deleteIndex = index - 1;

    //se é maior do que zero e se é menor o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }*/
}

//Cálcular o Total
async function calculateTotal(userCart) {
    console.log("\n🖥️ - Shopee Cart Total!!!");
    //const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    const result = userCart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(`\n💵 Total: ${result}`);
}

// Exibe conteúdo do carrinho
async function displayCart(userCart) {
    console.log("\nShopee Cart List:");
    userCart.forEach((item, index) => {
        //console.log(`${index + 1}. ${item.name} - R$ ${item.price} | x ${item.quantity} | Subtotal = ${item.subtotal()}`);
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | x ${item.quantity} | Subtotal = ${item.price*item.quantity}`);
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}