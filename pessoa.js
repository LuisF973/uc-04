//COMO INICIAR

// class pessoa{

//     nome;
//     rg;
//     cpf;
//     idade;
//     sexo;
//     nacionalidade;
//     estadocivil;

//     exibirDados(){
//       console.log(`
         
//          dados pessoais:
//          nome: ${this.nome},
//          rg: ${this.rg},
//          cpf: ${this.cpf},
//          idade: ${this.idade},
//          sexo: ${this.sexo},
//          nacionalidade: ${this.nacionalidade},
//          estadocivil: ${this.estadocivil},
         
//          `)
//     }
//     constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadocivil){
//              this.nome = nome;
//              this.rg = rg;
//              this.cpf = cpf;
//              this.idade = idade;
//              this.sexo = sexo;
//              this.nacionalidade = nacionalidade;
//              this.estadocivil = estadocivil;
//    }
//    getNone(){
//     return this.nome;
//  }
//  getrg(){
//     return this.rg;     
//  }
//  getcpf(){
//    return this.cpf
//  }
//  getidade(){
//    return this.idade
//  }
//  getsexo(){
//    return this.sexo
//  }
//  getnacionalidade(){
//    return this.nacionalidade
//  }
//  getestadocivil(){
//    return this.estadocivil
//  }
 
//  setNome(nome){
//    this.nome = nome;
//  }
// }

// let pessoa01 = new pessoa("luis","03308877","702-994-094-99","20","masculino","Brasileiro","solteiro")
// console.table(pessoa01.getNone());
// pessoa01.setNome("luisFelipe");
// console.log(pessoa01.getNone());





class jogo {
   exibirJogo(){
      console.log(`
         
        titulo: ${this.titulo},
        gênero: ${this.gênero},
        anoLançamento: ${this.anoLançamento}
         
         
         `)
   }





constructor(titulo, gênero, anoLançamento){

   this.titulo = titulo;
   this.gênero = gênero;
   this.anoLançamento = anoLançamento;
}
getTitulo(){
   return this.titulo
}
gitgênero(){
   return this.gênero
}
gitanoLançamento(){
   return this.anoLançamento
}
setNome(titulo){
       this.titulo = titulo;
}
}


let jogo01 = new jogo("fifa 20","esport","19 de setembro de 2019")
let jogo02 = new jogo("minecreft","sobrevivência","17 de maio de 2009")
let jogo03 = new jogo("Counter-Strike: Global Offensive","fps","21 de agosto de 2012")
console.log(jogo01.getTitulo());
console.log(jogo02.getTitulo());
console.log(jogo03.getTitulo());