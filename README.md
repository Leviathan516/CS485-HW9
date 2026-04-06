# JavaScript Mini Demo — Homework 9

## Built-In Objects and Methods Used

- **`Date`** — `new Date()`, `.getMonth()`, `.getDate()`, `.getFullYear()`
- **`Number`** — `Number()`, `Number.isNaN()`, `Number.isInteger()`
- **`String`** — `String()`, `.padStart()`
- **`Number.prototype`** — `.toFixed()`, `.toLocaleString()`
- **DOM** — `document.getElementById()`, `.textContent`, `.innerHTML`

---

## GitHub Pages Link

> https://leviathan516.github.io/CS485-HW9/

*(Replace with your actual GitHub Pages URL after publishing.)*

---

## Screenshot

<img width="796" height="569" alt="Screenshot 2026-04-06 at 1 36 51 PM" src="https://github.com/user-attachments/assets/04428271-dd45-47cb-b189-69e142c25633" />



---

## Reflection

The easiest part of this assignment was Part 3 (Math and Formatting) because doing math in JavaScript felt natural, and using `toFixed()` was easy.

The hardest part was Part 1 (formatting the date) because I had to remember that `getMonth()` starts at 0 instead of 1. I also had to add a leading zero to single-digit months and days using `padStart()`.

I learned that the `Date` object gives numbers that need extra formatting before they look right on the screen. From the `Number` object, I learned that `Number.isNaN()` is better than `isNaN()` because it doesn’t change the value first, and `Number.isInteger()` returns `false` for decimals.

Finally, displaying results in the browser helped me understand the difference between `.textContent` and `.innerHTML`, and how to create and display HTML using JavaScript.
