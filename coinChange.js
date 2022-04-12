var coinChange = function(coins, amount,memo = {}) {
    if(amount in memo) return memo[amount];
    if(amount == 0) return [];
    if(amount < 0) return -1;
    
    let shortestCombination = -1;
    let res = [];

    for(let coin of coins){
        let remainder = amount - coin;
        const remainderCombination = coinChange(coins, remainder, memo);
        if(remainderCombination != -1){
            let combination = [...remainderCombination, coin];
           // console.log(combination);
            if(shortestCombination == -1 || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
   // return res;
    return shortestCombination;
}

console.log(coinChange([1,2,5],11));