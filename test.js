const generator = require('.');
const { NotNumberException, NotValidIntegerException } = require('./errors');

const testCases = [
  { input: 1, output: 'I' },
  { input: 5, output: 'V' },
  { input: 10, output: 'X' },
  { input: 20, output: 'XX' },
  { input: 3999, output: 'MMMCMXCIX' },
  { input: 944, output: 'CMXLIV' },
  { input: 3833, output: 'MMMDCCCXXXIII' },
  { input: 1.0, output: 'I' },
];

for (let i = 0; i < testCases.length; i++) {
  test(`Expect input of ${testCases[i].input} to be equal to: ${testCases[i].output}`, () => {
    try {
      expect(generator(testCases[i].input)).toBe(testCases[i].output);
    } catch (ex) {
      throw ex;
    }
  });
}

test('Expect input of 4000 to throw a NotValidIntegerException', () => {
  try {
    generator(4000);
    throw new Error('Expected to fail with a NotValidIntegerException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotValidIntegerException);
  }
});

test('Expect input of -1 to throw a NotValidIntegerException', () => {
  try {
    generator(-1);
    throw new Error('Expected to fail with a NotValidIntegerException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotValidIntegerException);
  }
});

test('Expect input of "8" to throw a NotValidIntegerException', () => {
  try {
    generator('8');
    throw new Error('Expected to fail with a NotValidIntegerException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotValidIntegerException);
  }
});

test('Expect input of 1.1 to throw a NotValidIntegerException', () => {
  try {
    generator(1.1);
    throw new Error('Expected to fail with a NotValidIntegerException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotValidIntegerException);
  }
});

test('Expect input of null to throw a NotValidIntegerException', () => {
  try {
    generator(null);
    throw new Error('Expected to fail with a NotValidIntegerException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotValidIntegerException);
  }
});

test('Expect input of "a" to throw a NotNumberException', () => {
  try {
    generator('a');
    throw new Error('Expected to fail with a NotNumberException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotNumberException);
  }
});

test('Expect input of undefined to throw a NotNumberException', () => {
  try {
    generator(undefined);
    throw new Error('Expected to fail with a NotNumberException');
  } catch (ex) {
    expect(ex).toBeInstanceOf(NotNumberException);
  }
});