let arr = [1, 245, 24, 76, 0, 0, 0, 'str'];
let even = 0;
let odd = 0;
let zero = 0;


for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] % 2 === 0 && arr[i] !==0){
    even +=1;
  } else if (arr[i] % 2 !== 0) {
    odd +=1;
  } else if (arr[i] === 0) {
    zero +=1;
  }    
  }  
}

console.log(`Количество четных элементов: ${even}`);
console.log(`Количество нечетных элементов: ${odd}`);
console.log(`Количество нулевых элементов: ${zero}`);