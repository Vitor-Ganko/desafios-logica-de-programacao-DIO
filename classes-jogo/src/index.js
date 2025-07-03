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

function randomizeHeroStatus(heroName) {
    let classesAvailable = ["Guerreiro", "Mago", "Monge", "Ninja"]
    
    let heroAge = Math.floor(Math.random() * 100)
    let heroClass = classesAvailable[Math.floor(Math.random() * classesAvailable.length)]

    let heroStatus = [heroName, heroAge, heroClass]
    return heroStatus
}

let newHeroInformation = randomizeHeroStatus("Ganksmann")
let hero1 = new Hero(newHeroInformation[0], newHeroInformation[1], newHeroInformation[2])

hero1.Attack()