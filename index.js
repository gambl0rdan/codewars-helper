process.stdin.on('data', function(val){
	console.log("This is a message from the demo package")
	process.exit();
}
);
