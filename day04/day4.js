const fs = require('fs');

const data = fs.readFileSync('day4.txt', 'UTF-8');
const lines = data.split(/\r?\n/);
const acc = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];


function findIT(pt){

    let count2 = 0, count = 0;
    let single = [];
    let passport = [];
    for(let i = 0, len = lines.length; i < len; i++){
        if(lines[i] == ''){
            single = [];
            count2  = 0;
        }else{
            single[single.length] = lines[i];
        }
        for(let j = 0,len2 = acc.length; j < len2; j++){
            if(lines[i].includes(acc[j]))
                count2+=1;
        }
        if(count2 == 7 && (lines[i+1] == '' || i == lines.length-1)){
            passport[passport.length] = single;
            count+=1;
        }
    }
    if(pt == 2){
        for(let i = 0, len = passport.length; i < len; i++){
            let out;
            out = false;
            for(let j = 0, len2 = passport[i].length; j < len2; j++){
                let sp = passport[i][j].split(' ');
                for(let k = 0, len3 = sp.length; k < len3; k++){
                    let n = sp[k].split(':')[0];
                    let v = sp[k].split(':')[1];
                    switch (n) {
                        case 'iyr':
                            out = v.length == 4 && +v >= 2010 && +v <= 2020 ? out : true 
                            break;
                        case 'byr':
                            out = v.length == 4 && +v >= 1920 && +v <= 2002 ? out : true 
                            break;
                        case 'eyr':
                            out = v.length == 4 && +v >= 2020 && +v <= 2030 ? out : true 
                            break;
                        case 'hgt':
                            if(v.includes('cm')){
                                out = +v.replace('cm','') >= 150 && +v.replace('cm','') <= 193 ? out : true;
                            }
                            else if(v.includes('in')){
                                out = +v.replace('in','') >= 59 && +v.replace('in','') <= 76 ? out : true;
                            }else{
                                out = true;
                            }
                            break;
                        case 'hcl':
                            let patt = new RegExp("^#([0-9]|[a-f]){6}");
                            out = patt.test(v) ? out : true;
                            break;
                        case 'ecl':
                            out = ['amb','blu','brn','gry','grn','hzl','oth'].includes(v) ? out : true;
                            break;
                        case 'pid':
                            out = v.length == 9 ? out : true 
                            break;
                        default:
                            break;
                    }
                }
            }
            if(out)
                count-=1;
        }
    }
    return count;
}


console.log(findIT(1));
console.log(findIT(2));
