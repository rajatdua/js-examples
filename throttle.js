const throttle = (fn, delay) => {
  let firedAt;
  return function(...args) {
    const currentTime = Date.now();
    if (!firedAt || delay < currentTime - firedAt) {
      firedAt = currentTime;
      fn.apply(this, args);
    }
  };
};
