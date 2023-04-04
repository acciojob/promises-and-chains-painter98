//your JS code here. If required.
function execute(){
	let age = document.getElementById("age").value;
	let name = document.getElementById("name").value;
	
	let promise = new Promise((resolve,reject) => {
		setTimeout(function(){
			if(age>=18) resolve(`Welcome, ${name}. You can vote.`);
			else reject(`Oh sorry ${name}. You aren't old enough.`);
		},4000);
	})
	promise.then(data => {
		document.getElementById('result').innerText=data;
	}).catch(data => {
		document.getElementById('result').innerText=data;
	});
}
