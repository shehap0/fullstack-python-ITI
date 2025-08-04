# iheritance  , encapsulation , polymorphism 
class Human :
    def __init__(self , name , nationality):
        self.name = name 
        self.nationality = nationality
    def eat(self):
        print ("Human is eating")
        
class Employee (Human) : # ( parent , base  , super) class 
    def __init__(self , name , nationality, age  , gender): # ("shimaa" , 25 , "female" )
        Human.__init__(self , name ,nationality)
        self.age = age  # self.age = 25 # public instance variable 
        self.gender = gender # self.gender = "female"
    def work(self):
        print ("Employee is working")
        
class Instrucrtor (Employee ): # (child , derived , sub) class
    def __init__(self , name ,nationality, age  ,gender , dept): # ("shimaa" , 25 , "female" , "OS")
        Employee.__init__(self , name , nationality , age , gender) #  ("shimaa" , 25 , "female" )
        self.__dept_employed_in = dept # self.dept_employed_in = "OS" # private instance variable ( accessed (set , get) only inside the class )
    def set_dept(self , dept):
        self.__dept_employed_in = dept
    def get_dept(self):
        return self.__dept_employed_in
    def work(self , subjects): # overriding parent function 
        Employee.work(self)
        print (f"Instructor {self.name} teaches this list of courses {subjects}")
    def __str__(self): # dander method
        return "Instructor object"
    
class HR (Employee):
    def __init__(self , name , nationality,age , gender , dept ):
        # Employee.__init__(self , name , age , gender)
        super().__init__(name , nationality , age , gender)
        self.dept_responsible_for = dept
    def work(self , Instructors_to_employ ):
        print(f"HR {self.name} employes {Instructors_to_employ}")

mohammed = Instrucrtor ("mohammed","Egyptian" , 25 , "male" , "OS")
print (type(mohammed))
print(isinstance(mohammed, Instrucrtor))
print(isinstance(mohammed, Employee))
mohammed.work(["c++" , "Python"])
mohammed.eat()
mohammed.set_dept("Open Source ")
print (mohammed.get_dept())
print(mohammed.name)
mohammed.__dept_employed_in = "Software Engineerig"
print (mohammed.__dept_employed_in) # Software Engineerig 
print (mohammed.get_dept())# Open Source

 
x = 5 
x = "shimaa" # overwrites 
def sum():
    pass
def sum(x): # overwrites
    pass
sum(1)