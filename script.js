//button like
let likes=document.getElementsByClassName("like");
console.log(likes)
for(let i=0; i<likes.length;i++){
    let btnlike=likes[i];
    btnlike.addEventListener("click", function(){
if(btnlike.firstChild.style.color == "black"){
    btnlike.firstChild.style.color = "red";
}
   else{
    btnlike.firstChild.style.color ="black";
   }        
        
      
    })
}

//button plus
let plus=document.getElementsByClassName("plus-btn");
for(let i=0;i<plus.length;i++){
    let btnplus=plus[i];
    btnplus.addEventListener("click", function(){
        btnplus.previousElementSibling.value++;
        finalPrice()
        total1();
        total2();
        total3();
     
    })
}
//button minus
let minus=document.getElementsByClassName("minus-btn");
for(let i=0;i<minus.length;i++){
    let minusbtn=minus[i];
    minusbtn.addEventListener("click", function(){
        if( minusbtn.nextElementSibling.value>1){
            minusbtn.nextElementSibling.value--;
        }
        finalPrice()
        total1();
        total2();
        total3();
   
    })
    
}

// remove
var removeCartItemButtons = document.getElementsByClassName('delete')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    finalPrice()
    })
}
function total1(){
    let q1=document.getElementById('q1');
    let p1=document.getElementById('p1');
    let total=q1.value*1379
    p1.innerText=total
}
function total2(){
    let q1=document.getElementById('q2');
    let p1=document.getElementById('p2');
    let total=q1.value*1379
    p1.innerText=total
}
function total3(){
    let q1=document.getElementById('q3');
    let p1=document.getElementById('p3');
    let total=q1.value*1379
    p1.innerText=total
}

// price total
let final= document.getElementById('finalPrice');
    let items = document.getElementsByClassName('Item');
function finalPrice() {
    
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        total = total+(item.querySelector(".Quant").value*item.querySelector(".price").innerText);
        console.log(total)
      
        
    }
    return (final.value=total);
}
    

