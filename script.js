// complete the given function

function palindrome(str){
	var string= string.toUpperCase();
	let start=0;
	let end=string.length()-1;
	while(start<=end){
		if(string.charAt(start)!= string.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
