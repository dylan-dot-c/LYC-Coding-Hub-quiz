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
        explantion: " <b>apple_23</b> is a valid variable name because it doesn't start with numbers, doesn't have any special characters such as [$#@!%^&*] and has no spaces."
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
]
