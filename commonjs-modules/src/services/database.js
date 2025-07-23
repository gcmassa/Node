//export default, por padrão as funções são exportaveis

//para que possa executar a função de modo assincrono o termo async tem que ser colocado como na sentença abaixo para funções default
exports.connectToDataBase = async (dataName) => {
    console.log("se conectando ao banco: "+ dataName);
};

exports.disconnectDataBase = async () => {
    console.log("desconectando!!!");
};