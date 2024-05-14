#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmeStart = async (persons) => {
    do {
        console.log(chalk.bold.hex(`#FF1493`).bgHex(`#FF1493`)(`\n\t 🌟🌟🌟 Welcome guests 🌟🌟🌟 \n\t`));
        const ans = await inquirer.prompt([{
                name: "select",
                message: chalk.bold.magenta("Who would you like to talk to? ✨🏷️"),
                type: "list",
                choices: ["by yourself", "student", "I don't want to talk to anyone"]
            }]);
        if (ans.select === "by yourself") {
            console.log(`Hello, I am talking to myself 🙂.`);
            console.log(`I'm good 😉`);
        }
        else if (ans.select === "student") {
            const ansStudent = await inquirer.prompt([{
                    name: "userInput",
                    type: "input",
                    message: "Which student do you want to talk to?",
                }]);
            const student = persons.students.find(val => val.name == ansStudent.userInput);
            if (!student) {
                const newStudent = new Student(ansStudent.userInput);
                persons.addStudent(newStudent);
                console.log(chalk.bold.italic.hex('#FFC0CB')(`Hello I am ${newStudent.name}, and I am fine. 😇 `));
                console.log(persons.students);
            }
            else {
                console.log(`Hello ${student.name}, and Yeah, I'm fine! 🥰`);
                console.log(persons.students);
            }
        }
        else if (ans.select === "I don't want to talk to anyone") {
            console.log(chalk.bold.rgb(255, 140, 0).bgRgb(255, 165, 0)(`Alright! Have a good day! 💫 `));
            break;
        }
    } while (true);
};
programmeStart(persons);
