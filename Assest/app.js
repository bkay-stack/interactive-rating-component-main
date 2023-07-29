document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const rating = document.querySelectorAll('.btns');
    const rates = document.getElementById('rate');
    


    // Event listeners 
    submitBtn.addEventListener('click', () => {
        // console.log('clicked')
        window.location.href = '/Html/index.html';  
    });

    rating.forEach((ratings) => {
        ratings.addEventListener('click', () => {
            console.log(ratings.innerHTML);
            rates.innerHTML = ratings.innerHTML;
          
        });
    });
});
