// Promisification

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

// Without Promise
function loadScript(src, callback) {
  let script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript)

loadScriptNew('test.js')
.then(()=>console.log('DOne'))
.catch((err)=>console.log(err))
// loadScript("test.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("script Loaded");
//   }
// });
