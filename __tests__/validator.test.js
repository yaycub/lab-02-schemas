const Validator = require('../lib/validators');

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const ageValidator = new Validator('age', {
  type: Number,
  required: true
});

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const noReqNoField = new Validator('', {
  type: String,
});

const reqFieldNoType = new Validator('name', {
  type: Number,
  required: true
});

const noFieldNotRequired = new Validator('', {
  type: Number,
  required: false
});

const fieldNotReqWrongType = new Validator('name', {
  type: Number,
  required: false
});
  
const fieldNotReqCorrectType = new Validator('name', {
  type: String,
  required: false
});

describe('Validator Module', () => {
  it('can properly validate an object based on key', () => {
    expect(nameValidator.validateKey(dog)).toEqual('spot');
    expect(ageValidator.validateKey(dog)).toEqual(5);
    expect(() => colorValidator.validateKey(dog)).toThrowError('color is Required');
    expect(noReqNoField.validateKey(dog)).toEqual(null);
    expect(() => reqFieldNoType.validateKey(dog)).toThrowError('Cannot cast >>spot<< to Number');
    expect(noFieldNotRequired.validateKey(dog)).toEqual(null);
    expect(() => fieldNotReqWrongType.validateKey(dog)).toThrowError('Cannot cast >>spot<< to Number');
    expect(fieldNotReqCorrectType.validateKey(dog)).toEqual('spot');
  });
})
;
