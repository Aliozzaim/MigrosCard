class MigrosBase {
  discountRate = 20;

  constructor(Firstname, LastName, card, products) {
    this.Firstname = Firstname;
    this.LastName - LastName;
    this.card = card;
    this.products = products;
  }
  calculate() {
    let priceToBePaid = 0;
    if (this.checkProducts(this.products)) {
      debugger;
      if (this.CheckCard) {
        this.products.forEach((product) => {
          priceToBePaid += (product.price * (100 - this.discountRate)) / 100;
        });
      } else {
        this.products.forEach((product) => {
          priceToBePaid += product.price;
        });
      }
    } else {
      alert("You did not receive any products...");
    }
    return priceToBePaid;
  }

  checkProducts(products) {
    if (products != null && products.length > 0) {
      return true;
    }
    return false;
  }
}
