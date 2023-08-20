
let totalPrice = 0;
function addToCart(target){
  const itemName = target.parentNode.childNodes[3].childNodes[3].innerText;
  const itemListContainer = document.getElementById('item-list');
  const li =  document.createElement('li');
  li.innerText = itemName;
  li.style.listStyleType = 'decimal';
  itemListContainer.appendChild(li);

  // Calculate total Price 
  const itemPriceString = target.parentNode.childNodes[3].childNodes[5].innerText.split(' ')[0];
  const itemPrice = parseFloat(itemPriceString);
  totalPrice = totalPrice + itemPrice;

  // Set Total Price 
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerText = totalPrice.toFixed(2);

  // Set Total Price 
  const total = document.getElementById('total');
  total.innerText = totalPrice.toFixed(2);

  // Enable or disable for apply button
  const deleteBtn =document.getElementById('coupon-btn');
  if(totalPrice > 200){
    deleteBtn.removeAttribute('disabled');
  }
  else{
      deleteBtn.setAttribute('disabled', true);
  }
}

document.getElementById('coupon-btn').addEventListener('click', function(){
  const inputText = document.getElementById('input-coupon');
  const inputTextValue = inputText.value;
  
  // console.log(discount);
  if(inputTextValue === 'SELL200'){
    const discount = totalPrice * .20;

    const totalDiscount = document.getElementById('Discount');
    totalDiscount.innerText = discount.toFixed(2);

    const grandTotal = totalPrice - discount;
    // const total = document.getElementById('total');
    total.innerText = grandTotal.toFixed(2);
  }
})

// Refresh all pages function
function goHome(){
  window.location.reload();
}