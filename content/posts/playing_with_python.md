---
title: Playing with Python
date: 2019-08-24
published: true
tags: ['python3', 'Programming', 'Software Engineering']
canonical_url: https://medium.com/@miltonmarma120/playing-with-python-8879797e10bb
description: "The main focus of this blog is to introduce Python to someone who already knows at least the basics of programming and would like to explore the world of Python 😍. So, If you are a completely new in programming then sorry mate! maybe this is not the right blog post for you. One more thing, we are using Python 3."
---

You heard that Python is a very cool programming language, right! So, why not take a look at it.
> The main focus of this blog is to introduce Python to someone who already knows at least the basics of programming and would like to explore the world of Python 😍. So, If you are a completely new in programming thenn sorry mate! maybe this is not the right blog post for you. One more thing, we are using Python 3.

![Photo by [Robert Collins](https://unsplash.com/@robbie36?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10000/0*PBmchF3mz6W2JIx8)*Photo by [Robert Collins](https://unsplash.com/@robbie36?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

### **Variables**

You don’t need to define the type of a variable in Python and don’t need to add a semicolon too.

```py
# int number
lucky_number = 7

# float number
book_price = 10.5

# string
book_name = "Harry Potter and the Goblet of Fire"

# bool
is_python_awesome = True

print(lucky_number)
print(book_price)
print(book_name)
print(is_python_awesome)
```

In the above code, the lucky_number variable is assigned with integer value 7 so Python will treat lucky_number as an int type and the same thing goes for other variables too.

The output of the above code is given below.

    7
    10.5
    Harry Potter and the Goblet of Fire
    True

But there is a catch! If you assign again lucky_number variable with a string or floating point number, Python won’t give you an error. Everything in Python is an object. So, it will just create a new object of string or floating point type and lucky_number variable will have a reference to that newly created object.

```py
# int number
lucky_number = 7
print(lucky_number)
print(type(lucky_number))

# float number
lucky_number = 101.101
print(lucky_number)
print(type(lucky_number))

# string
lucky_number = "My lucky number is Seven"
print(lucky_number)
print(type(lucky_number))
```

The output of the above code is given below. From the output, we clearly see that the type of lucky_number variable is changing with respect to the assigned value.

    7
    <class 'int'>
    101.101
    <class 'float'>
    My lucky number is Seven
    <class 'str'>

### **Taking Input**

```py
# string input
book_name = str(input("enter book name : "))

# int input
total_page_in_book = int(input("enter total page number : "))

# float input
book_price = float(input("enter book price : "))
print(book_name)
print(total_page_in_book)
print(book_price)
```

### **Conditional Statement**

The basic **if **statement in Python.

```py
is_python_awesome = True

if is_python_awesome:
    print("This will print when is_python_awesome is True")
else:
    print("This will print when is_python_awesome is False")
```

**If** statement with **and** **or **logic.

```py
num = int(input("enter a number : "))

if num % 3 == 0 and num % 5 == 0:
    print(f"{num} is divisible by 3 and 5")
elif num % 3 == 0 or num % 5 == 0:
    print(f"{num} is divisible by 3 or 5")
else:
    print(f"{num} is not divisible by 3 and 5")
```

### **Loop**

This while loop will print 1 to 10.

```py
# initializing number variable with 1
number = 1

while number <= 10:
    print(number)
    number += 1
```

This will print all the even number e.g. 2, 4, 6, 8, 10.

```py
number = 1

while number <= 10:
    if number % 2 == 0:
        print(number)
    number += 1
```

This for loop will print 1 to 10. Here I used [range](https://docs.python.org/3/library/stdtypes.html#range) function.

```py
for i in range(1, 11):
    print(i)
```

This will print all the odd number in the range e.g. 1, 3, 5, 7, 9

```py
for i in range(1, 11):
    if i % 2 != 0:
        print(i)
```

### **Function**

Functions don’t need to define a return type in Python.

```py
def add(first_number, second_number):
    result = first_number + second_number
    return result


ans = add(4, 5)
print(ans
```

### **List**

A List is like an array in other programming language but more versatile. It is used to store a list of values.

Let’s take a look at lists with different data types. Python list indexes also start from 0.

```py
# int list
prime_number_list = [2, 3, 5, 7, 13]

# float list
book_price_list = [10.5, 100.67, 250.5, 20.0]

# string list
favourite_game_list = ["pubg", "dota", "fifa", "cod"]

print(prime_number_list[0])  # it will print 2
print(book_price_list[2])  # it will print 250.5
print(favourite_game_list[1])  # it will print dota
```

You can also loop through the list easily. This will print all the prime number in the **prime_number_list**.

```py
# int list
prime_number_list = [2, 3, 5, 7, 13]

for prime_number in prime_number_list:
    print(prime_number)
```

### **Tuple**

A Tuple is similar to list but Tuple is **immutable**.

*“Wait! What is **immutable** ?”*

In Object Oriented Programming **mutable** objects can be changed after it is created and **immutable** objects can’t be changed after creation.

```py
# int tuple
prime_numbers = (2, 3, 5, 7, 13)

# it will print 2, 3, 5, 7, 13
for prime_number in prime_numbers:
    print(prime_number)

# mixed tuple
mixed_tuple_demo = (100, "hello", 'a', 10.5)

# it will print 100, hello, a, 10.5
for mixed_tuple in mixed_tuple_demo:
    print(mixed_tuple)
```

### **Set**

Set in Python is a data structure equivalent to sets in mathematics. Every element in Set is unique (e.g. duplicate element is not allowed) and must be **immutable. **Though all the elements in Set must be **immutable** Set itself is **mutable** e.g you can add and remove elements from a Set.

Set is an **unordered** collection. This means that if you loop through the set, elements may not appear as your input order or in which order you initialized the set.

*“But Why??? It doesn’t look that much cooler!”*

Calm down, folk! 😊 This allows checking if an element belongs to a set faster than just going through all the elements of the set.

```py
int_set = {5, 6, 1, 3, 9}
# it will print 1, 3 , 5, 6, 9
print(int_set)

mixed_set = {'a', 4, 1, 'abc', 2.0}
# it will print 'a', 1, 2.0, 'abc', 4
print(mixed_set)

duplicate_value_set = {1, 5, 1, 5, 6}

# it will print 1, 5, 6
for element in duplicate_value_set:
    print(element)
```

In duplicate_value_set there are some duplicate values but when we are printing we are seeing just unique elements because the set doesn’t allow duplicate elements.

### **Dictionary**

Dictionary is a key: value data structure in Python. Each key is mapped to a value and each key is unique. You can get the value using the key.

```py
personal_dictionary = {'name': 'milton', 'password': 'abc123', 'country': 'Bangladesh'}

# it will print milton
print(personal_dictionary.get('name'))

# it will print Bangladesh
print(personal_dictionary['country'])

# it will print abc123
print(personal_dictionary.get('password'))

# updating password value
personal_dictionary['password'] = 'xyz123'

# it will print xyz123
print(personal_dictionary.get('password'))

# it will print all key value pair in dictionary
for key, value in personal_dictionary.items():
    print('key : ', key, ' value : ', value)
```

***“But Hey !!! Where is our favorite main function???”***

At first, we have to learn about a particular variable, **__name__** that Python interpreter defines before executing the source code. __name__ is automatically set to **__main__ **if the program is executed by itself. If the python source file is imported as a [module,](https://docs.python.org/3/tutorial/modules.html) python interpreter sets the __name__value to that module name.

```py
print("i love python.")
print("__name__ value : ", __name__)
```

The output of the above code when the source file is directly executed.

    i love python.
    __name__ value : __main__

Python doesn’t have a defined entry point (e.g. main function) like C++, Java. It executes a source file sequentially. We are using **if **statement to create the **main** function which will be executed if the file is loaded as the "__main__" module rather than as a library in another module.

Okay. Let’s look at an example with the main function.

```py
def add(first_number, second_number):
    result = first_number + second_number
    return result


def print_welcome():
    print("Welcome to main function")


def main():
    print_welcome()
    first_number = int(input("input first number : "))
    second_number = int(input("input second number : "))
    result = add(first_number, second_number)
    print(result)


if __name__ == '__main__':
    main()
```

### Variable Length Argument

Variable length argument means a function can receive any number of arguments.

First, let’s take a look at some positional and keyword argument example to get a clear idea.

    foo(1, 2)          # two positional argument 1 and 2
    foo(city='Dhaka')  # one keyword argument with keyword city
    foo(5, a=6)        # one positional argument, one keyword argument

In the below code *args can receive any number of positional arguments and the type of *args will be tuple.

```py
def my_sum(*args):
    total_sum = 0
    for number in args:
        total_sum += number
    return total_sum


result = my_sum(1, 2)
print(f"sum : {result}")

result = my_sum(1, 2, 3)
print(f"sum : {result}")
```

Python first fills the slots given formal arguments by passing positional actual arguments. Any leftover positional arguments are received by a variable prefixed with *.

In the below code, lucky_number will get the first argument of the my_args function.

```py

def my_args(lucky_number, *other_numbers):
    print(f"lucky number: {lucky_number}")
    print(f"other numbers: {other_numbers}")


my_args(1, 2, 3, 4)
my_args(7, 10, 2)
```

The output of the above code.

    lucky number: 1
    other numbers: (2, 3, 4)
    lucky number: 7
    other numbers: (10, 2)

In the below code **kwargs can receive any number of keyword arguments and the type of **kwargs will be dictionary.

```py

def my_keyword_arguments(**kwargs):
    print(f"type of keyword argument: {type(kwargs)}")
    print(kwargs)


my_keyword_arguments(first_name='John', last_name='Doe')
my_keyword_arguments(first_name='John', last_name='Doe', address='Dhaka')
```

### **Class**

Here we are creating a circle class and using __init__()** **method to initialize the radius value. __init__() is a special method which is called after a new object is created.

In Python, we have to pass the class instance as the first parameter of a method and the below code we named it as **self**.

***self **is not a reserved keyword in Python, it’s just the convention that everyone follows.*

```py

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return 3.1416*self.radius*self.radius


my_circle = Circle(4)
my_circle_area = my_circle.get_area()
print(my_circle_area)
```

Notice that get_area method has a parameter named self but we didn’t pass any value for self when calling my_circle.get_area() because whenever an object calls its method Python automatically passes the object instance as the first argument.

The term **method **and **function **is not the same** **in Python. Methods are associated with object instance or classes and they need to pass the object instance as the first argument.

Now let’s learn about **class variable** and **instance variable**.

Class variables are shared by all the instances of a class.

Instance variables are unique to all instance of a class and defined inside a class method.

In the below code, we removed the hard coded value of pi with a class variable named pi So in every Circleclass instance the value of pi will be 3.1416.

```py
class Circle:
    pi = 3.1416  # class variable

    def __init__(self, radius):
        self.radius = radius  # instance variable

    def get_area(self):
        return self.pi*self.radius*self.radius


my_circle = Circle(4)
my_circle_area = my_circle.get_area()
print(my_circle_area)
```

> *If you want to change the value of a class variable then you have to do it with the notation ClassName.ClassVariableName. Otherwise, you will end up creating a new instance variable with the same name as the class variable.*

    print(my_circle.pi) # it will print 3.1416
    my_circle.pi = 5    # it creates a new instance variable named pi
    print(my_circle.pi) # it will print 5
    print(Circle.pi)    # it will print 3.1416

When you try to access a variable from an instance of a class then it first looks at its **instance [namespace](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)**. If it finds the variable then returns the associated value. If not found then it goes to the **class namespace**

so when you do print(my_circle.pi) the variable pi won’t be found in **instance namespace**, it will be found in the **class namespace**. So it will give 3.1416 as output.

After doing my_circle.pi = 5 , a new instance variable is created and assigned with value 5. So now print(my_circle.pi) will give 5 as the variable pi will be found in **instance namespace.**

### Higher Order Function

A higher order function is a function that does at least one of the following:

* takes one or more functions as argument

* returns a function as its result

I have borrowed the definition from [Wikipedia](https://en.wikipedia.org/wiki/Higher-order_function) 😊

Now we have to learn a little bit about [first-class](https://en.wikipedia.org/wiki/First-class_citizen) citizens or objects in the programming language. First-class objects or citizens in the programming language is an entity which supports all the operations generally available to other entities such as being passed as an argument, returned from a function, modified, and assigned to a variable.

In Python, functions are treated as the first-class object. So, you can pass one or more functions as argument, return a function and assign a function to a variable.

Let’s look at an example of a function which takes another function as argument. In the below example, if we pass increment_by_one function to my_counter then the number will be incremented by one and if we pass decrement_by_one the number will be decremented by one.

```py
def increment_by_one(num):
    return num + 1


def decrement_by_one(num):
    return num - 1


def my_counter(f, num):
    result = f(num)
    return result


incremented_num = my_counter(increment_by_one, 10)
print(incremented_num)  # it will print 11

decremented_num = my_counter(decrement_by_one, 10)
print(decremented_num)  # it will print 9
```

In the below example, get_proper_counter function is returning a function (increment_by_one or decrement_by_one) according to counter_type and we are assigning the returned function to a variable. Then we can use the variable as function.

```py
def increment_by_one(num):
    return num + 1


def decrement_by_one(num):
    return num - 1


def get_proper_counter(counter_type):
    if counter_type == 'inc':
        return increment_by_one
    elif counter_type == 'dec':
        return decrement_by_one
    else:
        error_message = counter_type + ' is not a valid counter type'
        raise ValueError(error_message)


increment_by_one_counter = get_proper_counter('inc')
incremented_number = increment_by_one_counter(10)
print(incremented_number)  # it will print 11

decrement_by_one_counter = get_proper_counter('dec')
decremented_number = decrement_by_one_counter(10)
print(decremented_number)  # it will print 9
```

### Closure

To learn closure, we have to learn about **nested function** in Python first.

A function that is defined inside another function is called a nested function. Nested functions can access the variables of the enclosing scope. In the below example, outer_function is the enclosing function, message is the enclosing variable and inner_function is the nested function. inner_function is accessing the non-local variable message and printing it’s value.

```py

def outer_function():
    message = "hello world"

    def inner_function():
        print(message)
    inner_function()


outer_function()  # This will print Hello World
```

A Closure is a function object that remembers values in enclosing scopes even if they are not present in memory. Now let’s update the above code to a closure.

In the below code, even if we deleted the outer_function the inner function can print the value of the message variable e.g. ‘“hello world”. Notice that we are now returning inner_function .

```py
def outer_function():
    message = "hello world"

    def inner_function():
        print(message)
    return inner_function


inner = outer_function()
del outer_function  # deleting outer function
inner()  # it will print hello world
```

In the below code, multiplicand value is attached to multiplier function.

```py
def make_multiplier_of(multiplicand):
    def multiplier(multiplier_value):
        return multiplicand * multiplier_value
    return multiplier


multiply_by_5 = make_multiplier_of(5)
result = multiply_by_5(3)
print(result)  # this will output 15

result = multiply_by_5(4)
print(result)  # this will output 20

multiply_by_10 = make_multiplier_of(10)
result = multiply_by_10(3)
print(result)  # this will output 30
```

### Decorator

Python decorator is the function that receives a function as an argument and returns another function as the return value. Decorators are called before the definition of a function you want to decorate.

In the below code capitalize is a decorator. It takes hello_python function as argument and returns capitalized value.

```py
def capitalize(func):
    def convert_to_uppercase():
        result = func()
        return result.upper()
    return convert_to_uppercase


def hello_python():
    return "hello python"


capitalized_hello = capitalize(hello_python)
print(capitalized_hello())  # output:  HELLO PYTHON
```

We can use the @ symbol along with the name of the decorator function and place it above the definition of the function to be decorated.

```py
def capitalize(func):
    def convert_to_uppercase():
        result = func()
        return result.upper()
    return convert_to_uppercase


@capitalize
def hello_python():
    return "hello python"


print(hello_python())  # output: HELLO PYTHON
```

Decorators can also take argument. In the below code, formatting decorator is taking lower_case argument and returns the result according to it.

```py
def formatting(lower_case=False):
    def wrapper(func):
        def convert_to_appropriate_case():
            if lower_case:
                result = func()
                return result.lower()
            else:
                result = func()
                return result.upper()
        return convert_to_appropriate_case
    return wrapper


@formatting(lower_case=True)
def hello_python():
    return "Hello Python"


print(hello_python())  # output: hello python
```

A function can be decorated many times. But the order of decoration affects how the final output will be.

```py
@a
@b
@c
def hello_python():
    return "hello python"
```

here, the interpreter is just doing hello_python = a(b(c(hello_python)))

If you are interested in algorithms and data structure implemented using Python then you can look at this Github [repository](https://github.com/TheAlgorithms/Python).

*I am also learning Python as a beginner and don’t familiar with many advanced and intermediate-level Python features and concepts. So, if I made any mistake please feel free to correct me and put your suggestions in the comment section.*
