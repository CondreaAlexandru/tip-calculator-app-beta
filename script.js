const totalBill = document.getElementById('total-bill');
const tips5 = document.querySelector('.tips')
const reset = document.getElementById('reset')
const nrPeople = document.getElementById('nr-people')
const tipAmountPers = document.querySelector('#tip-amount')
const totalAmount = document.getElementById("total-amount")


totalBill.addEventListener('keyup', calc)
nrPeople.addEventListener('keyup', calc)

console.log(tips5.value)

tips5.forEach(x => console.log(x.value))

function calc() {
        // calc total Tips
        const calculator = (parseInt(totalBill.value) / 100) * parseInt(tips5.value);
        const total = calculator.toFixed(2)
       
        // calc tips per person
        const costPer = parseFloat(total) / parseFloat(nrPeople.value)
        const calcPersBill = parseInt(totalBill.value) / parseFloat(nrPeople.value)
        const calcPersBillTotal = parseFloat(calcPersBill) + parseFloat(costPer)
    
        if (!nrPeople.value){
        tipAmountPers.textContent = '$0.00'
    } else {
        // display the tips
        tipAmountPers.textContent = "$" + costPer.toFixed(2)
        totalAmount.textContent = `$${calcPersBillTotal.toFixed(2)}`
    }
    
}

reset.addEventListener('click', function(){
    document.querySelector('#total-amount').textContent = "$0.00"
    tipAmountPers.textContent = "$0.00"
    totalBill.value = 0;
    nrPeople.value = 1;
})