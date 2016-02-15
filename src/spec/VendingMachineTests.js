describe("Vending Machine", function() {

  var vendingMachine;

  beforeEach(function() {
	 
    vendingMachine = new VendingMachine();
    var Product = {
    		COLA : {name : "Cola", cost : 1.00, quantity : 1},
    		  CHIPS : {name : "Chips", cost : 0.50, quantity : 2},
    		  CANDY : {name : "Candy", cost : 0.65, quantity : 0}
			}
    products = [Product.COLA, Product.CHIPS, Product.CANDY];
  });

  describe("Power Up", function() {
    it("Displays Insert Coin When Powered Up", function() {
      expect(vendingMachine.display).toEqual("INSERT COINS");
    });

 	  it("Display's Inventory when powered up", function(){
		  
		  expect(vendingMachine.products).toEqual(products);
	  });
	  
  });
  
  describe("Accept Coin", function() {
	    it("Quarter is input, show $0.25", function() {
	      vendingMachine.accept(AMOUNT.QUARTER);
	      expect(vendingMachine.display).toEqual("$0.25");
	    });
	    it("Dime is input, show $0.1", function() {
		      vendingMachine.accept(AMOUNT.DIME);
		      expect(vendingMachine.display).toEqual("$0.10");
		    });
	    it("Nickel is input, show $0.05", function() {
		      vendingMachine.accept(AMOUNT.NICKEL);
		      expect(vendingMachine.display).toEqual("$0.050");
		    });
	    it("Penny is input, reject and show INSERT COINS", function() {
		      vendingMachine.accept(AMOUNT.PENNY);
		      expect(vendingMachine.display).toEqual("INSERT COINS");
		    });
	    it("Accept coins, display sum", function() {
	       
	    	vendingMachine.accept(AMOUNT.NICKEL);
	    	vendingMachine.accept(AMOUNT.PENNY);
	       
	        expect(vendingMachine.display).toEqual("$0.050");
	        
	        vendingMachine.accept(AMOUNT.QUARTER);
	    	vendingMachine.accept(AMOUNT.QUARTER);
	       
	        expect(vendingMachine.display).toEqual("$0.55");
	        
	        vendingMachine.accept(AMOUNT.DIME);
	    	vendingMachine.accept(AMOUNT.DIME);
	       
	        expect(vendingMachine.display).toEqual("$0.75");
	        
	      });
	    
	    describe("Purchase Item", function() {
	        
	        it("User inputs exact price", function() {
	          vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.makeSelection(Item.CHIPS);
	          expect(vendingMachine.display).toBe("INSERT COINS");
	        });
	    	
	    	it("User inputs more than expected and see's the return amount", function() {
	          vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.accept(AMOUNT.QUARTER);
	    	  vendingMachine.accept(AMOUNT.QUARTER);
	    	  vendingMachine.accept(AMOUNT.QUARTER);
	    	  vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.makeSelection(Item.COLA);
	          expect(vendingMachine.display).toBe("$0.25");
	        });
	      });
	    
	    describe("Sold Out", function() {
	        
	        it("User tries to fetch CANDY", function() {
	          vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.accept(AMOUNT.QUARTER);
	          vendingMachine.makeSelection(Item.CANDY);
	          expect(vendingMachine.display).toBe("SOLD OUT");
	        });
	    	
	    });
	    
  });
  
  
});