//com for
function fibonacciIterative(n){
    if ( n < 1) return 0;
    if ( n <= 2) return 1;
    let fibNMinus1 = 1;
    let fibNMinus2 = 1;
    let fibN;
    for (let i = 3; i <= n; i++){
        fibN = fibNMinus2 + fibNMinus1;
        console.log(fibN);
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }

    return fibN;

}

//com recursão
function fibonacci(n){
    if ( n < 1) return 0;
    if ( n <= 2) return 1;
    return fibonacci(n-1)+fibonacci(n-2);

    
    
}

//com memoization
function fibonacciMemoization(n){
    const memo = [0,1];
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
    }
    return fibonacci(n);
}
console.log(fibonacci(5));