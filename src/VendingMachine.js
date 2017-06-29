function VendingMachine() {
	this.coinBuffer = [];
}
VendingMachine.prototype.insert = function(value) {
	this.coinBuffer.push(value);
	return value
}
VendingMachine.prototype.getTotal = function() {
	var total = 0;
    for (var i in this.coinBuffer) {
		total += this.coinBuffer[i];
	}
	return total;
}
VendingMachine.prototype.refund = function() {
	var result = this.coinBuffer;
	this.coinBuffer = [];
	return result;
}
module.exports.VendingMachine = VendingMachine;

var Coin = {
	'ten':10,
	'fifty':50,
	'oneHundred':100,
	'fiveHundred':500,	
	'oneThousand':1000	
}; 		
module.exports.Coin = Coin
