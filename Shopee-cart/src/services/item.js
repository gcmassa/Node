//Quais ações dos Itens

//criar item com valor do sub-total correto
async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;

