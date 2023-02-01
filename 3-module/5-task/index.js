function getMinMax(str) {
  let array = str.split(' ');
  let min = max = +array[0];
  for (let i = 0; i < array.length; i++) {
    if (+array[i] < min) {
      min = +array[i];
    } else if (+array[i] > max) {
      max = +array[i];  
    }
  }
   return {min: min, max: max};
}
