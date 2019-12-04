const { getCaster } = require('./types');

class Validator{
  constructor(field, config){
    this.field = field,
    this.type = config.type,
    this.required = config.required,
    this.cast = getCaster(this.type);
  }

  validateKey(object){
    const objKey = object[this.field];
    if(!objKey && this.required) throw `${this.field} is Required`;
    if(!this.required && !objKey) return null;

    return this.cast(objKey);
  }
}

module.exports = Validator;
