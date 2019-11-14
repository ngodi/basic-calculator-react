import operate from './operate';

// eslint-disable-next-line no-unused-vars
const calculate = ({ total, next, operation }, buttonName) => {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if(DIGITS.includes(buttonName) ){
      next += buttonName;
      return{
        total,
        next,
        operation
      }
    }else if(buttonName === 'AC'){
      total = null;
      next = '';
      operation = null;
      return{
        total,
        next,
        operation
      }
    }
  };
export default calculate;