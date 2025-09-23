let accountId = 1;
var accountName = "Checking";
const accountType = "Personal";

accountCity = "New York";

let accountState;

/*
Prefer not to use var, as it is function-scoped and can lead to unexpected behaviors.
Use let for variables that may change and const for variables that should remain constant.
*/

console.table({ accountId, accountName, accountType, accountCity, accountState });