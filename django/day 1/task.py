class Person:
    def __init__(self, name, money, mood, healthRate):
        self.name = name
        self.money = money
        self.mood = mood
        self.healthRate = min(max(healthRate, 0), 100) 

    def sleep(self, hours):
        if hours==7:
            self.mood = "happy"
        elif hours<7:
            self.mood = "tired"
        elif hours>7:
            self.mood = "lazy"

    def eat(self,meals):
        if meals==3:
            self.healthRate=100
        elif meals==2:
            self.healthRate=75
        elif meals==1:
            self.healthRate=50

    def buy(self, items):
        self.money-=items*10
        
        

class Employee(Person):
    def __init__(self, name, money , mood, healthRate, id, car , email, salary, distanceToWork):
        super().__init__(name, money, mood, healthRate)
        self.id =id
        self.car=car
        self.email= email
        self.salary = salary
        self.distanceToWork = distanceToWork


    def work(self,hours):
        if hours==8:
            self.mood="happy"
        elif hours > 8:
            self.mood="tired"
        elif hours < 8:
            self.mood="lazy"

    def drive(self , distance, speed):
        print(f"driving {distance}km, {speed}km/h")
        self.car.run(speed,distance)

    def refuel(self , gasAmount=100):
        self.car.fuelRate+=gasAmount

    def send_mail(self , to):
        print(f"send mail to {to}:")




class Car:
    def __init__(self, name, fuelRate, speed):
        self.name = name
        self._fuelRate = 0
        self._Mspeed = 0
        self.fuelRate = fuelRate
        self.speed = speed
    
    @property
    def speed(self):
        return self._Mspeed

    @speed.setter
    def speed(self, value):
        if 0 <= value <= 200:
            self._Mspeed = value
        else:
            raise ValueError("speed must be between 0 and 200")



    @property
    def fuelRate(self):
        return self._fuelRate
    @fuelRate.setter
    def fuelRate(self, value):
        self._fuelRate = max(0, min(100, value))

    def run(self, speed, distance):
        self.speed = speed
        fuel_needed = distance / 10
        max_distance = self.fuelRate * 10

        if fuel_needed <= self.fuelRate:
            self.fuelRate-=fuel_needed
            self.stop(0)
        else:
            actual_distance = max_distance
            self.fuelRate = 0
            remaining_distance = distance - actual_distance
            self.stop(remaining_distance)

    def stop(self,remaining_distance):
        self._velocity=0
        if remaining_distance>0:
            print(f"you stopped with {remaining_distance}km left to destination.")
        else:
            print("you arrived at your destination.")







if __name__ == "__main__":
    my_car = Car("byd" , 5 , 60)
    emp = Employee("Shehap" , 999 , "normal" , 80 , 69 , my_car , "shehap@gmail.lol", 50000, 100)

    emp.sleep(9)
    emp.eat(3)
    emp.buy(1)
    emp.work(8)
    emp.send_mail("blablabla@gmail.com")
    
    
    
    emp.drive(40, 100)
    emp.refuel(10)
    emp.drive(60, 100)