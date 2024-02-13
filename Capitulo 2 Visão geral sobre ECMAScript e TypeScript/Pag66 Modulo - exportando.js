//O modulo permite organizar melhor o codigo se estivermos criando uma biblioteca ou trabalhando em um projeto grande, permitindo usar funções de arquivos diferentes com um precesso de importar e e exportar arquivo.
//neste aquivo vamos exportar duas funções:
const circleArea = r => 3.14*(r**2);
const squareArea = s => s*s;
const soma3 = (a,b,c) => a+b+c;

export{ circleArea, squareArea};
export{ squareArea as square}; //exportando como 'square'
export{ soma3};