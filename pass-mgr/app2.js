console.log('pass-mgr2 starts now...');
var storage = require('node-persist'); 

storage.initSync();

//account object
/*
account       account that password is for. Like facebook, for examle 
username      username on the account
password      password on the account
*/


function createAccount(account) { 
  var accounts = storage.getItemSync('accounts'); 
  if (typeof accounts === 'undefined') {
    set accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);
  return account; 
}

function getAccount(accountName) {
  var matchedAccount;
  var accounts = storage.getItemSync('accounts'); 
  
  accounts.forEach(function(acc) {
			if (acc.name === accountName) {
				matchedAccount = acc;
			}	
  }); 
  return matchedAccounts;
}

createAccount({
  name: 'Facebook',
  username: 'someone@gmail.com',
  password: 'Password123'
})




