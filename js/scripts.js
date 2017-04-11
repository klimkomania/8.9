function drawTree(n) {
	for ( var i = 1; i < n; i++) {
		var star = "*";
		for (var j = i; j < i*2-1; j++) {
           star = star + "*";
		}
		console.log(star);
	}
}
drawTree(10);