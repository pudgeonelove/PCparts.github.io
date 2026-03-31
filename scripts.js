function buy(product){
 document.getElementById('modal').style.display='flex';
 document.getElementById('product').innerText='Товар: '+product;
}

function submitOrder(){
 alert('Заявка отправлена');
 document.getElementById('modal').style.display='none';
}

window.onclick=function(e){
 if(e.target.id==='modal'){
  document.getElementById('modal').style.display='none';
 }
}

function showTab(n){
 document.getElementById('tab1').style.display = n===1 ? 'block':'none';
 document.getElementById('tab2').style.display = n===2 ? 'block':'none';

 let btns = document.getElementsByClassName('tab-button');
 for(let i=0;i<btns.length;i++) btns[i].classList.remove('active');
 btns[n-1].classList.add('active');
}
