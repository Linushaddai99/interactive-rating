const bucket = document.querySelector('.bucket');
const submit = document.querySelector('.submit');
const popup = document.querySelector('.popup-wrapper');
const num = document.querySelector('.rating');
const button2 = document.querySelector('.button2');
const stardiv = document.querySelector('.star-div');

num.addEventListener('click', (e) => {
    let number = e.target.value;
    button2.textContent = `You selected ${number} out of 5`;

    switch(number) {
        case '1': stardiv.innerHTML = `
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        `;
        break;

        case '2': stardiv.innerHTML = `
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        `;
        break;

        case '3': stardiv.innerHTML = `
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        `;
        break;

        case '4': stardiv.innerHTML = `
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        `;
        break;

        case '5': stardiv.innerHTML = `
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        <img src="img/icon-star.svg" class="img-fluid  star mx-auto">
        `;

    }
});


submit.addEventListener('click', ()=> {
    
    bucket.style.display = 'none';
    popup.style.display = 'block';
})


