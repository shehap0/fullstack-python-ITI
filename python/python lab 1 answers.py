# vowels="aeiou"
# text=input("enter string: ")
# count=0

# for char in text.lower():
#     if char in vowels:
#         count += 1

# print("number of vowels: ", count)

# ######################33 


# text=input("enter string: ")
# count=text.count('iti')
# print("number of times 'iti' occurs:", count)


# # #################


# word=input("enter a word: ")
# vowels="aeiouAEIOU"
# brief_word=""

# for char in word:
#     if char not in vowels:
#         brief_word += char

# print("brief version:", brief_word)


# ##########################################


# text = input("enter string: ")
# print("positions of 'i' in the string:")
# for index in range(len(text)):
#     if text[index] == 'i':
#         print(index)


#############.

height=int(input("enter the height of the pyramid: "))

for i in range(1, height+1):
    print(' '*(height-i)+'*'*i)



