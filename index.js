// Subahan Allah (+)
document.getElementById('subahanAllah-Plus-btn').addEventListener('click', function () {
    const subahanAllahDisplay = document.getElementById('subahanAllah-display-count');
    const subahanAllahCount = parseInt(subahanAllahDisplay.innerText);
    if (subahanAllahCount === 33) {
        alert('Please count another one')
    }
    else {
        subahanAllahDisplay.innerText = subahanAllahCount + 1
    }
});

// Subahan Allah (-)
document.getElementById('subahanAllah-minus-btn').addEventListener('click', function () {

    const subahanAllahDisplay = document.getElementById('subahanAllah-display-count');
    const subahanAllahCount = parseInt(subahanAllahDisplay.innerText);

    if (subahanAllahCount <= 0) {
        alert('Please start your counting')
    }
    else {
        subahanAllahDisplay.innerText = subahanAllahCount - 1
    }
})

// Alhamdulillah (+)
document.getElementById('alhamdulillah-plus-btn').addEventListener('click', function () {

    const alhamdulillahDisplay = document.getElementById('alhamdulillah-display-count');
    const alhamdulillahCount = parseInt(alhamdulillahDisplay.innerText);

    if (alhamdulillahCount === 33) {
        alert('Please start your counting')
    }
    else {
        alhamdulillahDisplay.innerText = alhamdulillahCount + 1;
    }
})
// Alhamdulillah (-)
document.getElementById('alhamdulillah-minus-btn').addEventListener('click', function () {

    const alhamdulillahDisplay = document.getElementById('alhamdulillah-display-count');
    const alhamdulillahCount = parseInt(alhamdulillahDisplay.innerText);

    if (alhamdulillahCount <= 0) {
        alert('Please start your counting')
    }
    else {
        alhamdulillahDisplay.innerText = alhamdulillahCount - 1;
    }
})


// Allah Huakbar (+)
document.getElementById('allahHuakber-plus-btn').addEventListener('click', function () {

    const allahHuakberDisplay = document.getElementById('allahHuakber-display-count');
    const allahHuakberCount = parseInt(allahHuakberDisplay.innerText);


    if (allahHuakberCount === 33) {
        alert('Please start your counting')
    }
    else {
        allahHuakberDisplay.innerText = allahHuakberCount + 1;
    }
});
// Allah Huakber (-)
document.getElementById('allahHuakber-minus-btn').addEventListener('click', function () {

    const allahHuakberDisplay = document.getElementById('allahHuakber-display-count');
    const allahHuakberCount = parseInt(allahHuakberDisplay.innerText);


    if (allahHuakberCount <= 0) {
        alert('Please start your counting')
    }
    else {
        allahHuakberDisplay.innerText = allahHuakberCount - 1;
    }
});



// Rest All Button
document.getElementById('reset-btn').addEventListener('click', function () {

    document.getElementById('subahanAllah-display-count').innerHTML = 0;

    document.getElementById('alhamdulillah-display-count').innerHTML = 0;

    document.getElementById('allahHuakber-display-count').innerHTML = 0;
})
