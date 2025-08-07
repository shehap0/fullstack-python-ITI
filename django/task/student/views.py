import psycopg2
from django.shortcuts import render

def student_list(request):
    conn = psycopg2.connect(
    dbname="student",  # <-- your new DB name
    user="postgres",         # <-- most common default username is "postgres"
    password="123123",       # <-- your password
    host="localhost",
    port="5432"
)

    with conn.cursor() as cur:
        cur.execute("SELECT id, name, gpa FROM student")
        rows = cur.fetchall()

    conn.close()

    students = [{'id': row[0], 'name': row[1], 'gpa': row[2]} for row in rows]

    return render(request, 'student/index.html', {'students': students})