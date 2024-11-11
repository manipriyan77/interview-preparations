// Given a function `fn` and a time `t` in milliseconds. You need
// to return a debounced version of that function

function debounce(mainFunction, timeout) {
  let timerTD;
  return function (...args) {
    clearTimeout(timerTD);
    timerTD = setTimeout(() => {
      mainFunction(...args);
    }, timeout);
  };
}

const debouncedMsg = debounce((msg) => {
  console.log(msg);
}, 1000);

debouncedMsg('hello');
debouncedMsg('hi');
debouncedMsg('get');

/* 
    d
    */
