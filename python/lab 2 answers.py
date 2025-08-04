# num=int(input("enter interger number: "))

# if num%2==0:
#     print(f"{num}even")
# else:
#     print(f"{num}odd")


# if num>0:
#     print(f"{num} is +")
# elif num < 0:
#     print(f"{num} is -")
# else:
#     print("zero")


# if num%5==0:
#     print(f"{num} is divisble by5")
# else:
#     print(f"{num}what a loser, can't even be divided by 5")




start=int(input("starting num?"))
length=int(input("length"))
result=[start+i for i in range(length)]
print(result);