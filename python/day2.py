# string 
# vowels 
# count 
# loop over string characters to check if character is vowel -> count +=1
# print count 

# sentence = "i love iti"
# sentence = input ("enter a sentence to check count of vowels : ") # reads any input a string
# vowels = "aeiouAEIOU"
# count = 0 
# for character in sentence:
#     if character in vowels :
#         count+=1
# print ("the count of vowels is : ",count )

# num 
# if num dividable by 2 -> even , else -> odd



# num = input ("Enter number : ") # num = "52" 
# # casting from data type to another 
# if num.isdigit():
#     num = int (num) # num = 52
#     if num % 2 == 0:
#         print ("the number is even")
#     else :
#         print ("the number is odd ")
# else:
#     print ("you must enter a number :(")



# num = input ("Enter number : ") # num = 5
# while not num.isdigit():
#     num = input ("Enter number : ")
# num = int (num)
# if num % 2== 0 :
#     print ("the number is even ")
# else :
#     print ("the number is odd ")



# logical operators -> 
# not Truthy -> False 
# not falsy -> True
#   and , or -> evaluates the value that ends the operations
# boolean -> truthy : True , falsy : False 
# numbers -> truthy : 1 , -1 , -1000 , 10000 ( any number positive or negative except 0) , falsy:0
# string -> truthy : any string even if it is a collection of spaces "   " , "hi", falsy: ""
#  1 is the only truthy value equals = True , 0 is the only falsy value equals False 
# print ( 5 and  10  and 100 ) # 100
# print ( 5 and "" and 100) # ""
# print (10 or 100 or 0) # 10
# print ( 0 or "") # ""
# print ("" or 0 ) # 0
# print ( 5 and 7) # 7
# print ( 0 and 100 )# 0
# print ( 0 or 100 ) # 100
# print ( 100 or 0 ) # 100
# print ("hi" and "") # ""
# print ("hi" or "") # "hi"
# num = input ("enter new number : ")
# count = 0
# while  num :
#     count+=num
#     num = input ("enter new number : ")
#     # print ("hello")


# # loop ( for , while) -> else
# num = input ("enter new number : ")
# count = 0

# while int( num) :
#     count+=int (num)
#     num = input ("enter new number : ")
# else: # to check if there is no break fom the loop 
#     print ("ay7aga")
# print (count)

# for i in range ( 0 , 6): # 0 , 1 ,2 ,3, 4 , 5
#     if i == 2:
#         break
#     print (i)
# else :
#     print ("no break from the loop ")

# template = "My name is {name}. I graduated from {faculty} "
# mohammed = template.format (name ="Mohammed" ,faculty =  "cs")
# print (mohammed)
# hamas = template.format (faculty = "IT",name =  "Hamas")
# print (hamas)
# student_name = "Ali "
# student_faculty = "CS"
# print ("student name : " , student_name , "student faculty : " , student_faculty)
# print (f"student name : {student_name} , student faculty : {student_faculty}") # f formatting
# print (f"num = {4+5}") 
# print (f"num = {4 and 5}") 
# # num = 1==True ? 1 : 0
# a = 50
# b = 10
# print (f"min value : {a if a< b else b}")

