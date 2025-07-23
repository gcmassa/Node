const product = require("./services/products"); // importa o arquivo
const { getFullName, productType} = require("./services/products"); // importa algumas funções específicas do arquivo (destructuring)
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    
    console.log("Carrinho  compras!!!");

    getFullName("1", "teclado");

    product.getFullName("408", "mousepad");
    product.getFullName("508", "mouse");
    product.getProductLabel("mouse");
    //product.productType.version;
    database.connectToDataBase; // função padrão expotada
    console.log(config.devArea);
    console.log(config.client);
};

main();