var result =""
function tablamultiplicar(){
	for (var i=1; i<=10; i++)
		for(var j=1; j<=10; j++)
			if ((i*j)%(i*10)===0){
				result += (i*j) + "\n"
			}
			else{
				result += (i*j) + "\t"
			}
	console.log(result)
}