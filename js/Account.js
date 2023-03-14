var Account = (function() {
    var balance = 0;
    var accNo = 0;
    var owner = "";
  
    function getBalance() {
      return balance;
    }
  
    function setBalance(newBalance) {
      balance = newBalance;
    }
  
    function open(initialBalance, accountNumber, accountOwner) {
      balance = initialBalance;
      accNo = accountNumber;
      owner = accountOwner;
    }
  
    function deposit(amount) {
      setBalance(getBalance() + amount);
    }
  
    // Return an object containing the public methods
    return {
      getBalance: getBalance,
      setBalance: setBalance,
      open: open,
      deposit: deposit
    };
  })();


  