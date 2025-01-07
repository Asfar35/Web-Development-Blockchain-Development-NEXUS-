const questions = {
    0: {
        question: "What is the full form of CPU?",
        options: ["Central Process Unit", "Central Processing Unit", "Control Processing Unit", "Central Processing Utility"],
        correctAnswer: "Central Processing Unit",
    },
    1: {
        question: "Which of the following is not a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        correctAnswer: "HTML",
    },

    2: {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack",
    },
    3: {
        question: "What is the time complexity of searching in a binary search tree in the worst case?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(n)",
    },
    4: {
        question: "What is the time complexity of binary search?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        correctAnswer: "O(log n)",
    },
    5: {
        question: "Which sorting algorithm has the best average case time complexity?",
        options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
        correctAnswer: "Merge Sort",
    },
    6: {
        question: "What does OOP stand for?",
        options: ["Object-Oriented Programming", "Operation-Oriented Programming", "Object-Organized Programming", "Output-Oriented Programming"],
        correctAnswer: "Object-Oriented Programming",
    },
    7: {
        question: "Which of the following is a pillar of OOP?",
        options: ["Encapsulation", "Recursion", "Iteration", "Inheritance"],
        correctAnswer: "Encapsulation",
    },
    8: {
        question: "Which of the following is a relational database management system?",
        options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
        correctAnswer: "MySQL",
    },
    9: {
        question: "What is the purpose of the PRIMARY KEY in a database?",
        options: ["To uniquely identify a row", "To create indexes", "To enforce foreign keys", "To ensure data integrity"],
        correctAnswer: "To uniquely identify a row",
    },
    10: {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<h1>"],
        correctAnswer: "<a>",
    },
    11: {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Custom Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    12: {
        question: "Which of the following is a statically-typed language?",
        options: ["Python", "JavaScript", "Java", "PHP"],
        correctAnswer: "Java",
    },
    13: {
        question: "What is the file extension for JavaScript files?",
        options: [".js", ".java", ".py", ".html"],
        correctAnswer: ".js",
    },
    14: {
        question: "What is the purpose of an operating system?",
        options: ["To manage hardware and software resources", "To compile programs", "To browse the internet", "To design user interfaces"],
        correctAnswer: "To manage hardware and software resources",
    },
    15: {
        question: "Which of the following is an example of an open-source operating system?",
        options: ["Windows", "macOS", "Linux", "iOS"],
        correctAnswer: "Linux",
    },
    16: {
        question: "What does 'IDE' stand for in programming?",
        options: ["Integrated Development Environment", "Internet Development Environment", "Integrated Design Engine", "Internal Debugging Environment"],
        correctAnswer: "Integrated Development Environment",
    },
    17: {
        question: "Which of the following is not an input device?",
        options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
        correctAnswer: "Monitor",
    },
};
// console.log(questions);

const form = document.querySelector('form');
let arr = [];
for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 18);
    for (let j=0;j<arr.length;j++) {
        if (arr[j] === x) {
            i--;
            continue;
        }
    }
    arr[i] = x;
}
console.log(arr);
// <h3>Which of the following is not an input device?</h3>
// <input type="radio" name="0" value="Mouse" id="q01">
// <label for="q01">Mouse</label> <br></br>
for (let i of arr) {
    let q = document.createElement('h3');
    q.innerText = questions[i].question;

    //option 1
    let input0 = document.createElement('input');
    input0.type = 'radio';
    input0.name = i;
    input0.value = questions[i].options[0];
    input0.id = 'q' + i + '0';

    let label0 = document.createElement('label');
    label0.for = input0.id;
    label0.innerText = input0.value;

    //option 2
    let input1 = document.createElement('input');
    input1.type = 'radio';
    input1.name = i;
    input1.value = questions[i].options[1];
    input1.id = 'q' + i + '1';

    let label1 = document.createElement('label');
    label1.for = input1.id;
    label1.innerText = input1.value;

    //option 3
    let input2 = document.createElement('input');
    input2.type = 'radio';
    input2.name = i;
    input2.value = questions[i].options[2];
    input2.id = 'q' + i + '2';

    let label2 = document.createElement('label');
    label2.for = input2.id;
    label2.innerText = input2.value;

    //option 4
    let input3 = document.createElement('input');
    input3.type = 'radio';
    input3.name = i;
    input3.value = questions[i].options[3];
    input3.id = 'q' + i + '3';

    let label3 = document.createElement('label');
    label3.for = input3.id;
    label3.innerText = input3.value;

    form.appendChild(q);
    form.appendChild(input0);
    form.appendChild(label0);

    form.appendChild(input1);
    form.appendChild(label1);

    form.appendChild(input2);
    form.appendChild(label2);

    form.appendChild(input3);
    form.appendChild(label3);
}

/* <button type="submit">Submit</button> */
let button = document.createElement('button');
button.type = 'submit';
button.innerText = 'Submit'
form.appendChild(button);

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const data = new FormData(form);

    let result = 0, i = 0;
    for (let [key, val] of data.entries()) {
        if (val == questions[arr[i]].correctAnswer) result++;
        i++;
    }
    document.getElementById('result').innerHTML = `Score: ${result}`;
});
