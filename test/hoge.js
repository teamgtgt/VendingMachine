const assert = require("assert");
const VendingMachine = require("../src/VendingMachine.js").VendingMachine;
const Coin = require("../src/VendingMachine.js").Coin;
describe("hage", function() {
	it("VendingMachineをnewできる", function() {
		assert(VendingMachine)
	});
	it("10yen玉を１枚投入できる", function() {
		var vm = new VendingMachine();
		assert.equal(10,vm.insert(Coin.ten))
	});

	it("コインを全種類投入できる", function() {
		var vm = new VendingMachine();
		assert.equal(10,vm.insert(Coin.ten))
		assert.equal(50,vm.insert(Coin.fifty))
		assert.equal(100,vm.insert(Coin.oneHundred))
		assert.equal(500,vm.insert(Coin.fiveHundred))
		assert.equal(1000,vm.insert(Coin.oneThousand))
	});
	it("合計金額を取得できる", function() {
		var vm = new VendingMachine();
		vm.insert(Coin.ten)
		vm.insert(Coin.fifty)
		vm.insert(Coin.oneHundred)
		vm.insert(Coin.fiveHundred)
		vm.insert(Coin.oneThousand)
		assert.equal(1660, vm.getTotal())
	})
	it("払い戻しができる", function() {
		var vm = new VendingMachine();
		vm.insert(Coin.ten)
		vm.insert(Coin.fifty)

		assert.deepEqual([Coin.ten, Coin.fifty], vm.refund());
	});
	it("払い戻したら総額が0円になる", function() {
		var vm = new VendingMachine();
		vm.insert(Coin.ten)
		vm.insert(Coin.fifty)
		vm.refund();
		assert.equal(0, vm.getTotal());
	});
});
