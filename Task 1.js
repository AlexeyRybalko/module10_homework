let a = +prompt("Пожалуйста, введите любое число");

if (typeof a === 'number' && !isNaN(a)) {
  if (a % 2 === 0) {
    console.log("Это число чётное")
  } else {
    console.log("Это число нечётное")
  }
} else {
  console.log("Упс, кажется, вы ошиблись")
}