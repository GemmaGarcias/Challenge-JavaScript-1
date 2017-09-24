
function multiples(){
	var numbers= ""
	var sum= 0
	for(var i=23; i<=500; i+=23){
		numbers += i + " "
		sum += i
	}
	console.log(numbers)
	console.log(sum)
}
multiples()