
    const submitBtn = document.querySelector('.submit-btn');
    const btnContainer = document.querySelector('.btn')
    const btnRating = document.querySelectorAll('.btns');
    const rates = document.querySelector('#rate')
    const thankyouContainer = document.querySelector('.thankyou-card')
    const mainCardContainer = document.querySelector('.card')
    const rateAgain = document.querySelector('.rate-again');
    
let selectedValue =  '';


    // Event listeners 
    submitBtn.addEventListener('click', (e) => {
        // console.log('clicked')
        thankyouContainer.classList.toggle('hidden');
        mainCardContainer.classList.toggle('hidden');
          if (selectedValue === '') {
            alert(`Please select a rating`)
            // e.preventDefault();
            window.location.href ='';
            clearInterval()  
          }else {
            alert(`You seleceted ${selectedValue}`)
          }
    });

    rateAgain.addEventListener('click', () => {
        // console.log('clicked')
        thankyouContainer.classList.toggle('hidden');
        mainCardContainer.classList.toggle('hidden');
    });

btnRating.forEach((btnRatings) => {
    btnRatings.addEventListener('click', () => {
        // console.log(btnRatings.innerHTML);
       rates.innerHTML = btnRatings.innerHTML;
       selectedValue = rates.innerHTML;
       console.log(selectedValue)
      
    });
});

  
 