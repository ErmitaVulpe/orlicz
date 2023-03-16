window.addEventListener("load", function () {
    var equation = "0";
    var output = 0;
    var m = 0;
    var lastPressed = "";
    // const eqationRegex = /(?:\d+(?:\.\d+)?)(?:(?:\/|\*|\+|\-)(?:\d+(?:\.\d+)?))*/; // I don't think this is needed now but keeping it just cause
    const eqationSplitRegex = /(\/|\*|\+|\−)/; // Regexes are easy to build hard to read. Change my mind

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
                        case "−": return num1 - num2;
                    };
                };

                function getAllIndexes(arr, val) {
                    var indexes = [], i = -1;
                    while ((i = arr.indexOf(val, i + 1)) != -1) {
                        indexes.push(i);
                    }
                    return indexes;
                };

                let operationsOrder = [];
                let splittedEquation = equation.split(eqationSplitRegex);
                if (!splittedEquation[splittedEquation.length - 1]) { splittedEquation = splittedEquation.slice(0, -2) }

                for (let i = 0; i < splittedEquation.length; i++) {
                    if (i % 2 === 0) {
                        splittedEquation[i] = parseFloat(splittedEquation[i]);
                    }
                }

                while (splittedEquation.length !== 1) {
                    operationsOrder = (getAllIndexes(splittedEquation, "*").concat(getAllIndexes(splittedEquation, "/"))).sort().concat((getAllIndexes(splittedEquation, "+").concat(getAllIndexes(splittedEquation, "−"))).sort());

                    splittedEquation[operationsOrder[0] - 1] = doMath(splittedEquation[operationsOrder[0] - 1], splittedEquation.splice(operationsOrder[0], 1)[0], splittedEquation.splice(operationsOrder[0], 1)[0]);
                    operationsOrder.shift();
                };
                return splittedEquation[0];
            };

            output = calculate(passedEquation);
            this.updateOutput(output);
        };

        updateOutput(passedOutput) {
            document.getElementById("output").innerText = (isNaN(passedOutput) || passedOutput === Infinity ? "Błąd" : passedOutput);
        };

        updateM(passedM) {
            const mDiv = document.getElementById("m");
            mDiv.innerText = passedM;
            lastPressed = "";
        };
    };
    const display = new displayClass;


    function addNumber(passedEquation, number) {
        equation = (passedEquation === "0" ? number.toString() : equation + number.toString());
        display.updateEquation(equation);
        lastPressed = "";
    };

    function addOperation(passedEquation, operation) {
        let splittedEquation = passedEquation.split(eqationSplitRegex);

        if (splittedEquation[splittedEquation.length - 1]) {
            equation += operation;
        }
        display.updateEquation(equation);
        lastPressed = "";
    }

    function addDot(passedEquation) {
        let splittedEquation = passedEquation.split(eqationSplitRegex);

        if (/^\d+$/.test(splittedEquation[splittedEquation.length - 1])) {
            equation = passedEquation + ".";
        }
        display.updateEquation(equation);
        lastPressed = "";
    }

    function pushHistory(passedEquation, passedOutput) {
        const history1 = document.getElementById("history-1");
        const history2 = document.getElementById("history-2");
        const history3 = document.getElementById("history-3");

        history3.innerText = history2.innerText;
        history2.innerText = history1.innerText;
        history1.innerText = `${passedEquation.split(eqationSplitRegex).join(" ")} = ${passedOutput}`
    }


    document.getElementById("mrc").addEventListener("click", () => {
        if (m == 0) { } else if (output === m) {
            m = 0;
            display.updateM(m);
        } else {
            let splittedEquation = equation.split(eqationSplitRegex);
            if (!splittedEquation[splittedEquation.length - 1]) { splittedEquation = splittedEquation.slice(0, -1) }
            console.log(splittedEquation);
            if (splittedEquation.length % 2 === 0) {equation += m.toString();
            } else if (splittedEquation.length === 1) {equation = m.toString()}
            display.updateEquation(equation);
        }
    });

    document.getElementById("m-plus").addEventListener("click", () => { display.updateM(m += output); });
    document.getElementById("m-minus").addEventListener("click", () => { display.updateM(m -= output); });

    document.getElementById("ce").addEventListener("click", () => { display.updateEquation(equation = "0"); lastPressed = ""; });

    document.getElementById("b0").addEventListener("click", () => { addNumber(equation, 0) });
    document.getElementById("b1").addEventListener("click", () => { addNumber(equation, 1) });
    document.getElementById("b2").addEventListener("click", () => { addNumber(equation, 2) });
    document.getElementById("b3").addEventListener("click", () => { addNumber(equation, 3) });
    document.getElementById("b4").addEventListener("click", () => { addNumber(equation, 4) });
    document.getElementById("b5").addEventListener("click", () => { addNumber(equation, 5) });
    document.getElementById("b6").addEventListener("click", () => { addNumber(equation, 6) });
    document.getElementById("b7").addEventListener("click", () => { addNumber(equation, 7) });
    document.getElementById("b8").addEventListener("click", () => { addNumber(equation, 8) });
    document.getElementById("b9").addEventListener("click", () => { addNumber(equation, 9) });

    document.getElementById("div").addEventListener("click", () => { addOperation(equation, "/") });
    document.getElementById("times").addEventListener("click", () => { addOperation(equation, "*") });
    document.getElementById("minus").addEventListener("click", () => { addOperation(equation, "−") });
    document.getElementById("plus").addEventListener("click", () => { addOperation(equation, "+") });

    document.getElementById("equals").addEventListener("click", () => {
        let splittedEquation = equation.split(eqationSplitRegex);
        if (!splittedEquation[splittedEquation.length - 1]) { splittedEquation = splittedEquation.slice(0, -2) }

        if (lastPressed === "equals" && splittedEquation.length > 2) { splittedEquation = splittedEquation.concat(splittedEquation.slice(splittedEquation.length - 2)) }

        equation = splittedEquation.join('');
        display.updateEquation(equation);

        pushHistory(equation, output);
        lastPressed = "equals";
    });

    document.getElementById("dot").addEventListener("click", () => { addDot(equation) });
});