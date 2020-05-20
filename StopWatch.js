let l;
function sta() { 
    let x=document.getElementById("x");
    let u=x.innerText;
    let m=+u+1;
    u=(+u+1)%60;
    if(u<10)
    x.innerText=0+u.toString();
    else
    x.innerText=u.toString();
    if(m==60)
    {
        let y=document.getElementById("y");
        let t=y.innerText;
        t=(+t+1);
        if(t<10)
        y.innerText=0+t.toString();
        else
        y.innerText=t.toString();
    }
}
function start()
{
   l=setInterval(sta, 10);
}
function stop()
{
    clearInterval(l);
    let x=document.getElementById("x");
    let u=x.innerText;
    x.innerText=u;
    let y=document.getElementById("y");
    let t=y.innerText;
    y.innerText=t;
}
function reset()
{
    stop();
    let x=document.getElementById("x");
    x.innerText="00";
    let y=document.getElementById("y");
    y.innerText="00";
}