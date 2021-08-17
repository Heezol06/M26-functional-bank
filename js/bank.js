    function doubleIt(num){
        const result = num * 2;
        return result
    }
    const fast = doubleIt(4);
    const second = doubleIt(9);
    

    function getInputValue(inputId){
        const inputField  = document.getElementById(inputId);
        const inputAmountText  = inputField .value;
        const amountValue  = parseFloat( inputAmountText );

        // clear the diposit input filed 
        inputField .value = '';
        return amountValue ;
    }

    function updateTotalField(totalFieldId, amount){
        // debugger;
        const totalElement = document.getElementById(totalFieldId);
        const totalText  = totalElement.innerText;
        const previousTotal  = parseFloat(totalText );
        totalElement.innerText = previousTotal  + amount;
    }

    function getCurrentBalance(){
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        return previousBalanceTotal;
    }
    function updateBalance(amount , isAdd){
        const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
        const previousBalanceTotal = getCurrentBalance();
        if(isAdd == true){
            balanceTotal.innerText = previousBalanceTotal + amount;
        }
        else{
            balanceTotal.innerText = previousBalanceTotal - amount;
        }
    }

    document.getElementById('diposit-button').addEventListener('click', function(){
         const DipositAmount = getInputValue('diposit-input');
         if(DipositAmount > 0){
            updateTotalField('diposit-total' ,DipositAmount);
            updateBalance(DipositAmount , true)
         }
    })

    // handle withdraw button event 
    document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if(withdrawAmount > 0 && currentBalance > withdrawAmount){
            updateTotalField('withdraw-total' , withdrawAmount);
        updateBalance(withdrawAmount, false);
        }
        if(currentBalance < withdrawAmount){
            console.log('You can not withdraw more then you have in your account')
        }
    })