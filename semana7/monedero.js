function Monedero(owner, firstDeposit){
    let balance = firstDeposit;
    this.owner = owner;
    this.balance = firstDeposit;
    this.beneficiary = '';
    Object.defineProperty(this,'balance',{
        get: function(){
            return balance;
        }
    }),
    Object.defineProperty(this,'beneficiary',{
        get:function(){ //get te retorna el valor del atributo
            return this.beneficiary;
        },
        set : function(value){ //el set de propiedades te cambia el valor del atributo
            this.beneficiary = value;
        }
    })
    this.deposit = function(amount){
        this.balance += amount;
    };
    this.printBalance = function(){
        console.log('El saldo de la cuenta es ' + account.balance);
    };
    this.withdraw = function(amount){
        if(this.balance <= 0 || amount > this.balance){
            console.log("No tiene fondos. No puede hacer el retiro");
        }else{
            this.balance -= amount;
        }
    }
}

let account = new Monedero('Pablo', 10000);
account.balance = account.balance + 10000;
account.printBalance();
