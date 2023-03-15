window.addEventListener("load", function () {
    var equation = "0";
    var output = 0;
    var m = 0;
    // const eqationRegex = /(?:\d+(?:\.\d+)?)(?:(?:\/|\*|\+|\-)(?:\d+(?:\.\d+)?))*/; // I don't think this is needed now but keeping it just cause
    const eqationSplitRegex = /(\/|\*|\+|\-)/; // Regexes are easy to build hard to read. Change my mind

    class displayClass {
        updateEquation(passedEquation) {
            const equationDiv = document.getElementById("equation");
            equationDiv.innerText = passedEquation.split(eqationSplitRegex).join(" ");

            function calculate(equation) {
                function doMath(num1, operation, num2) {
                    switch (operation) {
                        case "*": return num1 * num2;
                        case "/": return num1 / num2;
                        case "+": return num1 + num2;
                        case "-": return num1 - num2;
                    };
                };

                function getAllIndexes(arr, val) {
                    var indexes = [], i = -1;
                    while ((i = arr.indexOf(val, i + 1)) != -1) {
                        indexes.push(i);
                    }
                    return indexes;
                };

                let operationsList = [];
                let operationsOrder = [];
                let splittedEquation = equation.split(eqationSplitRegex);
                if (!splittedEquation[splittedEquation.length - 1]) {splittedEquation = splittedEquation.slice(0, -2)}

                for (let i = 0; i < splittedEquation.length; i++) {
                    if (i % 2 === 0) {
                        splittedEquation[i] = parseFloat(splittedEquation[i]);
                    } else {
                        operationsList.push(splittedEquation[i]);
                    }
                }
                
                while (splittedEquation.length !== 1) {
                    operationsOrder = (getAllIndexes(operationsList, "*").concat(getAllIndexes(operationsList, "/"))).sort().concat((getAllIndexes(operationsList, "+").concat(getAllIndexes(operationsList, "-"))).sort());
                    splittedEquation[2 * operationsOrder[0]] = doMath(splittedEquation[operationsOrder[0]], splittedEquation.splice(operationsOrder[0] + 1, 1)[0], splittedEquation.splice(operationsOrder[0] + 1, 1)[0]);
                }
                return splittedEquation[0];
            };

            output = calculate(passedEquation);
            this.updateOutput(output);
        };

        updateOutput(passedOutput) {
            document.getElementById("output").innerText = passedOutput;
        };
        
        updateM(passedM) {
            const mDiv = document.getElementById("m");
            mDiv.innerText = passedM;
        };
    };
    const display = new displayClass;


    function addNumber(passedEquation, number) {
        equation = (passedEquation === "0" ? number.toString() : equation + number.toString());
        display.updateEquation(equation);
    };

    function addOperation(passedEquation, operation) {
        let splittedEquation = passedEquation.split(eqationSplitRegex);
        
        if (splittedEquation[splittedEquation.length -1]) {
            equation += operation;
        }
        display.updateEquation(equation);
    }

    function addDot(passedEquation) {
        let splittedEquation = passedEquation.split(eqationSplitRegex);

        if (/^\d+$/.test(splittedEquation[splittedEquation.length - 1])) {
            equation = passedEquation + ".";
        }
        display.updateEquation(equation);
    }


    document.getElementById("mrc").addEventListener("click", () => {
        if (m == 0) {} else if (output == m) {
            m = 0;
            display.updateM(m);
        } else { // here insert a regex to only add m if equation doesnt end with a number
            equation = m.toString();
            display.updateEquation(equation);
        }
    });

    document.getElementById("m-plus").addEventListener("click", () => {display.updateM(m += output);});
    document.getElementById("m-minus").addEventListener("click", () => {display.updateM(m -= output);});

    document.getElementById("ce").addEventListener("click", () => {display.updateEquation(equation = "0");});

    document.getElementById("b0").addEventListener("click", () => {addNumber(equation, 0)});
    document.getElementById("b1").addEventListener("click", () => {addNumber(equation, 1)});
    document.getElementById("b2").addEventListener("click", () => {addNumber(equation, 2)});
    document.getElementById("b3").addEventListener("click", () => {addNumber(equation, 3)});
    document.getElementById("b4").addEventListener("click", () => {addNumber(equation, 4)});
    document.getElementById("b5").addEventListener("click", () => {addNumber(equation, 5)});
    document.getElementById("b6").addEventListener("click", () => {addNumber(equation, 6)});
    document.getElementById("b7").addEventListener("click", () => {addNumber(equation, 7)});
    document.getElementById("b8").addEventListener("click", () => {addNumber(equation, 8)});
    document.getElementById("b9").addEventListener("click", () => {addNumber(equation, 9)});

    document.getElementById("div").addEventListener("click", () => {addOperation(equation, "/")});
    document.getElementById("times").addEventListener("click", () => {addOperation(equation, "*")});
    document.getElementById("minus").addEventListener("click", () => {addOperation(equation, "-")});
    document.getElementById("plus").addEventListener("click", () => {addOperation(equation, "+")});

    document.getElementById("equals").addEventListener("click", () => {display.updateEquation(equation)});

    document.getElementById("dot").addEventListener("click", () => {addDot(equation)});
});