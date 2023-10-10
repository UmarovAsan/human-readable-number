module.exports = function toReadable (number) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen"
  ];

  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number === 0) {
    return "zero";
  }

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    const tenDigit = Math.floor(number / 10);
    const oneDigit = number % 10;
    return `${tens[tenDigit]}${oneDigit !== 0 ? ` ${ones[oneDigit]}` : ''}`
  }

  if (number < 1000) {
    const hundredDigit = Math.floor(number / 100);
    const remainingDigits = number % 100;
    const remainingReadable = remainingDigits !== 0 ? ` ${toReadable(remainingDigits)}` : '';
    return `${ones[hundredDigit]} hundred${remainingReadable}`;
  }
};
