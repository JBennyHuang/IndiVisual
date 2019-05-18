import sys

# note that the arguments are picked up from stdin by calling sys.argv
def main():
    args = sys.argv
    x = int(args[1])
    y = int(args[2])
    print(add(x, y))

def add(x, y):
    return x+y

main()