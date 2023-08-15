function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function captarPosibleError() {
    try {
        // ... codigo aqui
        return true
    } catch (error) {
        return Error('Lanzamos un error')
    }
}


// aqui estoy llamando a las funciones declaradas arriba
const resultSuma = suma(3,6);
const resultResta = resta(10, 8);
const rsultCatch = captarPosibleError()


console.log("resultSuma", resultSuma);
console.log("resultResta", resultResta);
console.log("rsultCatch", rsultCatch);