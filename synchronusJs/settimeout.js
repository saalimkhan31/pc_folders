function add(a, b, cb) {
  setTimeout(() => {
    console.log("sum is", a + b);
    cb(a + b);
  }, 3000);
}




add(10, 20, function (resultAdd) {
sub
});
