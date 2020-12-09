file1 = open('day7.txt', 'r')
Lines = file1.readlines()

def part1():
    count = 0
    par = ["shiny gold"]
    search = True
    while(search):
        mark = True
        for bag in par:
            for line in Lines:
                if bag in line:
                    toIn  = line[0:line.find("bags")-1];
                    if toIn not in par:
                        par.append(toIn)
                else:
                    mark = False;
        if not mark:
            search = False;
    return len(par)-1


def main():
    print("Advent of Code!")
    print(part1())

if __name__ == "__main__":
    main()

