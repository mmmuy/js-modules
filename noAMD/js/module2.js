(function (window) {
  let msg = "module2";
  function getMsg() {
    console.log(msg);
    return msg;
  }
  window.module2 = { getMsg };
})(window);
