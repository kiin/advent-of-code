const fs = require('fs');

const data = fs.readFileSync('day6.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

function findIT(pt){
	let ans = [];
	let count = 0;
	let group = 0;
	for(let i = 0, leni = lines.length; i < leni; i++){
		const a = lines[i].split('');
		for(let j = 0, lenj = a.length; j < lenj; j++){
			if(pt === 2){
				ans[ans.length] = a[j];
			}else{
				if(!ans.includes(a[j]))
					ans[ans.length] = a[j];
			}
		}
		if(lines[i] === ''){
			if(pt === 2){
				let temp = [];
				for(var k = 0, lenk = ans.length; k < lenk; k++){		
					if(ans.filter(n => n === ans[k]).length === group && !temp.includes(ans[k])){
						count++;
					}		
					temp[temp.length] = ans[k];	
				}
			}
			if(pt === 1){
				count+= ans.length;
			}	
			ans = [];
			group = 0;
		}else{
			group++;
		}
	}
	return count;
}

console.log(findIT(1));
console.log(findIT(2));
