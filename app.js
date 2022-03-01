let str=document.getElementById("capital");
let btn=document.getElementById('btn-left');
let arr=document.getElementById("rsl");
let delete1=document.getElementById("btn-right");

delete1.addEventListener('click', ()=>{
    arr.innerHTML=" ";
    str.value=" ";
})

btn.addEventListener('click', ()=>{
    capitalLetter(str.value);
});



function capitalLetter(text){
    const a=text.split(" ");
 
    for(let i=0; i<a.length; i++)
    {
        a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
    }
    const b=a.join(" ");
    console.log(b);
    return arr.innerHTML=`${b}`;
}