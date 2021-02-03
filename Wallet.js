class Wallet {
    constructor(money) {
        let _money = money;
        //Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //Sprawdzanie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }

        //Zmienia zawarość portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Błąd");
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidłowa liczba");
            }
        }
    }
}

////////////////////////////////////////////////////

