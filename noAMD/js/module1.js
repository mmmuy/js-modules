(function (window, module2) {
  let msg = "module1";
  function showMsg() {
    console.log(msg, module2.getMsg());
  }
  window.module1 = { showMsg };
})(window, module2);
