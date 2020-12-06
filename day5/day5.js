const fs = require('fs');

const data = fs.readFileSync('day5.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

function findIT(pt){
	let id = 0;
	let list = [];
	for(let i = 0, len = lines.length; i < len; i++){
		let temp;
		let tic = lines[i].split('');
		let row = Array(128);
		let col = Array(8);
		for(let k = 0, lenk = row.length; k < lenk; k++)
			row[k] = k;
		for(let x = 0, lenx = col.length; x < lenx; x++)
			col[x] = x;

		for(let j = 0, len2 = tic.length; j < len2; j++){
			if(tic[j] === 'F')
				row = row.slice(0,Math.floor(row.length/2));
			if(tic[j] === 'B')
 				row = row.slice((row.length/2),row.length);
			if(tic[j] === 'R')
				col = col.slice((col.length/2),col.length);
			if(tic[j] === 'L')
				col = col.slice(0,Math.floor(col.length/2));
		}
		temp = (row[0] * 8) + col[0];	
		if(pt === 2){
			list[list.length] = temp;
		}else{
			id = temp > id ? temp : id;
		}
	}
	if(pt === 2){
		list = list.sort((a, b) => a - b);
		return list.reduce((a,n,i) => a = n+1 != list[i+1] && i != list.length-1 ? n+1 : a);
	}
	return id;
}

console.log(findIT(1));
console.log(findIT(2));
