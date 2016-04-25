var i = 0;
var countLimit = 8;

while (i<countLimit) {
	console.log('In While i : ' + i);
	i++;
}

for (i = 0; i < countLimit; i++) {
	console.log('In For i: ' + i);
}

//make a countDown func:
function countDown(startPoint, endPoint){
		console.log('starting point:' + startPoint);
		console.log('ending point; ' + endPoint);
	if (startPoint <= endPoint) {
		console.log('Your start number must be higher than the end number.');
	}
	for (i=startPoint; i>=endPoint; i--){

		console.log(i);
	}
}

countDown(9,1);