function shortcut(s1, s2) {
	let str = ``;
	if(s1.charAt(0) == '' || s2.charAt(0) == ''){
		return str;
	}
	else{
		str = `${s1.charAt(0).toUpperCase()+s2.charAt(0).toUpperCase()}`;
	}
return str;
	
}

// Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
