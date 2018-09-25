module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let solution = false;
	for(let i = 0; i < str.length; i++) {
		let c = str[i];
		let p = arr[arr.length - 1];
 		for(let i = 0; i < bracketsConfig.length; i++) {
			if (p == bracketsConfig[i][0] && c == bracketsConfig[i][1]) {
				arr.pop();
				solution = true;
				break;
			}
		}
 		if (solution == false) {
 		arr.push(c);
 	    }
		solution = false;
	}
	return arr.length == 0;
}