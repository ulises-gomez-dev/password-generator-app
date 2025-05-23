const characters = {
  uppercase: Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
  lowercase: Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)),
  numbers: Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i)),
  symbols: [
    ...Array.from({ length: 15 }, (_, i) => String.fromCharCode(33 + i)), // ! " # $ % & ' ( ) * + , - . /
    ...Array.from({ length: 7 }, (_, i) => String.fromCharCode(58 + i)), // : ; < = > ? @
    ...Array.from({ length: 6 }, (_, i) => String.fromCharCode(91 + i)), // [ \ ] ^ _ `
    ...Array.from({ length: 4 }, (_, i) => String.fromCharCode(123 + i)), // { | } ~
  ],
};

function generateRandomPassword(
  length = 0,
  include_uppercase = false,
  included_lowercase = false,
  include_numbers = false,
  include_symbols = false
) {
  const { uppercase, lowercase, numbers, symbols } = characters;
  const password = [];

  const poolSelect = (pool) => {
    let index = Math.floor(Math.random() * pool.length);
    password.push(pool[index]);
  };

  while (length > 0) {
    if (include_uppercase && length) {
      poolSelect(uppercase);
      length--;
    }
    if (included_lowercase && length) {
      poolSelect(lowercase);
      length--;
    }
    if (include_numbers && length) {
      poolSelect(numbers);
      length--;
    }
    if (include_symbols && length) {
      poolSelect(symbols);
      length--;
    }
  }

  for (let i = 0; i < password.length; i++) {
    let index = Math.floor(Math.random() * password.length);
    let temp = password[i];
    password[i] = password[index];
    password[index] = temp;
  }

  return password.join("");
}
