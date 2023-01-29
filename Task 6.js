function equalArr(arr){
    let a = true;
    for (let i = 0; i < arr.length - 1 && a; i++) {
      if(arr[i] != arr[i+1]){
        a = false;
        return console.log (`Элементы массива не одинаковые. ${a}`);
      }
    }
    return console.log(`Элементы массива одинаковые. ${a}`)
  }
  
  equalArr([3,1,1,1,1,1]);
  