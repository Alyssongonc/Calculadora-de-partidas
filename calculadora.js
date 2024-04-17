let total = partidas(100, 15 )

function partidas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    let nivel
    if(resultado <= 10){
        nivel = " vitorias, Você está no elo FERRO"
    }
    else if(resultado >= 11 && resultado <= 20){
        nivel = " vitorias, Você está no elo BRONZE"
    }
    else if(resultado >= 21 && resultado <= 50){
        nivel = " vitorias, Você está no elo PRATA"
    }
    else if(resultado >= 51 && resultado <= 80){
        nivel = " vitorias, Você está no elo OURO"
    }
    else if(resultado >= 81 && resultado <= 90){
        nivel = " vitorias, Você está no elo DIAMANTE"
    }
    else if(resultado >= 91){
        nivel = " vitorias, Você está no elo LENDARIO"
    }
    console.log("O Heroi  tem um saldo de " + resultado, nivel)
    
    return resultado, nivel
    
}