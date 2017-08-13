'use strict'

var cash = {
    denom : [],
    bills: [0, 0, 0],
    addBills: function(bills) { //add bills to the ATM
        this.bills = bills;
    },
    amount_to_be_withdrawn: 0,
    setAmountToBeWithdrawn: function(amount){
        if (amount % this.denom[0] == 0){ // this.denom[0] always contains smallest denomination in atm => amount must be multiple of this
            this.amount_to_be_withdrawn = amount;
        }
        else{
                this.amount_to_be_withdrawn = 0;
                console.log("you must enter a multiple amount of " + this.denom[0] + " NIS");
        }
    }, 
    canDispense: function(amount) { //if ATM have enough to dispense the amount
        for (var i = this.denom.length - 1; i  >= 0; i--) {

            amount -= Math.min(amount/this.denom[i], this.bills[i]) * this.denom[i];
        }
        return amount == 0;
    },
    dispense: function(amount_requested) { // check if can dispense, if so call putout
        if(amount_requested == null){ // user pressed cancel - no point to continue
            console.log("withdrawal request cancelled");
            return;
        }
        console.log("amount requested: " + amount_requested);
        console.log("notes available in atm before withdrawal: " + this.get_atm_contents());  
        this.setAmountToBeWithdrawn(amount_requested);
        if(this.amount_to_be_withdrawn == 0) { return; }
        if(!this.canDispense(this.amount_to_be_withdrawn)){
            console.log("theres is NOT enough money in the ATM");
            return;
        }
        var bills_to_be_given = [];

        for (var i = this.denom.length - 1; i  >= 0; i--) {
            let number_of_bills = Math.floor(Math.min(this.amount_to_be_withdrawn/this.denom[i], this.bills[i]));
            for (let index = 0 ; index < number_of_bills; index++){
               bills_to_be_given.push(this.denom[i] + " nis ");
               this.amount_to_be_withdrawn -= this.denom[i];
               this.bills[i]--;
            }
        }
        
        this.putout(bills_to_be_given);
        this.cashBalance();
    },
    putout: function(bills_to_be_given) { //dispense the bills out 
      console.log("here are your notes: " + bills_to_be_given );  
    },
    cashBalance: function() { //how much money left in ATM
      console.log("notes available in atm after withdrawal: " + this.get_atm_contents());  
    },
    get_atm_contents: function(){
        var contents = '';   
        for (var i = 0; i  < this.denom.length; i++)  {
            contents += this.bills[i] + " x " + this.denom[i] + " nis, ";
        } 
        return contents;
    }
}

cash.denom = [50, 100, 200];
cash.addBills([4, 1, 3]);
cash.dispense(window.prompt("enter amount to be withdrawn", 200));







