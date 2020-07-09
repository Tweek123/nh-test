class FormField {
  constructor(field, validators) {
    this.field = field;
    this.validators = validators;
  }

  checkValidField() {
    if (this.validators.length) {
      const result = this.validators.map((validator) => validator.checkValid(this.field.value));
      return !result.includes(false);
    }
    return true;
  }
}

export default FormField;
