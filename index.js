const { NotNumberException, NotValidIntegerException } = require('./errors');

const translations = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
];

module.exports = (number) => {
  if (isNaN(number)) {
    throw new NotNumberException('not a number');
  }
  if (!Number.isInteger(number) || number > 3999 || number < 1) {
    throw new NotValidIntegerException('not a valid integer - must be between 1 - 3999');
  }
  let romanConversion = "";
  for (let i = 0; i < translations.length; i++) {
    while (number >= translations[i].decimal) {
      romanConversion += translations[i].roman;
      number -= translations[i].decimal;
    }
  }
  return romanConversion;
};