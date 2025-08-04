def string_without_vowels (sentence): # sentence = "i love iti"
    sentence_without_vowels = [char for char in sentence if char.lower() not in "aeiou"]
    sentence_without_vowels= "".join(sentence_without_vowels)
    return sentence_without_vowels # returns value : "lv t"
def take_sentence():
    sentence = input ("enter sentence  : ")
    return sentence


# print(string_without_vowels("i love iti ") ) # lv t 
# print (take_sentence ())
# entered_sentennce = take_sentence() # i love django 
# print (string_without_vowels(entered_sentennce)) 
# print (sentence_without_vowels)
# def outer():
#     name = "outer"
#     def fun ():
#         print (name) # fun
# name = "global"
# print (name) # global
# fun()
# print (name) # global




def outer():
    name = "outer"
    def fun ():
        global name , x 
        name = "fun"
        x = "x"
        local_var  = "local var"
        print (local_var) # local var
        print (name) #  fun
    print (name)  # outer
    fun()
    print (name) # outer
name = "global"
print (name) # global
print (x) # Error undefined 
outer()
print (name) # fun
print (x) # x
