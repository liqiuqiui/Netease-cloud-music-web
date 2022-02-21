const useLocalStorage = (...args) => {
  if (args.length === 1 && typeof args[0] !== "string") throw new TypeError("args[0] must be a string")
  if (args.length === 1 && typeof args[0] !== "function") {
    
    return JSON.parse(window.localStorage.getItem(args[0]));
  } else if (typeof args[0] === "function") {
    const fun = args[0];
    fun(window.localStorage)
  } else {
    window.localStorage.setItem(args[0], JSON.stringify(args[1]));
  }
}

export default useLocalStorage;
