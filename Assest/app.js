document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    const btn = document.querySelectorAll('.btns');
    const ratePoint = document.getElementById('ratings');
    const rate = document.getElementById('rate');


let selectedRate = '';
let val = null

console.log(val)

// Event listeners 

submitBtn.addEventListener('click', () => {
    // console.log('clicked')
    if (selectedRate === '') {
        alert(`Please select a rating`);
        window.location = '';
    }else {
        alert(`You selected ${selectedRate}`);
        window.location.href = '/Html/index.html';
    }   
})



btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log('clicked');
        btn.classList.toggle('inactive');
        selectedRate = btn.innerHTML;
        console.log(selectedRate)
        updateSelectedRating();
    });

});



// Function to update the displayed rating in the span
const updateSelectedRating = () => {
       
   if (rate === '' || rate === 0) {
    rate.style.display = 'block';
    rate.textContext = selectedRate;
   }
       
        
}

});