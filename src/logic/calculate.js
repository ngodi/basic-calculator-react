import operate from './operate';

// eslint-disable-next-line no-unused-vars
const calculate = ({ total, next, operation }, buttonName) => {
    const OPERATIONS = ['+','-','/','x','%','+/-']
  if (OPERATIONS.includes(buttonName)) {
  total = operate(total, next, buttonName);
    }
  return total;
  };
export default calculate;
