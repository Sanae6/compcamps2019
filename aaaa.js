let div = document.getElementById("text");
let xv = 1;
let yv = 1;
const loop = ()=>{
    let ch = document.documentElement.clientHeight;
    let cw = document.documentElement.clientWidth;
    let {top,left,width,height} = div.style;
    if (top == "") top = "0px";
    if (left == "") left = "0px";
    top = top.substring(0,top.indexOf("px"));

    if (top+height >= ch)yv=-1;
    if (top+0==0)yv=1;
    if (left+width >= cw) xv=-1
    if (left<=0)xv=1;
    top+=xv;
    left+=xv;
    div.style.top = top;
    //console.log(div.style);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);