export default class Car {
  horsePower = 100;
  constructor(color, brand, country = "Deutschland") {
    this.color = color;
    this.brand = brand;
    this.country = country;
  }

  printSpecification() {
    console.log(
      this.color +
        " - " +
        this.brand +
        " - " +
        this.horsePower +
        " - " +
        this.country
    );
  }
}

let c1 = new Car("red", " Ferrari", "italien");
let c2 = new Car("green", "VW");
c1.printSpecification();
c2.printSpecification();
