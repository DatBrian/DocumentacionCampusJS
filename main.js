const incremento = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

alert(incremento());
alert(incremento());
alert(incremento());