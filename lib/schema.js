const Validator = require('./validators');

class Schema{
  constructor(schemaDefinition){
    this.schema = schemaDefinition,
    this.validators = Object.entries(schemaDefinition)
      .map(([field, ...rest]) => new Validator(field, ...rest));
  }
  
  validate(object){
    const response = {};
    this.validators.forEach(item => {
      let key = item.field;
      Object.keys(object).forEach((property) => {
        if(key === property){
          response[key] = item.cast(object[key]);
        }
      });
    });
  
    return response;
  }
}

module.exports = Schema;
