def fizzbuzz(number):
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return str(number)

def reverse_string(s):
    return s[::-1]


def collect_names_and_emails():
    names = {}

    while True:
        name = input("Enter your name (or type 'done' to finish): ").strip()

        if name.lower() == "done":
            break

        if name == "" or name.isdigit():
            print("Invalid name. Try again.")
            continue

        # Group name by its first letter
        first_letter = name[0].lower()
        if first_letter not in names:
            names[first_letter] = []
        names[first_letter].append(name)

        # Ask for email
        email = input("Enter your email: ").strip()

        # Basic email validation
        if "@" in email and "." in email and len(email.split('@')[0]) > 0 and len(email.split('@')[1]) > 3:
            print("Valid email ✅")
        else:
            print("Invalid email ❌")

        print(f"User Info → Name: {name}, Email: {email}")
        print("-" * 30)

    return names


# ---------------------
# Example Test Section
# ---------------------

# Task 1
print("=== FizzBuzz ===")
num = int(input("Enter a number: "))
print(fizzbuzz(num))

# Task 2
print("\n=== Reverse String ===")
user_string = input("Enter a string: ")
print("Reversed:", reverse_string(user_string))

# Task 3
print("\n=== Collecting Names and Emails ===")
names_dict = collect_names_and_emails()
print("\nFinal grouped names dictionary:")
print(names_dict)
