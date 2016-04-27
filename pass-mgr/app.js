console.log('pass-mgr starts now...');

var storage = require('node-persist'); 

storage.initSync();

//storage.setItemSync('name', 'andrew'); set this once and its saved.
var name = storage.getItemSync('name'); // name was saved previously

console.log('saved "name" is: ' + name);

// you can store pretty much anything. string, number, object, array...
//storage.setItemSync('accounts', [{  // this was done once.
//		username: "andrew",
//		balance:  0
//	}]
//);


// get accounts array and push on a new account.
var accounts = storage.getItemSync('accounts');
console.log('Saved accounts are:');
console.log(accounts);


//accounts.push({
//	username: "richgeoff",
//	balance:  4567
//});

// save using setitemsync
//storage.setItemSync('accounts', accounts); // then comment it out 
																					 // and run getitemsync to 
																					 //confirm they saved.

var test = storage.getItemSync('accounts');
console.log('test is:');
console.log(test);




