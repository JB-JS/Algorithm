function solution(name) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const names = [...name];
  let result = 0;

  names.forEach((word, idx) => {
    if (word === 'A') {
      return;
    }

    const nameIdx = alphabet.findIndex(el => el === word);

    result += (nameIdx > 13 ? 26 - nameIdx : nameIdx) + 1;
  });

  return result;
}

solution('AAAAZAATAEA');
