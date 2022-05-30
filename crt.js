if(document.readyState=='loading'){
    document.addEventListener('DOMcontentLoaded' ,ready)
    // updateCartTotal()
}
else{
    ready()
}
function ready(){

    var removeBtn=document.getElementsByClassName('bathene');
    for(var i = 0;i < removeBtn.length; i++){
       var button=removeBtn[i]
       button.addEventListener('click',removeCartItem)
       }
       var quantityInputs=document.getElementsByClassName('total-amount')
       for(var i = 0;i < quantityInputs.length; i++){
           var input=quantityInputs[i]
           input.addEventListener('change',quantityChanged)
       }
        var addTo= document.getElementsByClassName('doneBtn')
        for(var i = 0;i < addTo .length; i++){
            var button= addTo[i]
            button.addEventListener('click',addToCartClicked)
        }
    }
function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quantityChanged(event){
var input=event.target
if(isNaN(input.value)||input.value<=0){
    input.value=1
}
updateCartTotal()
}
 function  addToCartClicked(event){
     var button=event.target
     var shopItem=button.parentElement.parentElement
     var title= shopItem.getElementsByClassName()
 }
    function updateCartTotal(){
        var cartItem=document.getElementsByClassName('Cart-Items')[0]
        var crtRows=cartItem.getElementsByClassName('prices')
        var total=0
        for(var i=0; i<crtRows.length; i++){
            var crtRows=crtRows[i]
            var priceElement=crtRows.getElementsByClassName('amount')[0]
            var qntElement=crtRows.getElementsByClassName('cart-quantity')[0]
            // console.log(priceElement, qntElement)
            var price= parseFloat(priceElement.innerText.replace('R',''))
            var quantity=qntElement.value
            total=total+(quantity*price)
        }
        total=Math.round(total*100)/100
        document.getElementsByClassName('total-amount')[0].innerText="R"+total
       
    }
    var removeBtn=document.getElementsByClassName('bathene');
        // console.log(removeBtn)
        for(var i = 0;i < removeBtn.length; i++){
           var button=removeBtn[i]
           button.addEventListener('click',function(event){
               var buttonClicked=event.target
               buttonClicked.parentElement.parentElement.remove()
               updateCartTotal()
           })
        }
          