var AMOUNT = {
  QUARTER : {name : "Quarter", value : 0.25},
  DIME : {name : "Dime", value : 0.10},
  NICKEL : {name : "Nickel", value : 0.05},
  PENNY : {name : "Penny", value : 0.01}
}

var Item = {
  COLA : {name : "Cola", cost : 1.00, quantity : 1},
  CHIPS : {name : "Chips", cost : 0.50, quantity : 2},
  CANDY : {name : "Candy", cost : 0.65, quantity : 0}
}



function VendingMachine() {
  this.display = 'INSERT COINS';
  this.inputCoins = [AMOUNT.QUARTER, AMOUNT.DIME, AMOUNT.NICKEL];
  this.coinReject = [];
  this.coinsAdded = [];
  this.amountInserted = 0;
  
  this.currency = '$';
  this.cashArray = this.inputCoins.map(function(coin) {
    return {value : coin, count : 0};
  });
  
  this.products = [Item.COLA, Item.CHIPS, Item.CANDY];
  this.inventory = this.products.map(function() {
    return 0;
  });
  
  this.accept = function(cInput) {
	    var coinIndex = this.inputCoins.indexOf(cInput)
	    if (coinIndex > -1) {
	      this.coinsAdded.push(cInput);
	      this.cashArray[coinIndex].count++;
	    } else {
	      this.coinReject.push(cInput);
	    }

	    this.update();
	  }; 
	  
	  this.update = function() {
		    this.updateSum();
		    if (this.value > 0) {
		      this.display = this.currency + this.value.toPrecision(2);
		    } else {
		      this.display = 'INSERT COINS';
		    }
		  };
		  
		  this.updateSum = function() {
			    var sum = 0;
			    for (var i = 0; i < this.coinsAdded.length; i++) {
			      sum = sum + this.coinsAdded[i].value;
			    }

			    this.value = sum;

			  };
			  
			  this.makeSelection = function(prod) {
				    var sel = this.products.indexOf(prod);
				    if (sel > -1) {
				    	if(prod.name == 'Candy'){
				    		this.checkQuantity(prod);	
				    	}else{
				    		this.returnAmount(prod);
				    		
				    	}
				    }
				  }
			  
			  this.returnAmount = function(item) {
				    this.amountInserted = this.value-item.cost ;
				    
				    if(this.amountInserted == item.cost){
				    	this.coinsAdded = [];
				    	
				    }else if(this.amountInserted == 0){
				    	this.display = 'INSERT COINS';
				    }else{
				    	
				    	this.display = this.currency+this.amountInserted;
				    	this.coinsAdded = [];
				    }
				  
				  };
				  
		      this.checkQuantity = function(item){
		    	  var number = 0;
		    	  if(item.quantity == number ){
		    		  this.display = "SOLD OUT"
		    	}
		      }		  
  
}