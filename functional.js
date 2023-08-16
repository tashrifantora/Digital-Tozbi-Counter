// For Incriment
function getPlusBtnId(btnId) {
    const zikirPlus = document.getElementById(btnId);
    const zikirCount = parseInt(zikirPlus.innerText);

    if (zikirCount === 33) {
        alert('Please count another one')
    }
    else {
        zikirPlus.innerText = zikirCount + 1;
    }
    return zikirCount;
}

// For dicriment
function getMinusBtnId(btnId) {
    const zikirPlus = document.getElementById(btnId);
    const zikirCount = parseInt(zikirPlus.innerText);

    if (zikirCount <= 0) {
        alert('Please start your counting')
    }
    else {
        zikirPlus.innerText = zikirCount - 1;
    }
    return zikirCount;
}



// Subahanallah (+)
document.getElementById('subahanAllah-Plus-btn').addEventListener('click', function () {
    getPlusBtnId('subahanAllah-display-count');
});

// Alhamdulillah(+)
document.getElementById('alhamdulillah-plus-btn').addEventListener('click', function () {
    getPlusBtnId('alhamdulillah-display-count');
});

// Allah Huakber (+)
document.getElementById('allahHuakber-plus-btn').addEventListener('click', function () {
    getPlusBtnId('allahHuakber-display-count');
});


// Subahanallah (-)
document.getElementById('subahanAllah-minus-btn').addEventListener('click', function () {
    getMinusBtnId('subahanAllah-display-count');
});
// Alhamdulillah (-)
document.getElementById('alhamdulillah-minus-btn').addEventListener('click', function () {
    getMinusBtnId('alhamdulillah-display-count');
});
// Allah Huakber (-)
document.getElementById('allahHuakber-minus-btn').addEventListener('click', function () {
    getMinusBtnId('allahHuakber-display-count');
});


// Reset Button
document.getElementById('reset-btn').addEventListener('click', function () {

    document.getElementById('subahanAllah-display-count').innerHTML = 0;

    document.getElementById('alhamdulillah-display-count').innerHTML = 0;

    document.getElementById('allahHuakber-display-count').innerHTML = 0;
})
