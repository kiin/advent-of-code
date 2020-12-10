inp = open('day9.txt','r')
Lines = inp.readlines()

def findIT(pt):
    start = 0
    end = 25
    per = 25
    goto = Lines[per]
    while(True):
        finish = True
        sample = Lines[start:end]
        for v in sample:
            for v2 in sample:
                if v != v2:
                    if int(v) + int(v2) == int(goto):
                        finish = False

        if finish:
            if pt == 1:
                return int(goto)
            incr = 0
            leng = len(Lines)
            lol = []
            for i in range(incr, leng, 1):
                count = int(Lines[i])
                lol.append(int(Lines[i]))
                for p in range((i+1), leng, 1):
                    count+=int(Lines[p])
                    lol.append(int(Lines[p]))
                    if count > int(goto):
                        incr+=1
                        i = incr
                        lol = []
                    if count == int(goto):
                        lol.sort()
                        return lol[0] + lol[len(lol)-1]

        else:
            per+=1
            goto = Lines[per]
            start += 1
            if end+1 < len(Lines)-1:
                end+=1
            else:
                end += 1


def main():
    print(findIT(1))
    print(findIT(2))


if __name__ == '__main__':
    main()
