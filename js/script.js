class SuperMath {
    check(obj) {
        const validZnaks = ["+", "-", "/", "*", "%"];

        if (!validZnaks.includes(obj.znak)) {
            alert("Invalid operation! Possible operators: +, -, /, *, %.");
            this.input();
            return;
        }

        const { X: x, Y: y, znak } = obj;
        let result;

        switch (znak) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '/':
                result = x / y;
                break;
            case '*':
                result = x * y;
                break;
            case '%':
                result = x % y;
                break;
            default:
                alert("Invalid operation!");
                return;
        }

        alert( `${x} ${znak} ${y} = ${result}` );
    }

    input() {
        const x = parseFloat(prompt("Enter value for X:"));
        const y = parseFloat(prompt("Enter value for Y:"));
        const znak = prompt("Enter the operator (+, -, /, *, %):");

        const obj = { X: x, Y: y, znak: znak };
        this.check(obj);
    }
}

const operation = new SuperMath();
operation.input();