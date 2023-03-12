export const questions = [
    {
        id: "question1",
        question: "What is python?",
        options: [
            "A low level programming Language",
            "A high level programming Language",
            "A low level scripting Language",
            "A high level scripting Language",
        ],
        answer: 4,
        explanation: "A scripting language is one that is interpreted. Python is an interpreted language. Python uses an interpreter to translate and run its code. Hence Python is a scripting language."
    },
    {
        id: "question2",
        question: "What is the file extension of python files?",
        options: [
            ".python",
            ".py",
            ".pyi",
            ".code"
        ],
        answer: 2,
        explanation: "The file extension for python files is '.py'",
    },
    {
        id: "question3",
        question: "Which of there are valid variable names?",
        options: [
            "apple$1",
            "21apple",
            "apple 23",
            "apple_23",
        ],
        answer: 4,
        explanation: " <b>apple_23</b> is a valid variable name because it doesn't start with numbers, doesn't have any special characters such as [$#@!%^&*] and has no spaces."
    },
    {
        id: "question4",
        question: "What is the name of this operator: '==' ?",
        options: [
            "Assignment Operator",
            "Equivalence Operator",
            "Equal Operator",
            "Inequality Operator",
        ],
        answer: 2,
        explanation: "The name of this operator '==' is the equivalence operator because it tests if 2=two or more values are equal to each other",
    },
    {
        "id": "question5",
        "question": "What is the correct way to define a Python function?",
        "options": [
          "def function_name()",
          "function function_name()",
          "function_name() { }",
          "function_name() :"
        ],
        "answer": 1,
        "explanation": "In Python, you define a function using the `def` keyword, followed by the function name, a set of parentheses, and a colon. For example: `def function_name():`"
      },
      {
        "id": "question6",
        "question": "What is the correct way to end a Python statement?",
        "options": [
          ";",
          ".",
          "!",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "In Python, you do not need to end a statement with a semicolon like you do in some other programming languages. However, you can use a semicolon to put multiple statements on the same line if you want to."
      },
      {
        "id": "question7",
        "question": "Which of the following is not a Python data type?",
        "options": [
          "int",
          "float",
          "bool",
          "char"
        ],
        "answer": 4,
        "explanation": "The Python data types include int (integer), float (floating-point number), bool (boolean value), and str (string). There is no data type called `char` in Python."
      },
      {
        "id": "question8",
        "question": "What is the correct way to check if a number is odd in Python?",
        "options": [
          "if num % 2 == 1:",
          "if num % 2 == 0:",
          "if num % 2 == True:",
          "if num % 2 == False:"
        ],
        "answer": 1,
        "explanation": "To check if a number is odd in Python, you can use the modulus operator `%` to determine if the remainder of the number divided by 2 is not equal to 0. For example: `if num % 2 != 0:`"
      },
      {
        "id": "question9",
        "question": "What is the correct way to define a list in Python?",
        "options": [
          "list_ = [1, 2, 3]",
          "array = {1, 2, 3}",
          "set_ = (1, 2, 3])",
          "list_ = '1, 2, 3'"
        ],
        "answer": 1,
        "explanation": "In Python, you can define a list using square brackets and a set of comma-separated values. For example: `list = [1, 2, 3]`"
      },
      {
        "id": "question10",
        "question": "What is the difference between a tuple and a list in Python?",
        "options": [
        "A tuple is mutable, while a list is immutable.",
        "A tuple is ordered, while a list is unordered.",
        "A tuple cannot contain strings, while a list can.",
        "A tuple can only contain integers, while a list can contain any data type."
        ],
        "answer": 1,
        "explanation": "In Python, a tuple is immutable, which means that once it is created, it cannot be modified. A list, on the other hand, is mutable, which means that you can add, remove, or modify elements in the list after it is created."
        },
        {
        "id": "question11",
        "question": "What is the purpose of the 'pass' statement in Python?",
        "options": [
        "It is used to break out of a loop.",
        "It is used to skip over a block of code.",
        "It is used to create an infinite loop.",
        "It is used to define a function."
        ],
        "answer": 1,
        "explanation": "The 'pass' statement in Python is used as a placeholder when a statement is required syntactically, but no code needs to be executed. It is often used in empty function or class definitions, or in situations where you need to skip over a block of code temporarily."
        },
        {
        "id": "question12",
        "question": "What is the difference between '==' and 'is' in Python?",
        "options": [
        "'==' checks for object identity, while 'is' checks for value equality.",
        "'==' checks for value equality, while 'is' checks for object identity.",
        "'==' and 'is' are interchangeable and have the same meaning.",
        "'==' and 'is' are not used in Python."
        ],
        "answer": 2,
        "explanation": "In Python, '==' is used to check for value equality, while 'is' is used to check for object identity. '==' compares the values of the objects, while 'is' compares the memory addresses of the objects. It is important to use the correct operator depending on what you want to compare."
        },
        {
        "id": "question13",
        "question": "What is the output of the following code? x = [1, 2, 3] \n y = x \n y.append(4) \n print(x)",
        "options": [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "Error",
        "None of the above"
        ],
        "answer": 1,
        "explanation": "In this code, a list 'x' is created and then assigned to 'y'. When a value is appended to 'y', it also affects 'x' because 'y' is just a reference to the same object as 'x'. Therefore, the output will be [1, 2, 3]."
        },
        {
          "id": "question14",
          "question": "What is the purpose of the 'break' statement in Python?",
          "options": [
          "It is used to exit a loop.",
          "It is used to skip over a block of code.",
          "It is used to create an infinite loop.",
          "It is used to define a function."
          ],
          "answer": 1,
          "explanation": "The 'break' statement in Python is used to exit a loop prematurely. When the 'break' statement is encountered inside a loop, the loop is terminated and the program continues with the next statement after the loop. This is useful when you want to stop a loop early, for example when you have found the item you are searching for in a list or when you have reached a certain condition that requires you to exit the loop."
        },
        {
          "id": "question15",
          "question": "What is the purpose of the 'continue' statement in Python?",
          "options": [
          "It is used to exit a loop.",
          "It is used to skip over a block of code.",
          "It is used to create an infinite loop.",
          "It is used to skip over an iteration in a loop."
          ],
          "answer": 4,
          "explanation": "The 'continue' statement in Python is used to skip over an iteration in a loop. When the 'continue' statement is encountered inside a loop, the current iteration is terminated and the loop continues with the next iteration. This is useful when you want to skip over certain items in a list or when you want to skip over iterations that do not meet a certain condition."
          },
          {
          "id": "question16",
          "question": "What is the purpose of the 'else' clause in a Python loop?",
          "options": [
          "It is executed when the loop terminates normally.",
          "It is executed when the loop encounters a 'break' statement.",
          "It is executed when the loop encounters a 'continue' statement.",
          "It is not used in Python loops."
          ],
          "answer": 1,
          "explanation": "The 'else' clause in a Python loop is executed when the loop terminates normally, i.e., without encountering a 'break' statement. It is commonly used to perform some final actions or checks after the loop has completed all its iterations."
          },
          {
          "id": "question17",
          "question": "What is the output of the following code? x = 'hello world' \n print(x[2:5])",
          "options": [
          "he",
          "llo",
          "llo ",
          "llo w"
          ],
          "answer": 2,
          "explanation": "In Python, you can slice a string using the format '[start:stop]', where 'start' is the index of the first character you want to include in the slice, and 'stop' is the index of the first character you want to exclude from the slice. In this code, the slice [2:5] includes the characters at indices 2, 3, and 4, which correspond to 'l', 'l', and 'o', respectively. Therefore, the output is 'llo'."
          },
          {
          "id": "question18",
          "question": "What is the output of the following code? x = [1, 2, 3] \n y = x.copy() \n y.append(4) \n print(x)",
          "options": [
          "[1, 2, 3]",
          "[1, 2, 3, 4]",
          "Error",
          "None of the above"
          ],
          "answer": 1,
          "explanation": "In this code, a list 'x' is created and then copied to 'y' using the 'copy' method. When a value is appended to 'y', it does not affect 'x' because 'y' is a separate object that contains a copy of the values in 'x'. Therefore, the output will be [1, 2, 3]."
          },
          {
            "id": "question19",
            "question": "What is the outputof the following code? x = {'a': 1, 'b': 2} \n del x['a'] \n print(x)",
            "options": [
            "{'a': 1}",
            "{'b': 2}",
            "{'a': None, 'b': 2}",
            "Error"
            ],
            "answer": 2,
            "explanation": "In this code, a dictionary 'x' is created with two key-value pairs. The 'del' statement is used to delete the key-value pair with the key 'a'. After the deletion, the dictionary only contains the key-value pair with the key 'b'. Therefore, the output will be {'b': 2}'."
            },
            {
            "id": "question20",
            "question": "What is the output of the following code? x = 3 \n y = 2 \n print(x > y and y < 5)",
            "options": [
            "True",
            "False",
            "None of the above",
            "Error"
            ],
            "answer": 1,
            "explanation": "In this code, the 'and' operator is used to combine two Boolean expressions: 'x > y' and 'y < 5'. Both of these expressions evaluate to True, so the overall expression 'x > y and y < 5' also evaluates to True. Therefore, the output will be True."
            },
]
