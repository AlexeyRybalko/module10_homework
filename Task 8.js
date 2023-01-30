const map = new Map([
  ['HTML', 'HyperText Markup Language'],
  ['CSS', 'Cascading Style Sheets'],
  ['JS', 'JavaScript']
]);


for (let [key, value] of map) {
  console.log('Ключ - ' + key, 'Значение - ' + value);
}