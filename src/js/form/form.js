class Form {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }

  checkValidFields() {
    const result = this.fields.map((field) => field.checkValidField());
    return !result.includes(false);
  }

  sendData() {
    const formData = new FormData(this.form);
    if (this.checkValidFields()) {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
}

export default Form;
