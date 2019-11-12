import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return (Big(numberOne).minus(numberTwo).toString());
    case 'X':
      return (Big(numberOne).times(numberTwo).toString());
    case '/':
      if (Big(numberTwo) !== 0) {
        return (Big(numberOne).div(numberTwo).toString());
      }
      break;
    case '+':
      return (Big(numberOne).plus(numberTwo).toString());
    default:
      return 'error';
  }
};

export default operate;
