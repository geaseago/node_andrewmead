var accounts = [];

// Account Object
// balance
// username

function createAccount (account){
	accounts.push(account);
	return account;
}

function getAccount (username){
	var matchedAccount;
	accounts.forEach(function(account){
			if (account.username === username) {
				matchedAccount = account;
			}	
		}
	)
  return matchedAccount;
}

function deposit (account, amount){
	account.balance += amount;
}
	
function withdraw(account, amount) {
	account.balance -= amount;
}

function getBalance(account) {
	return account.balance;
}	

	
var geoffsAccount = createAccount(
	{balance: 100,
	 username: 'geoff01'}
);



