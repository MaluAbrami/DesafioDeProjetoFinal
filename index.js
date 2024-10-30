class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar(heroType){
        let attack;

        switch(heroType){ //Vai definir qual será o ataque efetuado, de acordo com o tipo de herói
            case "mago":{
                attack = "magia";
                break;
            }
            case "guerreiro":{
                attack = "espada";
                break;
            }
            case "monge":{
                attack = "artes marciais";
                break;
            }
            case "ninja":{
                attack = "shuriken";
                break;
            }
            default:{
                console.log("Erro: não existe esse tipo de herói para selecionar");
                return;
            }
        }

        console.log(`${this.name} é do tipo ${this.type} e atacou usando ${attack}`);
    }
}

function obterTipoHeroi(){
    let dado;
    let type;

    do{
        dado = Math.floor(Math.random() * 6) + 1; //Simulo um dado de 6 lados para sortear o tipo do herói

        switch(dado){
            case 1:{ //Se cair o número 1, então o tipo do herói será mago
                type = "mago";
                break;
            }
            case 2:{ //Se cair o número 2, então o tipo do herói será guerreiro
                type = "guerreiro";
                break;
            }
            case 3:{ //Se cair o número 3, então o tipo do herói será monge
                type = "monge";
                break;
            }
            case 4:{ //Se cair o número 4, então o tipo do herói será ninja
                type = "ninja";
                break;
            }
        }
    } while(dado >= 5); //Continua enquanto cair 5 ou 6 no dado

    return type; //Retornamos o tipo que foi definido para o herói
}

function main(){
    let type = obterTipoHeroi();
    let hero = new Hero("Hinata", 19, type);
    hero.atacar(type);

    type = obterTipoHeroi();
    hero = new Hero("Astrid", 20, type);
    hero.atacar(type);

    type = obterTipoHeroi();
    hero = new Hero("Naruto", 18, type);
    hero.atacar(type);

    type = obterTipoHeroi();
    hero = new Hero("Reyna", 25, type);
    hero.atacar(type);
}

main();