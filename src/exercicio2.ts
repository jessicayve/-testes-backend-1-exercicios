export const exercicio2 = (str:string):string =>{
    const dataReverse = str.split('/').reverse().join('/')
    return dataReverse
}