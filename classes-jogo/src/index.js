class Hero {
    constructor(name, age, className) {
        this.name = name
        this.age = age
        this.className = className
    }

    Attack() {
        switch (this.className) {
            case "Guerreiro":
                console.log(`O ${this.className} atacou usando espada!`)
                break

            case "Mago":
                console.log(`O ${this.className} atacou usando magia!`)
                break
            
            case "Monge":
                console.log(`O ${this.className} atacou usando artes marciais!`)
                break

            case "Ninja":
                console.log(`O ${this.className} atacou usando shuriken!`)
                break

            default:
                console.log(`O ${this.className} atacou usando sua arma de classe!`)
        }
    }
}

let hero1 = new Hero("Ganksmann", 30, "Guerreiro")
let hero2 = new Hero("Rowart", 50, "Mago")

hero1.Attack()
hero2.Attack()