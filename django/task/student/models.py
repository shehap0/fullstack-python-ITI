from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    gpa = models.DecimalField(max_digits=4, decimal_places=2)  # or FloatField if you prefer

    def __str__(self):
        return self.name
