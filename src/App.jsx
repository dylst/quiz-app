import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: (
      <div>
        Consider a function named calc, which accepts two numbers as integers
        and returns their sum as an integer. Which of the following is the
        correct statement to call the function calc?
      </div>
    ),
    options: [
      'int sum = calc(2, 3);',
      'int sum = calc("2", "3");',
      'calc(2, 3.14);',
      'calc();',
    ],
    correctAnswer: 'int sum = calc(2, 3);',
  },
  {
    question: (
      <div>
        What is the error in the following function definition?
        <br />
        int doubler(int old_value)
        <br />
        {`{ double new_value = old_value * 2;}`}
      </div>
    ),
    options: [
      'The function returns a value of type double.',
      'The function attempts to modify its input parameter.',
      'No error.',
      'The function does not return a value.',
    ],
    correctAnswer: 'The function does not return a value.',
  },
  {
    question: (
      <div>
        What are the names (in order) of the parts of this function definition?
        <br />
        int my_fun (double a);
      </div>
    ),
    options: [
      'Function name, function type, parameter variable name, parameter variable type',
      'Return type, function name, parameter variable name, parameter variable type',
      'Function name, function type, parameter variable type, parameter variable name',
      'Return type, function name, parameter variable type, parameter variable name',
    ],
    correctAnswer:
      'Return type, function name, parameter variable type, parameter variable name',
  },
  {
    question: (
      <div>
        Which of the following is the correct first line of a function
        definition named calc_average that accepts three int parameters and
        returns a double?
      </div>
    ),
    options: [
      'double calc_average(int a, int b, int c)',
      'calc_average(int a, int b, int c)',
      'double calc_average()',
      'int calc_average(double a, double b, double c)',
    ],
    correctAnswer: 'double calc_average(int a, int b, int c)',
  },
  {
    question: (
      <div>
        Consider a function named avg, which accepts four numbers as integers
        and returns their average as a double. Which of the following is the
        correct statement to call the function avg?
      </div>
    ),
    options: [
      'avg();',
      'double average = avg(2, 3, 4, 5);',
      'avg(2, 3.14, 3, 5);',
      'double average = avg("2", "3", "4", "5");',
    ],
    correctAnswer: 'double average = avg(2, 3, 4, 5);',
  },
  {
    question: (
      <div>
        Which one of the following statements is an invalid initialization of an
        array named myarray?
      </div>
    ),
    options: [
      'int myarray[5] = { 0, 1, 2, 3 };',
      'int myarray[ ] = { 0, 1, 2, 3, 4 };',
      'int myarray[5] = { 0, 1, 2, 3, 4, 5 };',
      'int myarray[4] = { 0, 1, 2, 3 };',
    ],
    correctAnswer: 'int myarray[5] = { 0, 1, 2, 3, 4, 5 };',
  },
  {
    question: (
      <div>
        Consider the following code snippet:
        <br />
        int arrmarks[5];
        <br />
        {`for (int cnt = 0; cnt < 5; cnt++)`}
        <br />
        {`{`}
        <br />
        {`  cout << "Enter the marks: ";`}
        <br />
        {`  cin >> arrmarks[cnt];`}
        <br />
        {`}`}
        <br />
        Assume that a user enters 35, 56, 78, 90, and 45 as marks. What is
        stored in the element with the index number 3?
      </div>
    ),
    options: ['90', 'The correct answer is not listed', '56', '78', '45'],
    correctAnswer: '90',
  },
  {
    question: (
      <div>
        Which one of the following statements is an invalid initialization of an
        array named somearray?
      </div>
    ),
    options: [
      'int somearray[10] = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };',
      'int somearray[10] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };',
      'The correct answer is not listed',
      'int somearray[9] = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };',
      'int somearray[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };',
    ],
    correctAnswer: 'int somearray[10] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };',
  },
  {
    question: (
      <div>
        What is the error in the following function definition?
        <br />
        int tripler(int num_para)
        <br />
        {`{`}
        <br />
        {`  double result = num_para * 3;`}
        <br />
        {`}`}
      </div>
    ),
    options: [
      'The function does not modify its input parameter.',
      'The function does not return a value.',
      'None of the listed items.',
      'The function returns a value of type double.',
    ],
    correctAnswer: 'The function does not return a value.',
  },
  {
    question: (
      <div>Which of the following statements is true about pointers?</div>
    ),
    options: [
      'Pointers contain address locations of variables.',
      'Pointers contain values as well as addresses of variables.',
      'Pointers do not have any address location of their own.',
      'Pointers occupy permanent storage locations inside the hard disk.',
    ],
    correctAnswer: 'Pointers contain values as well as addresses of variables.',
  },
  {
    question: (
      <div>
        Consider the code snippet below.
        <br />
        int ch = 100;
        <br />
        int* ptr = &ch;
        <br />
        Which of the following observations are true based on the code snippet?
      </div>
    ),
    options: [
      '&ptr gives the address of ch',
      'ptr stores the value of ch',
      'ptr stores the address of ch',
      '&ptr gives the value of ch',
    ],
    correctAnswer: 'ptr stores the address of ch',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        int num = 0;
        <br />
        int* ptr = &num;
        <br />
        *ptr = 90;
        <br />
        num = 80;
        <br />
        {`cout << *ptr << endl;`}
      </div>
    ),
    options: ['80', '0', '90', 'the address of num'],
    correctAnswer: '80',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        int num = 0;
        <br />
        int* ptr = &num;
        <br />
        num = 5;
        <br />
        *ptr = *ptr + 10;
        <br />
        {`cout << num << " " << *ptr << endl;`}
      </div>
    ),
    options: ['10 10', '10 5', '15 15', '5 10'],
    correctAnswer: '15 15',
  },
  {
    question: (
      <div>
        Consider the code snippet below.
        <br />
        int num = 500;
        <br />
        int *ptr_num = &num;
        <br />
        Which of the following observations are true based on the code snippet?
      </div>
    ),
    options: [
      'ptr_num stores the value of num',
      '&ptr_num gives the address of num',
      'ptr_num stores the address of num',
      '&ptr_num gives the value of num',
    ],
    correctAnswer: 'ptr_num stores the address of num',
  },
  {
    question: (
      <div>
        Given the following code snippet, what is true about the statement
        ptr_num++ ?
        <br />
        {`int num[5] = { 1, 2, 3, 4, 5 };`}
        <br />
        int* ptr_num = num;
        <br />
        ptr_num++;
      </div>
    ),
    options: [
      'ptr_num++ results in a run-time error.',
      'ptr_num now points to num[0];',
      'ptr_num++ results in a compilation error.',
      'ptr_num now points to num[1];',
    ],
    correctAnswer: 'ptr_num now points to num[1];',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        {`int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };`}
        <br />
        int* ptr = arr;
        <br />
        ptr = ptr + 6;
        <br />
        {`cout << *ptr << endl;`}
      </div>
    ),
    options: ['5', '6', 'There is no output due to a compilation error.', '7'],
    correctAnswer: '7',
  },
  {
    question: (
      <div>
        Suppose that you declare an array int arr_num[10]. Assuming the function
        declaration statement given below, what would you use to pass the array
        to the given function?
        <br />
        <br />
        int sum_arr(int a[]);
      </div>
    ),
    options: [
      'sum_arr(*arr_num)',
      'sum_arr(arr_num)',
      'sum_arr(arr_num[0])',
      'sum_arr(&arr_num)',
    ],
    correctAnswer: 'sum_arr(arr_num)',
  },
  {
    question: (
      <div>
        Which location of the array arr does ptr point to right after you assign
        an array to a pointer variable, as shown in the following code snippet?
        <br />
        int arr[10];
        <br />
        int* ptr = arr;
      </div>
    ),
    options: [
      'arr[0]',
      'arr[1]',
      'arr[10]',
      'You cannot assign an array to a pointer.',
    ],
    correctAnswer: 'arr[0]',
  },
  {
    question: (
      <div>
        Consider the code snippet below.
        <br />
        {`int arr[5] = { 1, 2, 3, 4, 5 };`}
        <br />
        Which of the following is the value of *(arr + 3) ?
      </div>
    ),
    options: ['4', '1', '2', '3'],
    correctAnswer: '4',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        int main()
        <br />
        {`{`}
        <br />
        int i = 4;
        <br />
        {`char name[] = "Steven Black";`}
        <br />
        char * ptr = name;
        <br />
        {`cout << ptr[i] << endl;`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'n',
      'e',
      'The program does not compile due to a syntax error.',
      'Black',
    ],
    correctAnswer: 'e',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        {`char name[] = "Harry Houdini";`}
        <br />
        {`name[2] = 'v';`}
        <br />
        {`cout << name << endl;`}
      </div>
    ),
    options: [
      'Havry Houdini',
      'Harry Houdini',
      'Harvy Houdini',
      'Harry Houdiniv',
    ],
    correctAnswer: 'Havry Houdini',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        double balance = 10000;
        <br />
        const double* p;
        <br />
        *p = *p - 1000;
        <br />
        {`cout << *p;`}
      </div>
    ),
    options: [
      '9000',
      'The memory address of the variable balance will be printed.',
      '10000',
      'It will yield a compiler error.',
    ],
    correctAnswer: 'It will yield a compiler error.',
  },
  {
    question: (
      <div>
        Which of the following is true about the chars variable?
        <br />
        {`char chars[] = "Hello World";`}
      </div>
    ),
    options: [
      'chars is an array of size 12, and the last value in the array is null.',
      'chars is an array of size 12, and the last value in the array is "d".',
      'chars is an array of size 11, and the last value in the array is "d".',
      'chars is an array of size 11, and the last value in the array is null.',
    ],
    correctAnswer:
      'chars is an array of size 12, and the last value in the array is null.',
  },
  {
    question: (
      <div>
        What will print to the screen based on the following C++ code:
        <br />
        {`char name[10] = "steve";`}
        <br />
        {`cout << strlen(name);`}
      </div>
    ),
    options: ['10', 'steve', '6', '5'],
    correctAnswer: '5',
  },
  {
    question: (
      <div>
        What is the output of the following code, assuming proper libraries have
        been included?
        <br />
        {`char trinity[20] = "C++ motorcycle";`}
        <br />
        {`cout << strlen(trinity);`}
      </div>
    ),
    options: ['3', 'Unpredictable runtime error', '14', '20'],
    correctAnswer: '14',
  },
  {
    question: (
      <div>
        What library must be included by your code to use functions that copy
        character arrays?
      </div>
    ),
    options: ['<cstring>', '<string>', '<cstring.h>', '<c-string>'],
    correctAnswer: '<cstring>',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        int main()
        <br />
        {`{`}
        <br />
        int i = 5;
        <br />
        {`const char name[] = "Philip Roger";`}
        <br />
        {`cout << name[i] << endl;`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'p',
      'The program does not compile due to a syntax error.',
      'R',
      'Roger',
    ],
    correctAnswer: 'p',
  },
  {
    question: (
      <div>
        Consider the following valid C++ function:
        <br />
        void func(char * ptr)
        <br />
        {`{`}
        <br />
        {`cout << ptr;`}
        <br />
        {`}`}
        <br />
        What is the passing mode used in the function to pass the parameter ptr?
      </div>
    ),
    options: [
      'pass by value',
      'pass by recursion',
      'pass by reference',
      'pass by struct',
    ],
    correctAnswer: 'pass by value',
  },
  {
    question: (
      <div>
        What is the output of the following code, assuming proper libraries have
        been included?
        <br />
        {`char s[20] = "mystring1";`}
        <br />
        {`cout << strlen(s);`}
      </div>
    ),
    options: ['20', 'None of these', '7', '8'],
    correctAnswer: 'None of these',
  },
  {
    question: (
      <div>
        A programmer working on an auto rental application realizes that she
        needs to create many Car objects in this application. What does she need
        to do in order to define a Car class?
      </div>
    ),
    options: [
      'Write a set of functions that accepts a car as a parameter.',
      'Define both global data and functions to represent car data and behavior.',
      'Define a set of global variables to store data for Car objects.',
      'Write a Car class that defines the data members and functions that Car objects will have.',
    ],
    correctAnswer:
      'Write a Car class that defines the data members and functions that Car objects will have.',
  },
  {
    question: (
      <div>
        What is the output of the following code, assuming proper libraries have
        been included?
        <br />
        {`char state[] = "Idaho";`}
        <br />
        {`cout << sizeof(state);`}
      </div>
    ),
    options: ['5', '6', 'No output, compiler error', 'Idaho'],
    correctAnswer: '6',
  },
  {
    question: (
      <div>
        Consider this code segment:
        <br />
        int x = 10;
        <br />
        int y = 20;
        <br />
        int z = mystery(x, y);
        <br />
        {`cout << z << "/" << x + y;`}
        <br />
        Also consider this function:
        <br />
        int mystery(int a, int &b)
        <br />
        {`{`}
        <br />
        a += 5;
        <br />
        b += 5;
        <br />
        return a + b;
        <br />
        {`}`}
        <br />
        What prints to the screen?
      </div>
    ),
    options: ['30/40', '40/35', '40/30', '35/40'],
    correctAnswer: '40/35',
  },
  {
    question: (
      <div>
        In the following class definition, which of the data members or member
        functions are hidden from the users of the class?
        <br />
        class Car
        <br />
        {`{`}
        <br />
        public:
        <br />
        Car();
        <br />
        void start();
        <br />
        void stop();
        <br />
        private:
        <br />
        double speed;
        <br />
        void set_speed(double new_speed);
        <br />
        {`}`};
      </div>
    ),
    options: [
      'void start() and void stop()',
      'void start(), void stop(), double speed , and void set_speed(double new_speed)',
      'Car(), void start() , and void stop()',
      'double speed and void set_speed(double new_speed)',
    ],
    correctAnswer: 'double speed and void set_speed(double new_speed)',
  },
  {
    question: (
      <div>
        Consider this code segment:
        <br />
        {`char word1[10] = "hello"; // line 1`}
        <br />
        {`char word2[20] = "world"; // line 2`}
        <br />
        strcpy(word1, word2); // line 3
        <br />
        {`cout << word1 << word2; // line 4`}
        <br />
        Which of the following statements is true?
      </div>
    ),
    options: [
      'word1 and word2 are both strings',
      'None of these answers is correct',
      'Line 3 has a problem because word2 is bigger than word1',
      'Line 4 will print: helloworld',
    ],
    correctAnswer: 'None of these answers is correct',
  },
  {
    question: (
      <div>
        What is the output of the following code snippet?
        <br />
        class Cheetah
        <br />
        {`{`}
        <br />
        public:
        <br />
        void set_speed(double new_speed);
        <br />
        private:
        <br />
        double speed;
        <br />
        {`}`};
        <br />
        void Cheetah::set_speed(double new_speed)
        <br />
        {`{`}
        <br />
        speed = new_speed;
        <br />
        {`}`}
        <br />
        int main()
        <br />
        {`{`}
        <br />
        Cheetah ch1;
        <br />
        ch1.set_speed(144);
        <br />
        {`cout << "Cheetah speed: " << ch1.speed;`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'The code snippet does not compile.',
      'Cheetah speed: 144',
      'Cheetah speed: 0',
      'Cheetah speed:',
    ],
    correctAnswer: 'The code snippet does not compile.',
  },
  {
    question: <div>In C++, which statement about constructors is true?</div>,
    options: [
      'Constructors are declared with the keyword const.',
      'Constructors have the same name as the class.',
      'Constructors are declared with the keyword constructor.',
      'Constructors must have no parameters.',
    ],
    correctAnswer: 'Constructors have the same name as the class.',
  },
  {
    question: (
      <div>
        What happens when you define the data members in a class to be private?
      </div>
    ),
    options: [
      'Only private member functions of other classes can access the data members.',
      'Only the member functions of the same class can access the data members.',
      'Only private member functions of the same class can access these data members.',
      'The member functions of every class can access the data members.',
    ],
    correctAnswer:
      'Only the member functions of the same class can access the data members.',
  },
  {
    question: (
      <div>
        What will be the value inside the variables a and b after the given set
        of assignments?
        <br />
        int a = 20;
        <br />
        int b = 10;
        <br />
        a = (a + b) / 2;
        <br />b = a++;
      </div>
    ),
    options: [
      'a = 16, b = 16',
      'a = 15, b = 15',
      'a = 15, b = 16',
      'a = 16, b = 15',
    ],
    correctAnswer: 'a = 16, b = 15',
  },
  {
    question: (
      <div>
        What is wrong with the following code snippet?
        <br />
        int price;
        <br />
        price = 9.42;
      </div>
    ),
    options: [
      'The price variable is never assigned a value.',
      'The data type for the price variable is not specified.',
      'The price variable is never initialized.',
      'The price variable is assigned a decimal value, but it can store only a whole number value.',
    ],
    correctAnswer:
      'The price variable is assigned a decimal value, but it can store only a whole number value.',
  },
  {
    question: (
      <div>Which is the appropriate time to initialize a variable?</div>
    ),
    options: [
      'at the end of the program',
      'before the main function',
      'when you use it',
      'when you define it',
    ],
    correctAnswer: 'when you define it',
  },
  {
    question: <div>How do you generate a random number in C++?</div>,
    options: [
      'int x = rand(time(0));',
      'None of these answers are correct.',
      'int x = random;',
      'int x = rand();',
    ],
    correctAnswer: 'int x = rand();',
  },
  {
    question: (
      <div>How do you create an array of 20 integers called nums in C++?</div>
    ),
    options: [
      'int nums = new int[20];',
      'nums[20] <int>',
      'integer nums[20];',
      'int nums[20];',
    ],
    correctAnswer: 'int nums[20];',
  },
  {
    question: (
      <div>
        What is the output of the following C++ code segment?
        <br />
        int a = 3, b = 4;
        <br />
        {`cout << a>b?a:b;`}
      </div>
    ),
    options: ['It will not compile', '3', '4', '7'],
    correctAnswer: 'It will not compile',
  },
  {
    question: (
      <div>
        When building a class in C++, it is good practice to make the data
        members public so that other classes can quickly access them. This is
        what makes C++ a fast language.
      </div>
    ),
    options: ['True', 'False'],
    correctAnswer: 'False',
  },
  {
    question: (
      <div>
        This program will compile and run just fine:
        <br />
        #include &lt;iostream&gt;
        <br />
        int main()
        <br />
        {`{`}
        <br />
        {`cout << "Hello World\n";`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: ['True', 'False'],
    correctAnswer: 'False',
  },
  {
    question: <div>What kind of code do computers understand?</div>,
    options: ['Machine Code', 'Bro Code', 'Assembly Code', 'Source Code'],
    correctAnswer: 'Machine Code',
  },
  {
    question: (
      <div>What is the Linux command to show the contents of a file?</div>
    ),
    options: ['more', 'show', 'cat', 'There are 2 correct answers listed'],
    correctAnswer: 'There are 2 correct answers listed',
  },
  {
    question: (
      <div>What Linux command will take me to the parent directory?</div>
    ),
    options: ['go home', 'cd ..', 'move parent', 'cd parent'],
    correctAnswer: 'cd ..',
  },
  {
    question: (
      <div>
        Suppose there is a class called Card which is a playing card and suppose
        I have a vector of cards called deck. Consider the following code
        segment:
        <br />
        vector&lt;Card&gt; deck; // create a vector of cards
        <br />
        {`Card c1('A','S');    // create a card`}
        <br />
        ????? // add the card to the deck
        <br />
        What is the statement that will add the card to the deck?
      </div>
    ),
    options: [
      'deck = c1;',
      'deck.push_back(c1);',
      'deck.put(c1);',
      'deck.add(c1);',
    ],
    correctAnswer: 'deck.push_back(c1);',
  },
  {
    question: <div>What Linux command will take me to my home directory?</div>,
    options: ['cd', 'go', 'hm', 'home'],
    correctAnswer: 'cd',
  },
  {
    question: (
      <div>
        Consider the following segment of code in C++:
        <br />
        {`int nums[10] = {1,2,3,4,5,6,7,8,9,10};`}
        <br />
        printArray(nums);
        <br />
        Also consider the this function:
        <br />
        void printArray(int n[ ])
        <br />
        {`{`}
        <br />
        for(int i=0, i &lt; n.size(), i++)
        <br />
        cout &lt;&lt; n[i];
        <br />
        {`}`}
        <br />
        How many numbers will the printArray( ) function actually print out?
      </div>
    ),
    options: [
      'all the numbers in the array',
      'the correct answer is not listed',
      '11',
      '1',
    ],
    correctAnswer: 'the correct answer is not listed',
  },
  {
    question: (
      <div>
        Consider the following program. how many numbers are printed to the
        output screen?
        <br />
        #include &lt;iostream&gt;
        <br />
        #include &lt;vector&gt;
        <br />
        using namespace std;
        <br />
        int main()
        <br />
        {`{`}
        <br />
        vector&lt;int&gt; v;
        <br />
        for (int i=0; i&lt;10; i++)
        <br />
        v.push_back(i * 5);
        <br />
        while (v.size() &gt; 0)
        <br />
        {`{`}
        <br />
        cout &lt;&lt; v.back()&lt;&lt;endl;
        <br />
        {`}`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: ['0', 'it will not compile', '10', 'more than 10'],
    correctAnswer: 'more than 10',
  },
  {
    question: (
      <div>
        Consider this code segment:
        <br />
        {`int nums[10]= {10,20,30};`}
        <br />
        nums[10] = 999;
        <br />
        Which of the following statements is true?
      </div>
    ),
    options: [
      'There is nothing wrong with the code',
      'The results are unpredictable.',
      'The code will not compile.',
      'C++ is a dangerous motorcycle and you could be mortally wounded if you try to use it!!!',
    ],
    correctAnswer: 'The code will not compile.',
  },
  {
    question: (
      <div>
        Using linux commands, how would I find out more about the wc command?
      </div>
    ),
    options: ['list wc', 'man wc', 'more wc', 'help wc'],
    correctAnswer: 'man wc',
  },
  {
    question: (
      <div>
        I have a safe at my house that is filled with chocolate and I don&apost
        want my grandkids to steal any so I have converted the safe combination
        from decimal numbers to septenary numbers and then I wrote the septenary
        combination on the front of the safe in large digits so I wouldn&apost
        forget - and also to torment the grandkids...
        <br />
        This is the combination of the safe:
        <br />
        36 - 25 - 16
        <br />
        What is written on the safe?
      </div>
    ),
    options: [
      '62 - 17 - 22',
      '16 - 25 - 36',
      '49 - 43 - 23',
      '51 - 34 - 22',
      'The correct answer is not listed.',
    ],
    correctAnswer: '51 - 34 - 22',
  },
  {
    question: (
      <div>
        Consider the following C++ variable declaration:
        <br />
        short x = ?????; // x is initialized to some number which you cannot see
        <br />
        Suppose this is the binary representation of x:
        <br />
        1011001011010011
        <br />
        Which of the following it true?
      </div>
    ),
    options: [
      'There are too many binary digits listed',
      'The value is greater than 200',
      'There are not enough binary digits listed',
      'The value is less than zero',
    ],
    correctAnswer: 'The value is less than zero',
  },
  {
    question: (
      <div>
        Consider the following code segment:
        <br />
        {`int nums[10] = {7, 8, 9};`}
        <br />
        cout &lt;&lt; sizeof(nums);
        <br />
        What is printed on the output screen?
      </div>
    ),
    options: ['30', '3', '40', '10'],
    correctAnswer: '40',
  },
  {
    question: (
      <div>
        What is printed to the screen when this program is run:
        <br />
        #include &lt;iostream&gt;
        <br />
        using namespace std;
        <br />
        void toss( )
        <br />
        {`{`}
        <br />
        cout &lt;&lt; {`"hello-";`}
        <br />
        throw 42;
        <br />
        {`}`}
        <br />
        int main()
        <br />
        {`{`}
        <br />
        try {`{ toss(); }`}
        <br />
        catch ( const char * s)
        <br />
        &#9; {`{ cout << "world-"; }`}
        <br />
        {`cout << "awesome-";`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'hello-awesome-',
      'world-awesome-',
      'hello-world-awesome-',
      'hello-',
    ],
    correctAnswer: 'world-awesome-',
  },
  {
    question: (
      <div>
        What is printed to the screen when this program is run:
        <br />
        #include &lt;iostream&gt;
        <br />
        using namespace std;
        <br />
        void toss( )
        <br />
        {`{`}
        <br />
        throw 42;
        <br />
        {`cout << "hello-";`}
        <br />
        {`}`}
        <br />
        int main()
        <br />
        {`{`}
        <br />
        try {`{ toss(); }`}
        <br />
        catch (...)
        <br />
        {`{ cout << "world-"; }`}
        <br />
        {`cout << "awesome-";`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: ['hello-awesome-', 'hello-world-', 'world-awesome-', '-awesome-'],
    correctAnswer: 'world-awesome-',
  },
  {
    question: (
      <div>
        When you create and use classes in C++ , the classes must be separated
        into header file and implementation file.
      </div>
    ),
    options: ['True', 'False'],
    correctAnswer: 'False',
  },
  {
    question: (
      <div>
        Suppose I have a file numbers.dat with the numbers 1 through 100 sorted,
        one number per line. What will be printed on the screen if I type this
        command sequence:
        <br />$ more numbers.dat | head -10 | tail -5 | head -1
      </div>
    ),
    options: ['1', 'the correct answer is not listed', '6', '5'],
    correctAnswer: '6',
  },
  {
    question: (
      <div>
        Consider the following code segment in C++::
        <br />
        int a = 5;
        <br />
        int b = 10;
        <br />
        int *ptr = &a;
        <br />
        *ptr = b;
        <br />
        {`cout << ptr;`}
        <br />
        What will be printed on the screen
      </div>
    ),
    options: ['5', 'the address of a', '10', 'the address of b'],
    correctAnswer: 'the address of a',
  },
  {
    question: (
      <div>
        Consider this complete program
        <br />
        #include &lt;iostream&gt;
        <br />
        using namespace std;
        <br />
        int mystery(int & a, int & b)
        <br />
        {`{`}
        <br />
        a += 5;
        <br />
        b += 5;
        <br />
        return a + b;
        <br />
        {`}`}
        <br />
        int main()
        <br />
        {`{`}
        <br />
        int x = 10;
        <br />
        int y = 20;
        <br />
        int z = mystery(x, y);
        <br />
        {`cout << x << "/" <<  y;`}
        <br />
        {`}`}
        <br />
        What prints to the screen?
      </div>
    ),
    options: ['35/40', '40/30', '10/25', '15/25'],
    correctAnswer: '15/25',
  },
  {
    question: (
      <div>
        What is wrong with the following C++ program:
        <br />
        #include &lt;iostream&gt;
        <br />
        using namespace std;
        <br />
        int main()
        <br />
        {`{`}
        <br />
        int x=3, y=5 ; // line 1
        <br />
        int * ptr; // line 2
        <br />
        int *ptr2 = &y ; // line 3
        <br />
        y = x; // line 4
        <br />
        ptr = & x; // line 5
        <br />
        {`cout << x << y << *ptr;`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'line 3 is wrong',
      'Line 2 is wrong',
      'line 5 is wrong',
      'nothing is wrong',
    ],
    correctAnswer: 'nothing is wrong',
  },
  {
    question: (
      <div>
        What is wrong with the following C++ program:
        <br />
        #include &lt;iostream&gt;
        <br />
        using namespace std;
        <br />
        int main()
        <br />
        {`{`}
        <br />
        int x, y=5 ; // line 1
        <br />
        int * ptr; // line 2
        <br />
        int *ptr2 = &y ; // line 3
        <br />
        int & ref; // line 4
        <br />
        ptr = & x; // line 5
        <br />
        {`cout << x << y << *ptr;`}
        <br />
        return 0;
        <br />
        {`}`}
      </div>
    ),
    options: [
      'Line 2 is wrong',
      'line 1 is wrong',
      'line 4 is wrong',
      'Line 3 is wrong',
    ],
    correctAnswer: 'line 4 is wrong',
  },
  {
    question: (
      <div>
        Consider the following segment of code in C++:
        <br />
        {`int nums[10] = {1,2,3,4,5,6,7,8,9,10};`}
        <br />
        printArray(nums, 5);
        <br />
        Also consider the this function:
        <br />
        void printArray(int n[ ], int size)
        <br />
        {`{`}
        <br />
        for(int i=0; i &lt; size; i++)
        <br />
        {`cout << n[i];`}
        <br />
        {`}`}
        <br />
        How many numbers will the printArray( ) function actually print out?
      </div>
    ),
    options: ['10', '1', 'all the numbers in the array', '5'],
    correctAnswer: '5',
  },
  {
    question: (
      <div>
        Suppose I run the bubble sort function on 10,000 numbers and it takes 1
        second.
        <br />
        About how long will it take the same function to sort 20,000 numbers?
      </div>
    ),
    options: ['8 seconds', '12 seconds', '4 seconds', '2 seconds'],
    correctAnswer: '4 seconds',
  },
  {
    question: (
      <div>What is the expected growth rate of the bubble sort algorithm?</div>
    ),
    options: ['Oh No!!!!!!!', 'O (n)', 'O (n^2)', 'O (n * log(n))'],
    correctAnswer: 'O (n^2)',
  },
  {
    question: (
      <div>
        Suppose I type this at the Linux prompt:
        <br />
        $ ls -l numbers.dat
        <br />
        Here is the result of the above command:
        <br />
        -rw-r--r-- 1 steve steve 5000 Mar 8 02:19 numbers.dat
        <br />
        Which of the following is true?
      </div>
    ),
    options: [
      'There are 5000 numbers in numbers.dat',
      'The largest number is 5000 in numbers.dat',
      "I'm hungry for a byte of Snickers bar",
      'The size of numbers.dat is 5000 bytes',
    ],
    correctAnswer: 'The size of numbers.dat is 5000 bytes',
  },
  {
    question: (
      <div>
        What can be understood from the following Linux command and result:
        <br />
        {`$ time sort numbers.dat > sorted.out &`}
        <br />
        real 0m1.593s
        <br />
        user 0m5.128s
        <br />
        sys 0m0.184s
      </div>
    ),
    options: [
      'The command took about 6.9 seconds to run (1.6 + 5.1 + 0.2)',
      'The command took about 1.6 seconds to run',
      'The command took about 0.2 seconds to run',
      'The command took about 5.1 seconds to run',
    ],
    correctAnswer: 'The command took about 1.6 seconds to run',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setUserAnswer('Correct');
      setCorrectAnswer(null);
    } else {
      setUserAnswer('Incorrect');
      setCorrectAnswer(questions[currentQuestion].correctAnswer);
    }
    setShowResult(true);
    setSelectedAnswer(selectedOption);
  };

  const handleNextClick = () => {
    setShowResult(false);
    setUserAnswer(null);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevClick = () => {
    setShowResult(false);
    setUserAnswer(null);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion - 1);
  };

  const retryQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setUserAnswer(null);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  return (
    <div className='container'>
      {currentQuestion < questions.length ? (
        <div>
          <div className='question-box'>
            <h2 className='question'>Question {currentQuestion + 1}</h2>
            <p className='question'>{questions[currentQuestion].question}</p>
          </div>
          <div className='divider'></div>
          <div className='options'>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className='option'
                onClick={() => handleAnswerClick(option)}
                disabled={showResult}
                style={{
                  backgroundColor:
                    showResult &&
                    (option === questions[currentQuestion].correctAnswer
                      ? '#4caf50' // Green for correct answer
                      : selectedAnswer === option
                      ? '#f44336' // Red for incorrect answer
                      : '#3f3f4e'), // Default background color
                  color: '#000', // Text color
                }}
              >
                {option}
              </button>
            ))}
          </div>

          {showResult && (
            <div className='result'>
              <p
                className={
                  userAnswer === 'Correct'
                    ? 'correct-answer'
                    : 'incorrect-answer'
                }
              >
                {userAnswer}
              </p>
              {userAnswer === 'Incorrect' && (
                <p className='correct-answer'>
                  Correct answer: {correctAnswer}
                </p>
              )}
            </div>
          )}
          <div className='button-group'>
            {currentQuestion > 0 && (
              <button className='nav-button' onClick={handlePrevClick}>
                Previous
              </button>
            )}
            <button className='nav-button' onClick={handleNextClick}>
              {currentQuestion === questions.length - 1
                ? 'Finish'
                : 'Next Question'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p className='score'>
            Your score: {score} / {questions.length}
          </p>
          <button className='retry-button' onClick={retryQuiz}>
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
