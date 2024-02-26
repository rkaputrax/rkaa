let display=document.querySelector(".display");
const button=document.querySelectorAll("button");
const archon=["-","+",'='];
let output="";

const hitung=(btn)=>{
    display.focus();
    if (btn ==="="&& output!=="="){
    output=eval(output.replace("%","/100").replace("MOD","%").replace("X","*").replace(":","/"));
}else if (btn ==="AC"){
    output="";
}else if (btn ==="DEL"){
    output=output.toString().slice(0,-1);
}else  {
    if (output ===""&&archon.includes(btn))return;
    output+=btn;
}
display.value=output;
}
button.forEach((a) => {
 a.addEventListener("click",(e)=>hitung(e.target.dataset.value));  
})

