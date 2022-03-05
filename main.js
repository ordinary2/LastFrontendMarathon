function Calc(operator, firstNumber, secondNumber) {
    const isNumber = typeof firstNumber == 'number' && typeof secondNumber == 'number';
  if(typeof operator == 'string' && isNumber){
    if(operator == 'sum'){
      return firstNumber + secondNumber;
    }else if(operator == 'multi'){
      return firstNumber * secondNumber;
    }else if(operator == 'divide'){
      return firstNumber / secondNumber;
    }else if(operator == 'sub'){
      return firstNumber - secondNumber;
    }else if(operator == 'exp'){
      return firstNumber ** secondNumber;
    }else{
      return 'unknown operation';
    }
  }else{
    return 'Error';
  }
}

console.log(Calc('sum', 2, 2));
console.log(Calc('multi', true, 5));
console.log(Calc('rtt', 4 , 10));
console.log(Calc( 4 , 10));
console.log(Calc('divide', 5, 10));