function decoration(x) {
  let sum = decoration(f, 1000);
  sum("xyz", []);
}

function decorator(fn, ms) {
  return setTimeout(() => {
    console.log("heloo world");
  }, 1000);
}
decorator();
