let url = "http://www.wangshuwen.com/api/getRegion";

fetch(url)
    .then(response => response.json())
    .then(data => {
        let str = JSON.stringify(data, null, "\t");
        document.querySelector("#output pre").textContent = str;
    })
    .catch(error => {
        let name = error.name;
        let msg = error.msg;
        console.log(`${name}, message is ${msg}`);
    })


 
