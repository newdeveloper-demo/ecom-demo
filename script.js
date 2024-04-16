const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}
const creditCardInfo = {
    cardNumber: '1234-5678-9012-3456',
    expiryDate: '12/24',
    cvc: '123'
  };
  
  // Populate the form fields with the credit card information
  $('#card-number').val(creditCardInfo.cardNumber);
  $('#card-expiry').val(creditCardInfo.expiryDate);
  $('#card-cvc').val(creditCardInfo.cvc);