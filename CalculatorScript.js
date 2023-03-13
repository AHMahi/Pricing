const unitInputs = document.querySelectorAll("#unitCount");
const mmsButton = document.querySelector(".mms-button");
const smsButton = document.querySelector(".sms-button");
const smsContainer = document.querySelector(".sms-wrapper");
const mmsContainer = document.querySelector(".mms-wrapper");
const smsOptionSelector = document.querySelector(".sms-option-selectors");
const mmsOptionSelector = document.querySelector(".mms-option-selectors");

let smsMultiplier = 0.034;
let mmsMultiplier = 0.01;

let units = 1;

smsOptionSelector.addEventListener("change", function(e) {
    const priceContainer = document.querySelector('.price-bottom-contianer');

    if(e.target.value === 'dedicated') {
        console.log(units);
        smsMultiplier = 0.029;
        let element = document.querySelector('.price-bottom-item-two');
        if (typeof(element) != 'undefined' && element != null)
        {
            element.remove();
        }
        const html = `
        <div class ="price-bottom-item-two">
            <p>or 0.029/message + $18.00/mo for VN</p>
        </div>
        `
        priceContainer.insertAdjacentHTML('beforeend', html);
        if(!units) return;
        const totalPrice = (units * smsMultiplier).toFixed(3);
        document.querySelector('.sms-total-price').innerText = totalPrice;
    } else if(e.target.value === 'alpha') {
        console.log(units);
        smsMultiplier = 0.029;
        let element = document.querySelector('.price-bottom-item-two');
        if (typeof(element) != 'undefined' && element != null)
        {
            element.remove();
        }
        const html = `
        <div class ="price-bottom-item-two">
            <p>or 0.029/message</p>
        </div>
        `
        priceContainer.insertAdjacentHTML('beforeend', html);
        if(!units) return;
        const totalPrice = (units * smsMultiplier).toFixed(3);
        document.querySelector('.sms-total-price').innerText = totalPrice;
    } else if(e.target.value === 'shared') {
        smsMultiplier = 0.34;
        console.log(units);
        let element = document.querySelector('.price-bottom-item-two');
        if (typeof(element) != 'undefined' && element != null)
        {
            element.remove();
        }
        const html = `
        <div class ="price-bottom-item-two">
            <p>or 0.34/message</p>
        </div>
        `
        priceContainer.insertAdjacentHTML('beforeend', html);
        if(!units) return;
        const totalPrice = (units * smsMultiplier).toFixed(3);
        document.querySelector('.sms-total-price').innerText = totalPrice;
    }
})

// TODO: MMS Rate calculation
// mmsOptionSelector.addEventListener("change", function(e) {
//     if(e.target.value === 'dedicated') {

//     } else if(e.target.value === 'alpha') {

//     } else if(e.target.value === 'shared') {
        
//     }
// })

unitInputs.forEach( input => {
    input.value = 1;
    document.querySelector('.sms-total-price').innerText = (input.value * smsMultiplier).toFixed(3);
    document.querySelector('.mms-total-price').innerText = (input.value * mmsMultiplier).toFixed(3);
})

const smsInput = unitInputs[0];
smsInput.addEventListener('input', function(e) {
    units = Number(e.target.value);
    const totalPrice = (units * smsMultiplier).toFixed(3);
    document.querySelector('.sms-total-price').innerText = totalPrice;
    // updateSelectedAmmount(units);
})

const mmsInput = unitInputs[1];
mmsInput.addEventListener('input', function(e) {
    units = Number(e.target.value);
    const totalPrice = (units * mmsMultiplier).toFixed(3);
    document.querySelector('.mms-total-price').innerText = totalPrice;
    // updateSelectedAmmount(units);
})

const sentSMSAmount = unitInputs[0];
sentSMSAmount.addEventListener('input', function(e) {
    units = Number(e.target.value);
    const totalSMSAmount = units;
    document.querySelector('.sent-amount').innerText = totalSMSAmount;
    // updateSelectedAmmount(units);
})

const sentMMSAmount = unitInputs[1];
sentMMSAmount.addEventListener('input', function(e) {
    units = Number(e.target.value);
    const totalMMSAmount = units;
    document.querySelector('.sent-amount-mms').innerText = totalMMSAmount;
    // updateSelectedAmmount(units);
})


mmsButton.addEventListener('click', function() {
    mmsContainer.classList.remove('hidden');
    smsContainer.classList.add('hidden');
    mmsButton.classList.add('active');
    smsButton.classList.remove('active');

    mmsInput.value = smsInput.value;
    const totalPrice = (Number(unitInputs[1].value) * mmsMultiplier).toFixed(3);
    document.querySelector('.mms-total-price').innerText = totalPrice;
    console.log(smsInput.value, document.querySelector('.sent-amount'))
    document.querySelector('.sent-amount-mms').innerText = smsInput.value;

})

smsButton.addEventListener('click', function() {
    mmsContainer.classList.add('hidden');
    smsContainer.classList.remove('hidden');
    smsButton.classList.add('active');
    mmsButton.classList.remove('active');
    
    smsInput.value = mmsInput.value;
    const totalPrice =  (Number(unitInputs[0].value) * smsMultiplier).toFixed(3)
    document.querySelector('.sms-total-price').innerText = totalPrice;
    document.querySelector('.sent-amount').innerText = smsInput.value;
})

const updateSelectedAmmount = (units) => {
    const unitsSelection =  document.querySelector(".sent-amount");
    unitsSelection.innerText = units;
};