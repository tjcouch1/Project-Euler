var sum = 0;

var fNum1 = 1;
var fNum2 = 2;
var fNum = 2;

var problemName = 'euler2';
console.time(problemName);

while (fNum <= 4000000) {
    if (fNum % 2 === 0) {
        sum += fNum;
    }
    fNum = fNum1 + fNum2;
    if (fNum1 < fNum2) {
        fNum1 = fNum;
    } else {
        fNum2 = fNum;
    }
}

console.timeEnd(problemName);
console.log(sum);

sum = 0;

var fNumTemp = 0;
var fNumPrev = 1;
fNum = 2;

problemName = 'euler2-fast';
console.time(problemName);

while (fNum <= 4000000) {
    if (fNum % 2 === 0) {
        sum += fNum;
    }
    fNumTemp = fNum;
    fNum += fNumPrev;
    fNumPrev = fNumTemp;
}

console.timeEnd(problemName);
console.log(sum);

sum = 0;

fNumTemp = 0;
fNumPrev = 1;
fNum = 2;

problemName = 'euler2-faster';
console.time(problemName);

while (fNum <= 4000000) {
    sum += fNum;
    
    fNumTemp = fNum;
    fNum += fNumPrev;
    fNumPrev = fNumTemp;

    fNumTemp = fNum;
    fNum += fNumPrev;
    fNumPrev = fNumTemp;

    fNumTemp = fNum;
    fNum += fNumPrev;
    fNumPrev = fNumTemp;
}

console.timeEnd(problemName);
console.log(sum);