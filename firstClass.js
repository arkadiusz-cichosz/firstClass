function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.owner = 'field is empty';
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and price: ' + this.price +'.');
}

Phone.prototype.setOwner = function(owner) {
	this.owner = owner;
	console.log('Add new owner of ' + this.brand + '. Hes name is: ' + this.owner);
}

Phone.prototype.getOwner = function() {
	console.log('The owner of ' + this.brand + ': '+ this.owner + '.');
}

const SamsungGlxS6 = new Phone('Samsung', 78, 'white'), iPhone6s = new Phone('iPhone', 200, 'black'), OnePlusOne = new Phone('OnePlus', 150, 'yellow');

SamsungGlxS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();
iPhone6s.setOwner('Arkadiusz Cichosz');
iPhone6s.getOwner();
