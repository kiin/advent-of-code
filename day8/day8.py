inp = open('day8.txt','r')
Lines = inp.readlines()

def findIT(pt):
    index = 0
    dupes = []
    acc = 0
    repl = []
    pos = []
    change = False
    while(True):
        if index == 630:
            return acc
        if index in dupes:
            if pt == 1:
                return acc
            if not change and len(repl) == 2:
                Lines[repl[1]] = repl[0]
            acc = 0
            change = True
            index = 0
            dupes = []
            repl = []
        else:
            dupes.append(index)

        com = Lines[index].split(' ')[0]
        op = Lines[index].split(' ')[1]

        if(com == "nop" and index not in pos and change):
            com = "jmp"
            change = False
            repl.append(Lines[index])
            repl.append(index)
            pos.append(index)
        elif(com == "jmp" and index not in pos and change):
            com = 'nop'
            change = False
            repl.append(Lines[index])
            repl.append(index)
            pos.append(index)


        if(com == 'acc'):
            if op[0] == '+':
                acc+=int(op[1:])
            else:
                acc-=int(op[1:])
        if(com == 'jmp'):
            if op[0] == '+':
                index += int(op[1:])
            else:
                index -= int(op[1:])
        else:
            index+=1

def main():
    print(findIT(1))
    print(findIT(2))

if __name__ == "__main__":
    main()
