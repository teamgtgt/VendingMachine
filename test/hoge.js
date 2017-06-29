const assert = require("assert");
const VendingMachine = require("../src/VendingMachine.js");
describe("hage", function() {
	it("VendingMachineをnewできる", function() {
		assert(VendingMachine)
	});
	it("10yen玉を１枚投入できる", function() {
		var vm = new VendingMachine();
		var Coin = {
			'ten':10	
		} ; 		
		assert.equal(10,vm.insert(Coin.ten))
	});
});
