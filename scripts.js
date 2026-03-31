function buy(product){
 document.getElementById('modal').style.display='flex';
 document.getElementById('product').innerText='Товар: '+product;
}

function submitOrder(){
 alert('Заявка отправлена');
 document.getElementById('modal').style.display='none';
}

window.onclick=function(e){
 if(e.target.id==='modal'){ document.getElementById('modal').style.display='none'; }
}

function showTab(n){
 document.getElementById('tab1').style.display = n===1 ? 'block':'none';
 document.getElementById('tab2').style.display = n===2 ? 'block':'none';
 let btns=document.getElementsByClassName('tab-button');
 for(let i=0;i<btns.length;i++) btns[i].classList.remove('active');
 btns[n-1].classList.add('active');
}

function filterProducts(){
 let input = document.getElementById('searchInput').value.toLowerCase();
 let category = document.getElementById('categorySelect').value;
 let cards = document.getElementsByClassName('card');
 for(let i=0;i<cards.length;i++){
  let name = cards[i].getAttribute('data-name').toLowerCase();
  let cat = cards[i].getAttribute('data-category');
  let matchSearch = name.includes(input);
  let matchCategory = category==='all' || cat===category;
  cards[i].style.display = (matchSearch && matchCategory) ? 'block' : 'none';
 }
}
