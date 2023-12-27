function rankeamento(vitorias, derrotas){
  let rank =  vitorias - derrotas;
  return rank
}

let   rankAtualizado = rankeamento(40, 15);

function nivelDeRank(){
  if(rankAtualizado < 10){
    return('ferro');
  }else if (rankAtualizado >= 11 && rankAtualizado <= 20){
    return('bronze');
  } else if (rankAtualizado >= 21 && rankAtualizado <= 50){
    return ('prata');
  } else if (rankAtualizado >= 51 && rankAtualizado <= 80){
    return ('Ouro');
  } else if (rankAtualizado >= 81 && rankAtualizado <= 90){
    return ('Diamante');
  } else if (rankAtualizado >= 91 && rankAtualizado <= 100){
    return ('Lendário');
  }else{
    return('Imortal')
  }
}

let nivel = nivelDeRank(rankAtualizado);
console.log("O herói tem saldo de " + rankAtualizado + " está no nível de " + nivel + ".")