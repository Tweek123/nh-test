class Validator {
  constructor(validationFunc) {
    this.validationFunc = validationFunc;
  }

  checkValid(string) {
    return this.validationFunc(string);
  }
}

export default Validator;
