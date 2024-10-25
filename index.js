class hero{
    constructor(name, age, type, attack){
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;
    }

    atacar(){
        console.log(`O ${this.type} atacou usando ${this.attack}`);
    }
}

function typeOfAttack(heroType){
    let attack;

    switch(heroType){
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
            break;
        }
    }
    
    return attack;
}

function main(){
    hero1 = new hero("Hinata", 19, "ninja", typeOfAttack("ninja"));
    hero2 = new hero("Astrid", 20, "guerreiro", typeOfAttack("guerreiro"));

    hero1.atacar();
    hero2.atacar();
}

main();