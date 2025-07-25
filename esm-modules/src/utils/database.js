// exportação através de objeto
const dataBaseType = {
    userType: "admin",
    typeData: "datalocal",
}
//exportando um constante

async function  connectToDatabase(dataName) {
    //lógica de conexão
    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectDatabase() {
    console.log("desconectando do banco de dados");
}

//module.exports =  connectToDatabase;

export {
    connectToDatabase,
    disconnectDatabase,
    dataBaseType
};// exportando todas as funções do Módulo