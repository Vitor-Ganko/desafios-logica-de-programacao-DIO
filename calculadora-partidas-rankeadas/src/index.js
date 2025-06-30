let heroWinLosses = [0, 0]

heroWinLosses[0] = Math.trunc((150 * Math.random()))
heroWinLosses[1] = Math.trunc((150 * Math.random()))

function CalculatingBalance(wins, losses)
{
    let result = wins - losses
    return result
}

function DeterminingHeroRank()
{
    let balance = CalculatingBalance(heroWinLosses[0], heroWinLosses[1])

    let rank = null

    if (balance <= 10) rank = "Ferro"
    else if (balance > 10 && balance <= 20) rank = "Bronze"
    else if (balance > 21 && balance <= 50) rank = "Prata"
    else if (balance > 51 && balance <= 80) rank = "Ouro"
    else if (balance > 81 && balance <= 90) rank = "Diamante"
    else if (balance > 91 && balance <= 100) rank = "Lendário"
    else if (balance > 100) rank = "Imortal"


    if(balance >= 0)
        console.log(`O Herói tem de saldo de ${balance} vitórias, estando no nível de "${rank}"`)
    else
        console.log(`O Herói tem de saldo de ${Math.abs(balance)} derrotas, estando no nível de "${rank}"`)
}

DeterminingHeroRank()