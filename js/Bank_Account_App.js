let accountInfoList = JSON.parse(localStorage.getItem('accountInfoList')) || []

var Module = (function (){
    
function Account (name, value){
    this.name = name;
    this.value = value;
}
let textField = document.getElementById("text")
let submit = document.getElementById("submit")

submit.addEventListener('click', addAccount);

function addAccount(){
    let accountName = document.getElementById("account").value;
    let depositValue = document.getElementById("deposit").value;

    const createAccount = new Account (accountName, depositValue);

    accountInfoList.push (createAccount);
    localStorage.setItem('accountInfoList', JSON.stringify(accountInfoList));
    textField.value = "";

    listAccount();
}

function listAccount(){
    for (let x of accountInfoList){
        textField.value += 'Account Name:  ' + x.name + '   Deposit value:  ' + x.value + '\r\n'; 
    }
}

return{
    addBankAccount : addAccount
};
})();