let output = "";
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < i+1; j++) {
        output += "*";
    }
    output += "\n";
}

console.log(output);

// 예제 4-8

for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10-1; j++) {
        output= " ";
    }
}


// 추가 예제 삼각형 만들기

for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10-i; j++) {
        output += " ";
    }
for (let j = 0; j < i+1; j++) {
            output += "*";
}
for (let j = 1; j < i+1; j++) {
    output += "*";
    }
    output += "\n";
}
console.log(output);