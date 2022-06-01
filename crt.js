// if(document.readyState=='loading'){
//     document.addEventListener('DOMcontentLoaded' ,ready)
//     // updateCartTotal()
// }
// else{
//     ready()
// }
// function ready(){

//     var removeBtn=document.getElementsByClassName('bathene');
//     for(var i = 0;i < removeBtn.length; i++){
//        var button=removeBtn[i]
//        button.addEventListener('click',removeCartItem)
//        }
//        var quantityInputs=document.getElementsByClassName('total-amount')
//        for(var i = 0;i < quantityInputs.length; i++){
//            var input=quantityInputs[i]
//            input.addEventListener('change',quantityChanged)
//        }
//         var addTo= document.getElementsByClassName('doneBtn')
//         for(var i = 0;i < addTo .length; i++){
//             var button= addTo[i]
//             button.addEventListener('click',addToCartClicked)
//         }
//         document.getElementsByClassName('button-checkout')[0].addEventListener('click', purchaseClicked)
//     }
//     function purchaseClicked(){
//         alert('thank you for purchasing')
//         var cartItems=document.getElementsByClassName('Cart-Items')[0]
//         while(cartItems.hasChildNodes()){
//             cartItems=removeChild(cartItems.firstChild)
//         }
//         updateCartTotal()
//     }
// function removeCartItem(event){
//     var buttonClicked=event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }
// function quantityChanged(event){
// var input=event.target
// if(isNaN(input.value)||input.value<=0){
//     input.value=1
// }
// updateCartTotal()
// }
//  function  addToCartClicked(event){
//      var button=event.target
//      var shopItem=button.parentElement.parentElement
//      var title= shopItem.getElementsByClassName('shop-item-title')[0].innerText
//      var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText
//      var imgSrc=shopItem.getElementsByClassName('shop-item-image')[0].scr
//      addItemToCart(title, price,imgSrc)
//      updateCartTotal()

//  }
//  function addItemToCart(title, price ,imgSrc){
//      var cart
//  }
//     function updateCartTotal(){
//         var cartItem=document.getElementsByClassName('Cart-Items')[0]
//         var crtRows=cartItem.getElementsByClassName('prices')
//         var total=0
//         for(var i=0; i<crtRows.length; i++){
//             var crtRows=crtRows[i]
//             var priceElement=crtRows.getElementsByClassName('amount')[0]
//             var qntElement=crtRows.getElementsByClassName('cart-quantity')[0]
//             // console.log(priceElement, qntElement)
//             var price= parseFloat(priceElement.innerText.replace('R',''))
//             var quantity=qntElement.value
//             total=total+(quantity*price)
//         }
//         total=Math.round(total*100)/100
//         document.getElementsByClassName('total-amount')[0].innerText="R"+total
       
//     }
//     var removeBtn=document.getElementsByClassName('bathene');
//         // console.log(removeBtn)
//         for(var i = 0;i < removeBtn.length; i++){
//            var button=removeBtn[i]
//            button.addEventListener('click',function(event){
//                var buttonClicked=event.target
//                buttonClicked.parentElement.parentElement.remove()
//                updateCartTotal()
//            })
//         }
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {
//     var removeCartItemButtons = document.getElementsByClassName('btn-danger')
//     for (var i = 0; i < removeCartItemButtons.length; i++) {
//         var button = removeCartItemButtons[i]
//         button.addEventListener('click', removeCartItem)
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

//     var addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }

//     document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }

// function purchaseClicked() {
//     alert('Thank you for your purchase')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0];
//     console.log(cartItems);
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             return
//         }
//     }
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('R', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total
// }
//new
var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}