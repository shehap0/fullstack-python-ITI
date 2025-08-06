from django.shortcuts import render

# Create your views here.

def student_list(request):
    students = [{'id': 1, 'name': 'shehap', 'gpa': 3.7},{'id': 2, 'name': 'shalaby', 'gpa': 3.4},{'id': 3, 'name': 'sonic', 'gpa': 3.9},]
    return render(request, 'student/index.html', {'students': students})