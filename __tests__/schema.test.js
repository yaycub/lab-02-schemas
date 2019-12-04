const Schema = require('../lib/schema');

const schema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});

const spot = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

const rover = {
  name: 'rover',
  age: '10'
};

const who = {
  age: 'hi'
};

describe('Schema Module', () => {
  it('can validate an object againt a schema', () => {
    expect(schema.validate(spot)).toEqual({ age: 5, name: 'spot', weight: '20 lbs', });
    expect(schema.validate(rover)).toEqual({ name: 'rover', age: 10 });
    expect(() => schema.validate(who)).toThrowError('Cannot cast >>hi<< to Number');
  });    
});
