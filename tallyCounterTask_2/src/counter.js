let counter = 'broken';

function get() {
  if (typeof counter !== 'number') {
    throw new Error('Counter value is invalid');
  }
  return counter;
}

function increase() {
  if (typeof counter !== 'number') {
    throw new Error('Counter value is invalid, and  cannot increase ');
  }
  counter++;
  return counter;
}

function reset() {
  if (typeof counter !== 'number') {
    throw new Error('Counter value is invalid, cannot reset');
  }
  counter = 0;
  return counter;
}

module.exports = { get, increase, reset };
