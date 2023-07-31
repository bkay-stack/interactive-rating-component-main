
    const submitBtn = document.querySelector('.submit-btn');
    const btnRating = document.querySelectorAll('.btns');
    const rates = document.querySelector('#rate')
    


    // Event listeners 
    submitBtn.addEventListener('click', () => {
        // console.log('clicked')
        window.location.href = '/Html/index.html';  
    });
      
    btnRating.forEach((btnRatings) => {
        btnRatings.addEventListener('click', () => {
            console.log(btnRatings.innerHTML);
            rates.innerHTML  = btnRatings.innerHTML;
        })
    })



    console.log(rates)

  
 