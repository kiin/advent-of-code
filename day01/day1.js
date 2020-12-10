const fs = require('fs');

function findIT(pt){
    try {
        const data = fs.readFileSync('day1.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        let answer;
        lines.every((n1) => {
            lines.every((n2) =>{
                if(pt == 1){
                    if(+n1 + +n2 == 2020){
                        answer = +n1 * +n2;
                        return false;
                    }
                }
                if(pt == 2){
                    lines.every((n3) =>{
                        if(+n1 + +n2 + +n3 == 2020){
                            answer = +n1 * +n2 * +n3;
                            return false;
                        }
                            return true;
                    });
                }
                return answer ? false : true;
            });
            return true;
        });
        return answer;
    } catch (err) {
        console.error(err);
    }
}

console.log(findIT(1));
console.log(findIT(2));
