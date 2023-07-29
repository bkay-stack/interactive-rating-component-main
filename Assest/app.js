document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const rating = document.querySelectorAll('.btns');
    const rates = document.getElementById('rate');
    


    // Event listeners 
    submitBtn.addEventListener('click', () => {
        // console.log('clicked')
        window.location.href = '/Html/index.html';  
    });

    rating.forEach((rating) => {
        rating.addEventListener('click', () => {
            console.log(rating.innerHTML);
            // rates.innerHTML = rating.innerHTML;
          
        });
    });
});
