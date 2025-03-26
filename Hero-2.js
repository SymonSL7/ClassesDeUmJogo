class Hero{

    constructor(nome, idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar () {
        const ataques = {
            "Mago": "Magia",
            "Guerreiro": "Espada",
            "Monge": "Artes Marciais",
            "Ninja": "Shuriken"
        };

        let tipoAtaque = ataques[this.tipo];
        console.log(`O ${this.nome} da classe ${this.tipo} atacou usando ${tipoAtaque}`)

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
