const numeros = [0, 122, 4, 6, 7, 8, 44]

const arreyNumerosPAres = numeros.every((numero) => {
    return numero % 2 === 0
});

if (arreyNumerosPAres) {
    console.log('array válido')
} else {
    console.log('arrey inválido')
}