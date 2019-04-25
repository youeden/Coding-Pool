//loadScript function

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src ;

    script.onload = () => { callback(null, script)};
    script.onerror = () => {callback(new Error("Script load error") + scr)};

    document.body.appendChild(script);
}

//use Promise rewrite 

function promiseLoadScript(src) {
    return new Promise((resolve, reject) => {
        let script  = document.createElement("script");
        script.src = src;

        script.onload = () => {resolve(script)};
        script.onerror = () => {reject( new Error("script load fail") + src)};

        document.body.appendChild(script);
    });
}

//useage

let promise = promiseLoadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => console.log(`${script.src} is loaded`),
    error => console.log(`${error.message}`)
)

promise.then(script => {
    let href = script.src;
    let hrefArr = href.split(/\/+/);

    //do something...
})