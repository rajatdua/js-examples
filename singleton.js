const Singleton = (() => {
  let instance;
  const createInstance = () => new Object("I am the instance");

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const result = Singleton.getInstance();
const result2 = Singleton.getInstance();
console.log(result === result2);
