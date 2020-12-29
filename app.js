// SOAL 1
function invertedTriangle(num) {
    let result = ''
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num - i; j++) {
            result += ' '
        }
        for (let k = 1; k <= i; k++) {
            result += '*'
        }
        result += '\n'
    }
    return result
}

console.log(invertedTriangle(5))


// SOAL 2
function bigV(num) {
    let result = ''
    for (let i = num - 1; i >= 0; i--) {
        for (let j = num - 1; j > i; j--) {
            result += ' '
        }
        result += '#'
        for (let k = 1; k < (i * 2); k++) {
            result += ' '
        }
        if (i >= 1) {
            result += '#'
        }
        result += '\n'
    }
    return result
}

console.log(bigV(5));
console.log(bigV(4));


//SOAL 3
function pseudo1() {
    let a = 1
    let b = 5
    let c = 0
    let number = 0
    do {
        number += a
        a++
        b -= 2
        c++
    } while (number < b);
    return [a,b,c]
}
// ANSWER: 3, 1, 2
console.log(pseudo1())


// SOAL 4
function pseudo2() {
    let output = ''
    for (let i = 0; i < 2; i++) {
        output += 'i'
        for (let j = 0; j < 3; j++) {
            output += '!'
            for (let k = j; k > 0; k--) {
                output += '*'
            }
        }
    }
    return output
}
// ANSWER: i!!*!**i!!*!**
console.log(pseudo2());


// SOAL 5 
function pseudo3() {
    let number = 10
    let a = 15
    while (number < 20) {
        a -= number
        number += a

        console.log(a);
        console.log(number);
    }
    return number
}
// ANSWER: infinite loop
// console.log(pseudo3());


// SOAL 6 
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'NO'
        }
    }
    return 'YES'
}

console.log('269', isPrime(269));
console.log('12', isPrime(12));


// SOAL 7
function calculateGrade(arr) {
    let average = arr.reduce((a, b) => a + b) / arr.length;
    console.log(average);
    let grade = ''
    let status = ''
    switch (true) {
        case (average < 60):
            grade = 'Grade E'
            status = 'FAIL'
            break;

        case (average >= 60 && average <= 69):
            grade = 'Grade D'
            status = 'FAIL'
            break;
        
        case (average >= 70 && average <= 79):
            grade = 'Grade C'
            status = 'PASS'
            break;

        case (average >= 80 && average <= 89):
            grade = 'Grade B'
            status = 'PASS'
            break;

        case (average >= 90 && average <= 100):
            grade = 'Grade A'
            status = 'PASS'
            break;
    
        default:
            console.log('average value outside of parameter');
            break;
    }
    return grade + '\n' + 'STATUS: ' + status 
}

console.log(calculateGrade([70,80,90,85,95]));


// SOAL 8
function sortArray(arr) {
    let asc = [...arr]
    let desc = [...arr]
    asc.sort()
    desc.sort((a,b) => b - a)
    return [asc,desc]
}

console.log(sortArray([3,6,7,1,2]));


// SOAL 9
function rockPaperScissor(player1,player2) {
    player1 = player1.toLowerCase()
    player2 = player2.toLowerCase()
    if (player1 === player2) {
        return 'Tied!'
    }
    if (player1 === 'rock') {
        if (player2 === 'scissor') {
            return 'Player 1 Wins'
        } else {
            return 'Player 2 Wins'
        }
    }
    if (player1 === 'paper') {
        if (player2 === 'rock') {
            return 'Player 1 Wins'
        } else {
            return 'Player 2 Wins'
        }
    }
    if (player1 === 'scissor') {
        if (player2 === 'rock') {
            return 'Player 1 Wins'
        } else {
            return 'Player 2 Wins'
        }
    }
}

console.log(rockPaperScissor('PAPER','roCK'), '// PAPER roCK');
console.log(rockPaperScissor('Scissor','scissor'), '// Scissor scissor');


// SOAL 10
function personalityCalc(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let EI = arr[i][0] + arr[i][4] + arr[i][8] + arr[i][12] + arr[i][16]
        let SN = arr[i][1] + arr[i][5] + arr[i][9] + arr[i][13] + arr[i][17]
        let TF = arr[i][2] + arr[i][6] + arr[i][10] + arr[i][14] + arr[i][18]
        let JP = arr[i][3] + arr[i][7] + arr[i][11] + arr[i][15] + arr[i][19]
        
        let personality = ''
        
        let EIA = EI.split('A').length - 1
        let EIB = EI.split('B').length - 1

        let SNA = SN.split('A').length - 1
        let SNB = SN.split('B').length - 1

        let TFA = TF.split('A').length - 1
        let TFB = TF.split('B').length - 1

        let JPA = JP.split('A').length - 1
        let JPB = JP.split('B').length - 1

        if (EIA > EIB) {
            personality += 'E'
        } else {
            personality += 'I'
        }

        if (SNA > SNB) {
            personality += 'S'
        } else {
            personality += 'N'
        }

        if (TFA > TFB) {
            personality += 'T'
        } else {
            personality += 'F'
        }

        if (JPA > JPB) {
            personality += 'J'
        } else {
            personality += 'P'
        }
        
        result.push(personality)
    }
    return result
}

console.log(personalityCalc([
    'ABBAABBBBBAAABAABAAB',
    'BBBABBAAABAABBAAAAAB',
    'AABBBAAAABBBBBBBAABA'
]));