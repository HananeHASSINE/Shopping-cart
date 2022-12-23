
let add=document.querySelector('#add1');
let sub=document.querySelector('#sub1');
let add1=document.querySelector('#add2');
let sub1=document.querySelector('#sub2');
let pa=document.querySelector ('.pa');
let pa1=document.querySelector('.pa1');
let num=parseInt(pa.innerHTML);
let num1=parseInt(pa1.innerHTML);
let p1=document.querySelector('#P1');
let pr1=parseInt(p1.innerHTML);
let p2=document.querySelector('#P2');
let pr2=parseInt(p2.innerHTML);
let pt=document.querySelector('#Pt');
let d1=document.querySelector('#D1');
let d2=document.querySelector('#D2'); 
let item1 = document.querySelector('.item1');
let item2 =document.querySelector('.item2');
let count = true;
function change() {
    let h1 = document.getElementById("h1");
    
        if (count == true) {
          h1.style.color = "red";
          count = false;
        } else {
          h1.style.color = "black";
          count = true;
        }
      };
function change1() {
    let h2 = document.getElementById("h2");
    
        if (count == true) {
          h2.style.color = "red";
          count = false;
        } else {
          h2.style.color = "black";
          count = true;
        }
      };


add.onclick = function(){
    num=num+1;
    pa.innerHTML=num;
   pr=pr1*num; 
   p1.innerHTML=pr1*num;
};

sub.onclick = function(){
    
    if (num<=1){
    pa.innerHTML=1;
   pr=2000;
   p1.innerHTML=2000;

}
else{
   num=num-1;
    pa.innerHTML=num;
    pr=pr1*num;
    p1.innerHTML= pr1*num;
    
};}


add1.onclick = function(){
    num1=num1+1;
    pa1.innerHTML=num1;
    price1=p2.innerHTML=pr2*num1;
};
sub1.onclick = function(){
    if (num1<=1){
         pa1.innerHTML=1;
         price1=  p2.innerHTML=2000;
}
else{
   num1=num1-1;
    pa1.innerHTML=num1;
    price1= p2.innerHTML=pr2*num1;
};
;}

d1.onclick = function(){
item1.remove();
}
d2.onclick = function(){
item2.remove();
};


 

