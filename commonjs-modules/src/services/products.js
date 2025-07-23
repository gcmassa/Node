// todas as funções que lidam com o produto

const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullName(codeId, productName) {
    //console.log("\n");
    console.log("product: " + codeId + "--" + productName);
    await doBreakLine();
    //return codeId + "--" + productName;
};

//hidden const
const apiURL = {
    url: "www.google.com/api",
};

//hidden function
async function doBreakLine() {
    console.log("\n");    
};

async function getProductLabel(productName) {
    console.log("Product " + productName);
    
};

// torna o arquivo exportável
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};