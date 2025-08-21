# Rock Paper Scissors

This is a simple, browser-based implementation of the classic game Rock Paper Scissors, created as part of The Odin Project's Foundations curriculum. The entire game runs in the browser's developer console.

## Features
* Play a five-round game against the computer.
* Enter your choice for each round via a browser prompt.
* See the results of each round, the running score, and the final winner announced in the console.

## What I Learned
This project was a great exercise in structuring a simple program and thinking through its logic from start to finish. I focused on not just making the game work, but also on writing clean and efficient code.

Key takeaways include:
* **Function Reusability**: The importance of creating small, reusable "helper" functions that take parameters (e.g., `playRound(humanChoice, computerChoice)`). This keeps the code modular and easy to test.
* **Variable Scope**: Why it's a best practice to use `let` when declaring loop counters (`for (let i = 0; ...)`), as this prevents the variable from "leaking" outside of the loop.
* **Logical Efficiency**: The subtle but critical bug of calling a function multiple times within an `if...else if` chain. I learned to call a function **once**, store its result in a variable, and then use that variable for all checks.
* **Clean Data Structures**: How using an array to store a list of choices (e.g., `const choices = ["rock", "paper", "scissors"];`) makes the code more readable and much easier to expand in the future.

## Acknowledgements
* This project is based on the [Rock Paper Scissors assignment](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) from The Odin Project.