inp = open('day9.txt','r')
Lines = inp.readlines()

def findIT(pt):
    start = 0
    end = 25
    goto = int(Lines[end])
    while(True):
        finish = True
        sample = Lines[start:end]
        for v in sample:
            for v2 in sample:
                if v != v2:
                    if int(v) + int(v2) == goto:
                        finish = False
        if finish:
            if pt == 1:
                return goto
            leng = len(Lines)
            lol = []
            for i in range(0, leng, 1):
                count = int(Lines[i])
                lol.append(int(Lines[i]))
                for p in range((i+1), leng, 1):
                    count+=int(Lines[p])
                    lol.append(int(Lines[p]))
                    if count > goto:
                        lol = []
                    if count == goto:
                        lol.sort()
                        return lol[0] + lol[len(lol)-1]
        else:
            end+=1
            goto = int(Lines[end])
            start += 1


def main():
    print(findIT(1))
    print(findIT(2))


if __name__ == '__main__':
    main()
