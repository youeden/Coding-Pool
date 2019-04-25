
const KEY = "tounce-terms";

let init = function() {
    document.getElementById("debounce").addEventListener("input", search);

    let terms = ['apple', 'application', 'aphone', 'banner', 'baet', 'baaa',
          'cocoet', 'cool', 'cococo'];

    //use localStorage cache
    localStorage.setItem(KEY, JSON.stringify(terms));
}

//search main function
let search = function(event) {
    let text = event.target.value;
    let output = document.getElementById("output");
    let ulList = document.getElementsByClassName("matchs")[0];
    
    output.textContent = "List Matchs is " + text;

    getList(text)
        .then(list => {
            ulList.innerHTML = "";
            if(list.length == 0) {
                let li = document.createElement("li");
                
                li.textContent = "NO MATCHES";
                ulList.appendChild(li);
            }else {
                list.forEach( item => {
                    let li = document.createElement("li");

                    li.textContent = item;
                    ulList.appendChild(li);
                })
            }
        })
        .catch( error => console.log( error));
}

//gitList promise function
let getList = function(text) {
    let random = Math.floor(Math.random() * 1000);

    return new Promise((resolve, reject) => {
        setTimeout( (function() {
            let pattern = "^" + this.toString();
            let reg = new RegExp(pattern, 'i');
            let terms = JSON.parse(localStorage.getItem(KEY));
            let matchs = terms.filter( term => reg.test(term));

            // console.log(matchs);
            resolve(matchs);
        }).bind(text ), random);
    })
}

//simulate promise await feature

let tounce = function(func, wait, immediate) {
    let timer;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timer = null;
            if(!immediate) func.apply( context, args);
        }
        
        let callNow = immediate && !immediate;
        clearTimeout(timer);

        timer = setTimeout(later, wait);
        if(!callNow) func.apply(context, args);
    };
}

//add DOM change event
addEventListener("DOMContentLoaded", init);