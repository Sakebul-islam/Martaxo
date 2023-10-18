<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `undefined`

<strong><i>Explanation : -</i></strong>

<pre>
The code will return "undefined" due to an error in the variable name. It should be "greeting" instead of "greetign." The variable "greetign" is allocated an empty object, but it is not recorded. As a result, the console reports "undefined" since no value has been given to "greeting."
</pre>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<strong><i>Explanation : -</i></strong>

<pre>
The sum function in JavaScript requires two inputs, a and b. When we call sum(1, '2'), JavaScript uses type coercion to transform the text '2' to a number, resulting in the string concatenation of '1' and '2' to generate the string "12" rather than adding the numbers. To guarantee numeric addition, we must verify that both a and b are of the numeric type, either by explicitly converting them to numbers or by passing numeric inputs. In this scenario, JavaScript detects the intent to add numbers and executes the appropriate conversion, yielding a numeric total of 1 and 2.
</pre>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<strong><i>Explanation : -</i></strong>

<pre>
The answer to the code snippet is that the console.log(food) statement will output the original array food, which is ['🍕', '🍫', '🥑', '🍔'].

This happens because when info.favoriteFood is assigned the value '🍝', it doesn't affect the original food array. The info object is created with a reference to the first element of the food array, but reassigning info.favoriteFood to a new value only changes the value of that property in the info object. It doesn't modify the original food array.

In summary, modifying info.favoriteFood does not alter the food array, and therefore, the console.log(food) statement still prints the original array.
</pre>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<strong><i>Explanation : -</i></strong>

<pre>
In other words, if we call a function without passing in any arguments, the function's parameters will be assigned the value undefined. This is because undefined is the default value for function parameters.

In your example, the sayHi function has one parameter, name. When we call sayHi() without any arguments, the name parameter will be assigned the value undefined. Therefore, the return value of the sayHi function will be the string Hi there, undefined, which will log to the console as undefined.
</pre>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<strong><i>Explanation : -</i></strong>

<pre>
This code will log the number 3 to the console. The reason for this is that the forEach() method iterates over the nums array and calls the callback function for each element in the array. The callback function in this case is an anonymous function that checks if the current element is non-zero. If the element is non-zero, the callback function increments the count variable.

Since the nums array contains four elements, the forEach() method will call the callback function four times. The first time the callback function is called, the num variable will be equal to the value of the first element in the array, which is 0. Since 0 is not non-zero, the callback function will not increment the count variable.

The second time the callback function is called, the num variable will be equal to the value of the second element in the array, which is 1. Since 1 is non-zero, the callback function will increment the count variable.

The third and fourth times the callback function are called, the num variable will be equal to the values of the third and fourth elements in the array, which are 2 and 3, respectively. Since both 2 and 3 are non-zero, the callback function will increment the count variable each time.

Therefore, after the forEach() method has finished iterating over the nums array, the count variable will be equal to 3. This is why the number 3 is logged to the console when we call the console.log() function.
</pre>

</p>
</details>
