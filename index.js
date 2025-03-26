class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Converte para minúsculo para facilitar a comparação
    }

    atacar() {
        // Define o ataque com base no tipo do herói
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibe a mensagem concatenando tipo e ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Testando a classe com diferentes heróis
const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Lee", 28, "monge");
const heroi4 = new Heroi("Hanzo", 32, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken