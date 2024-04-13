/*
document.getElementById('suma')!.addEventListener('click', () => {
    const num1 = Number((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = Number((<HTMLInputElement>document.getElementById('num2')).value);
    (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${num1 + num2}`;
});

document.getElementById('resta')!.addEventListener('click', () => {
    const num1 = Number((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = Number((<HTMLInputElement>document.getElementById('num2')).value);
    (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${num1 - num2}`;
});

document.getElementById('multiplicacion')!.addEventListener('click', () => {
    const num1 = Number((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = Number((<HTMLInputElement>document.getElementById('num2')).value);
    (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${num1 * num2}`;
});

document.getElementById('division')!.addEventListener('click', () => {
    const num1 = Number((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = Number((<HTMLInputElement>document.getElementById('num2')).value);
    if (num2 !== 0) {
        (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${num1 / num2}`;
    } else {
        (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = 'Error: División por cero';
    }
});
*/


function addNumbers(x: number, y: number): number {
    return x + y;
}

function subtractNumbers(x: number, y: number): number {
    return x - y;
}

function multiplyNumbers(x: number, y: number): number {
    return x * y;
}

function divideNumbers(x: number, y: number): number {
    if (y !== 0) {
        return x / y;
    } else {
        throw new Error('Error: División por cero');
    }
}

/*
let botonSuma = document.getElementById('suma');
let botonResta = document.getElementById('resta');
let botonMultiplicacion = document.getElementById('multiplicacion');
let botonDivision = document.getElementById('division');

if (botonSuma && botonResta && botonMultiplicacion && botonDivision) {
    botonSuma.addEventListener('click', () => {
        let num1Input = <HTMLInputElement>document.getElementById('num1');
        let num2Input = <HTMLInputElement>document.getElementById('num2');
        let resultadoParrafo = <HTMLParagraphElement>document.getElementById('resultado');
        if (num1Input && num2Input && resultadoParrafo) {
            const num1 = Number(num1Input.value);
            const num2 = Number(num2Input.value);
            resultadoParrafo.innerHTML = `Resultado: ${addNumbers(num1, num2)}`;
        }
    });

    botonResta.addEventListener('click', () => {
        let num1Input = <HTMLInputElement>document.getElementById('num1');
        let num2Input = <HTMLInputElement>document.getElementById('num2');
        let resultadoParrafo = <HTMLParagraphElement>document.getElementById('resultado');
        if (num1Input && num2Input && resultadoParrafo) {
            const num1 = Number(num1Input.value);
            const num2 = Number(num2Input.value);
            resultadoParrafo.innerHTML = `Resultado: ${subtractNumbers(num1, num2)}`;
        }
    });

    botonMultiplicacion.addEventListener('click', () => {
        let num1Input = <HTMLInputElement>document.getElementById('num1');
        let num2Input = <HTMLInputElement>document.getElementById('num2');
        let resultadoParrafo = <HTMLParagraphElement>document.getElementById('resultado');
        if (num1Input && num2Input && resultadoParrafo) {
            const num1 = Number(num1Input.value);
            const num2 = Number(num2Input.value);
            resultadoParrafo.innerHTML = `Resultado: ${multiplyNumbers(num1, num2)}`;
        }
    });

    botonDivision.addEventListener('click', () => {
        let num1Input = <HTMLInputElement>document.getElementById('num1');
        let num2Input = <HTMLInputElement>document.getElementById('num2');
        let resultadoParrafo = <HTMLParagraphElement>document.getElementById('resultado');
        if (num1Input && num2Input && resultadoParrafo) {
            const num1 = Number(num1Input.value);
            const num2 = Number(num2Input.value);
            try {
                resultadoParrafo.innerHTML = `Resultado: ${divideNumbers(num1, num2)}`;
            } catch (error) {
                if (error instanceof Error) {
                    resultadoParrafo.innerHTML = error.message;
                }
            }
        }
    });
}
*/

function getNumbers(): [number, number] {
    let num1Input = <HTMLInputElement>document.getElementById('num1');
    let num2Input = <HTMLInputElement>document.getElementById('num2');
    if (num1Input && num2Input) {
        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        return [num1, num2];
    } else {
        throw new Error('Error: Los campos de los números no se encontraron');
    }
}

let botonSuma = document.getElementById('suma');
let botonResta = document.getElementById('resta');
let botonMultiplicacion = document.getElementById('multiplicacion');
let botonDivision = document.getElementById('division');

if (botonSuma && botonResta && botonMultiplicacion && botonDivision) {
    botonSuma.addEventListener('click', () => {
        try {
            const [num1, num2] = getNumbers();
            (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${addNumbers(num1, num2)}`;
        } catch (error) {
            if (error instanceof Error) {
                (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = error.message;
            }
        }
    });

    botonResta.addEventListener('click', () => {
        try {
            const [num1, num2] = getNumbers();
            (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${subtractNumbers(num1, num2)}`;
        } catch (error) {
            if (error instanceof Error) {
                (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = error.message;
            }
        }
    });

    botonMultiplicacion.addEventListener('click', () => {
        try {
            const [num1, num2] = getNumbers();
            (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${multiplyNumbers(num1, num2)}`;
        } catch (error) {
            if (error instanceof Error) {
                (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = error.message;
            }
        }
    });

    botonDivision.addEventListener('click', () => {
        try {
            const [num1, num2] = getNumbers();
            (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = `Resultado: ${divideNumbers(num1, num2)}`;
        } catch (error) {
            if (error instanceof Error) {
                (<HTMLParagraphElement>document.getElementById('resultado')).innerHTML = error.message;
            }
        }
    });
}

