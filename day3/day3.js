const fs = require('fs');

function build(s){
    const data = fs.readFileSync('day3.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    let m = [];
    for(let i = 0, len = lines.length; i < len; i++){
        m[m.length] = lines[i].repeat(s).split('');
    }
    return m;
}

function findIT(c){
    let tot = 1;
    let add = 1;
    let m = build(add);
    for(let i = 0, len = c.length; i < len; i++){
        let count = 0;
        let s1 = c[i][0], s2 = c[i][1];
        while(s2 < m.length){
            if(s1 >= m[s2].length)
                m = build(add+=1);
            
            if(m[s2][s1] == "#")
                count+=1;
                
            s1 += c[i][0];
            s2 += c[i][1];
        
        }
        tot = tot * count;
    }
    
    return tot;
}

console.log(findIT([[3,1]]));
console.log(findIT([[1,1],[3,1],[5,1],[7,1],[1,2]]));


