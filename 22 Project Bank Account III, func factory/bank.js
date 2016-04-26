var accounts = [];

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
	if (typeof amount === 'number') {
		account.balance += amount;	
	} else {
		console.log('Invalid amount. Deposit failed.')
	}
}
	
function withdraw(account, amount) {
	if (typeof amount === 'number') {
		account.balance -= amount;	
	} else {
		console.log('Invalid amount. Deposit failed.')
	}
}

function getBalance(account) {
	return account.balance;
}	

function makeBalanceFactory(account){
	return function(){
		return account.balance;
	}
}

var geoffsAccount = createAccount(
	{username: 'geoff01',
	balance: 100}
);

console.log(geoffsAccount.balance);
deposit(geoffsAccount,8);
withdraw(geoffsAccount,34);
console.log(geoffsAccount.balance);

var geoffsBalance = makeBalanceFactory(geoffsAccount);
console.log(geoffsBalance());
deposit(geoffsAccount,8);
withdraw(geoffsAccount,34);
console.log(geoffsBalance());




