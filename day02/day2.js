const fs = require('fs');

function findIT(pt){
    try {
        const data = fs.readFileSync('day2.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        let count = 0;
        lines.forEach((line) => {
            let rule = line.split(':')[0].split(' ');
            let value = rule[0].split('-');
            let password = line.split(':')[1].trim();
            if(pt == 1){
                const out = password.split('').filter(c => c == rule[1]);
                if(out.length >= value[0] && out.length <= value[1]){
                    count++;
                }
            }
            if(pt == 2){
                 if((password[+value[0]-1] == rule[1]) != (password[+value[1]-1] == rule[1])){
                    count++;
                }
            }
        });
        return count;
    } catch (err) {
        console.error(err);
    }
}

console.log(findIT(1))
console.log(findIT(2))
