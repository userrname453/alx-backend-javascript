/* eslint-disable no-underscore-dangle */
class Currency {
  constructor(code, name) {
    this.code = code; // Calls the setter for code
    this.name = name; // Calls the setter for name
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

// Export the class
export default Currency;
