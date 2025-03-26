class Hero{

    constructor(nome, idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar (tipoAtaque) {
        if (this.tipo === "Mago"){
            tipoAtaque = "Magia";
        } else if (this.tipo === "Guerreiro"){
            tipoAtaque = "Espada";
        } else if (this.tipo === "Monge"){
            tipoAtaque = "Artes Marciais";
        } else if (this.tipo === "Ninja"){
            tipoAtaque = "Shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}

let mago = new Hero("Gandalf", 100, "Mago");
mago.atacar();

let guerreiro = new Hero("Conan", 40, "Guerreiro");
guerreiro.atacar();

let monge = new Hero("Bruce Lee", 33, "Monge");
monge.atacar();

let ninja = new Hero("Hattori Hanzo", 50, "Ninja");
ninja.atacar();
