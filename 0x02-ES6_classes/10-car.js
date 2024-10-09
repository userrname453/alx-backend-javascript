export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Constructor = Symbol.for(this.constructor.name);
    return new (this[Constructor] || this.constructor)();
  }

  [Symbol.for('Car')]() {
    return this.constructor;
  }
}
