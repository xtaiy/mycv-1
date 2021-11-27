let demo = document.querySelector("#demo")
let style1 = document.querySelector("#style")
let string=`
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
}
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left:50%;
    bottom:0px;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2=''
//string=string.replace(/\n/g, "<br>")
let n=1
//demo.innerHTML=string[n];

let step=()=>{
    setTimeout(()=>{
        if(string[n]==='\n')
        {
            string2+="<br>";
        }
        else if(string[n]===' '){
            string2+="&nbsp"
        }
        else{
            string2+=string[n];
        }
        if(n<string.length)
        {
            demo.innerHTML=string2;
            style1.innerHTML=string.substring(0,n)
            window.scrollTo(0,99999)
            demo.scrollTo(0,99999)
            n=n+1;
            step()
        }
        
    },10)
}

step()
