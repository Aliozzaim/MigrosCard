let massage = `
welcome to Migros 
Do You Have a MigrosMoney Card?
1-YES  2-NO

`;

const products = [
  {
    productName: "Milk",
    price: 10,
  },
  {
    productName: "chocolate",
    price: 8,
  },
  {
    productName: "Water",
    price: 5,
  },
  {
    productName: "diaper",
    price: 30,
  },
];
let result = confirm(massage);
let priceToBePaid;

if (result) {
  let Firstname = prompt("Please Enter Your name..");
  let LastName = prompt("Please Enter Your last name..");

  const client = new Musteri(Firstname, LastName, result, products);
  priceToBePaid = client.calculate();

  alert(`Client data : ${Firstname} ${LastName}
  price To Be Paid : ${priceToBePaid}
  `);
} else {
  const client = new Musteri(null, null, result, products);
  priceToBePaid = client.hesapla();
  alert(`price To Be Paid :  ${priceToBePaid}`);
}
