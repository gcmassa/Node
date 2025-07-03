const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1; //lançamendo dos dados de 6 lados
}

//async function main() { 
//    console.log("hello!");
 
//}

//main();

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            
    }
    return result;
}

async function weaponBattle() {
    let random = Math.random();
    let result;

    switch(true){
        case random < 0.33:
            result = "CASCO";
            break;
        default:
            result = "BOMBA";
    }
    return result;
    
}

async function LogRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
        diceResult + attribute
    }`);
    
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
        //sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)
   
         // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;

        if(block === "RETA"){
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;
            await LogRollResult(character1.NOME,"velocidade", diceResult1, character1.VELOCIDADE);
            await LogRollResult(character2.NOME,"velocidade", diceResult2, character2.VELOCIDADE);
        }

        if(block === "CURVA"){
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
            await LogRollResult(character1.NOME,"manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await LogRollResult(character2.NOME,"manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;  
            //TotalTestSkill1 = diceResult1 + character1.PODER;
            //TotalTestSkill2 = diceResult2 + character2.PODER;
            //await LogRollResult(character1.NOME,"confronto", diceResult1, character1.PODER);
            //await LogRollResult(character2.NOME,"confronto", diceResult2, character2.PODER);
            console.log(`${character1.NOME} confrontou com ${character2.NOME}!`);
            
            //sorteia a arma da batalha, se vai ser casco(-1 ponto) ou bomba(-2 pontos)
            let weapon = await weaponBattle();
            let damage = 0;
            let turbo = 1;
            console.log(`Arma sorteada para o combate ⚔️ ... ${weapon}`);

            
            if(weapon === "CASCO") damage = -1;
                else damage = -2;
         

            await LogRollResult(character1.NOME,"poder", diceResult1, character1.PODER);
            await LogRollResult(character2.NOME,"poder", diceResult2, character2.PODER);
            

            if (powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu ${damage} ponto 🐢`);
                character2.PONTOS - damage;
                
            }
            if (powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu ${damage} ponto 🐢`);
                character1.PONTOS - damage;
                
            }

            /*character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0; // condição if ternario
            character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0; // condição if ternario
            console.log(powerResult2 === powerResult1 ? "Confronto empatado! nehum pontoi foi perdido!" : ""); // condição if ternario*/
            //if(powerResult1 > powerResult2){
            //    if(character2 > 0){
            //        character2--;
            //    }

            //}
            //if(powerResult2 > powerResult1){
            //    if(character1 > 0){
            //        character1--;
            //    }
            //}  
            //if(powerResult1 === powerResult2){
            //    console.log("Confronto empatado! Nenhum ponto foi perdido!")
            //}  
        }
        // verificando o vencedor
        if(TotalTestSkill1 > TotalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        }else if(TotalTestSkill2 > TotalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }
        console.log("-------------------------------------------");
    }    
}

async function declareWinner(character1, character2) {
    console.log("Resultado FINAL!!!");
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns!! 🏆 `);
    }else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns!! 🏆 `);
    }else{
        console.log("A corrida terminou em empate");
    }
    
}

(async function main() { 
    console.log(`🏁🚨 CORRIDA! Entre ${player1.NOME} e ${player2.NOME} Começando... \n`);

    await playRaceEngine(player1,player2);
    await declareWinner(player1,player2);
})(); // representa uma função auto invocavel