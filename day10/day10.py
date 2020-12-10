inp = open('day10.txt','r')
Lines = inp.readlines()
adp = [int(i) for i in Lines]
adp.sort()

def part1():
    outlet = 0
    count1 = 0
    count3 = 1
    for j in adp:
        if outlet+1 == j:
            outlet = j
            count1+=1
        if outlet+3 == j:
            outlet = j
            count3+=1

    print(count1 * count3)


def main():
    part1()

if __name__ == '__main__':
    main()
