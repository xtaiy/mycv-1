let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color:red;
}
`;
let string2 = '';
//string=string.replace(/\n/g, "<br>")
let n = 1;
//demo.innerHTML=string[n];
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === '\n') string2 += "<br>";
        else if (string[n] === ' ') string2 += "&nbsp";
        else string2 += string[n];
        if (n < string.length) {
            demo.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            n = n + 1;
            step();
        }
    }, 100);
};
step();

//# sourceMappingURL=index.7fbff28d.js.map
