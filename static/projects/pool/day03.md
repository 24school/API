# Day 03

### Allowed functions: _write_

### Given functions: **_print_char_**

```c
void print_char(c) {
	write(1, &c, 1);
}
```

_You don't need to understand how the function works just yet, just find out how to call it_

## Task 0: Print a character

Your first task of the day is to use the **_print_char_** function in order to display a character in your console.

## Task 1: Hello World

Now that you found out how to use the **_print_char_** function, create a function named **_print_hello_world_** that displays the message "Hello World" in your console. Its prototype is as follows:

```c
void print_hello_world(void);
```

## Task 2: Print a string

Write a function that, given a string as parameter, displays that string in your console.
Its prototype must be as follows:

```c
void print_string(char *str);
```

_Hint: use a loop!_

## Task 3: Print reverse string

Write a function that, given a string as parameter, displays that string in the reverse order.
Its prototype must be as follows:

```c
void print_rev_string(char *str);
```

## Task 4: Integers

Write a function that, given an integer as parameter, displays either P, N or O if the parameter is positive, negative or null.
Its prototype must be as follows:

```c
void print_isneg(int number);
```

## Task 5: Integers

Write a function that, given an integer as parameter, displays either P if the parameter is pair, else O.
Its prototype must be as follows:

```c
void print_ispair(int number);
```

## Task 6: Printing integers

Write a function that, given an integer, displays it's value in the console.
Its prototype must be as follows:

```c
void print_integer(int number);
```

**Warning: This is significantly harder**

## Task 7: Return values

Write a function that takes a string as parameter, and returns it's length
Its prototype must be as follows:

```c
int str_len(int number);
```

_Hint: Use your `print_integer` function to check if your value is correct_