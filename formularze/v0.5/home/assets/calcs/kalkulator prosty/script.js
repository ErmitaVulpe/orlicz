window.addEventListener("load", function () {
    var equation = "0";
    var output = 0;
    var m = 0;

    class displayClass {
        updateEquation(passedEquation, input) {// continue this tought
            const equationDiv = document.getElementById("equation");
            const outputDiv = document.getElementById("output");
            let inputType

            // Checking the type of input
            if (typeof(input) === "number") {
                inputType = "number";
            } else if (input === ".") {
                inputType = "dot";
            } else {
                inputType = "operation";
            }

            // Corrections in case of missing params
            if (passedEquation === undefined) {
                equation = "0"
            } else if (passedEquation === "0" && inputType === "number") {
                equation = toString(input);
            } else {
                equation = passedEquation + input;
            }
            equationDiv.innerText = equation;
            console.log(toString(input));
            output = parseFloat(equation);
            outputDiv.innerText = output;
        };
        
        updateM(passedM) {
            const mDiv = document.getElementById("m");
            mDiv.innerText = passedM;
        };
    };
    const display = new displayClass;


    document.getElementById("mrc").addEventListener("click", () => {
        m = 0;
        display.updateM(m);
    });

    document.getElementById("m-plus").addEventListener("click", () => {
        m += output;
        display.updateM(m);
    });

    document.getElementById("m-minus").addEventListener("click", () => {
        m -= output;
        display.updateM(m);
    });

    document.getElementById("ce").addEventListener("click", () => {
        equation = "0";
        display.updateEquation();
    });

    document.getElementById("b0").addEventListener("click", () => {display.updateEquation(equation, 0)});
    document.getElementById("b1").addEventListener("click", () => {display.updateEquation(equation, 1)});
    document.getElementById("b2").addEventListener("click", () => {display.updateEquation(equation, 2)});
    document.getElementById("b3").addEventListener("click", () => {display.updateEquation(equation, 3)});
    document.getElementById("b4").addEventListener("click", () => {display.updateEquation(equation, 4)});
    document.getElementById("b5").addEventListener("click", () => {display.updateEquation(equation, 5)});
    document.getElementById("b6").addEventListener("click", () => {display.updateEquation(equation, 6)});
    document.getElementById("b7").addEventListener("click", () => {display.updateEquation(equation, 7)});
    document.getElementById("b8").addEventListener("click", () => {display.updateEquation(equation, 8)});
    document.getElementById("b9").addEventListener("click", () => {display.updateEquation(equation, 9)});

    document.getElementById("div").addEventListener("click", () => {display.updateEquation(equation, "/")});
    document.getElementById("times").addEventListener("click", () => {display.updateEquation(equation, "*")});
    document.getElementById("minus").addEventListener("click", () => {display.updateEquation(equation, "-")});
    document.getElementById("plus").addEventListener("click", () => {display.updateEquation(equation, "+")});
    document.getElementById("equals").addEventListener("click", () => {display.updateEquation(equation);});
    document.getElementById("dot").addEventListener("click", () => {display.updateEquation(equation, ".")});
});