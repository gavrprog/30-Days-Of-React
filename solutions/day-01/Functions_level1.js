function generateHash(length){
	let hashString = '';
	for(let i = 0; i < length; i++){
		hashString += String.fromCharCode(Math.floor(48 + Math.random() * 74));//table UNICODE 48-122
	}
    return hashString
}
console.log(generateHash(10))

function generateString(length){
    const symbolArr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let randomString = "";
    for (let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * symbolArr.length);
        randomString += symbolArr[index];
    }
    return randomString;
    }
console.log(generateString(10))