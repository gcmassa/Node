//import connectToDatabase from "./utils/database.mjs"; // para importa a corretamento no ESM, deve informar o caminho e nome completo do arquivo que tema função podendo usar extensão .mjs
import * as database from "./utils/database.js";// importando todas as funções do módulo
import { disconnectDatabase, dataBaseType } from "./utils/database.js";
import {getDataFromApi} from "./utils/api.js" // importando função diretamente do módulo

getDataFromApi();

database.connectToDatabase("my-database");
database.disconnectDatabase();

console.log("\nUsando o recurso do destructuring");
disconnectDatabase();

console.log("hello ecma");
