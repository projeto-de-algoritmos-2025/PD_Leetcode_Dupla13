let profitableSchemes = (n, minProfit, group, profit) => {

    // Inicialização de variáveis
    let countWays, schemes; 

    schemes = [];

    // Inicializa e preenche vetor de objetos "schemes"
    for (let i = 0; i < group.length; i++) {
        schemes.push({
            weight: group[i],   
            value: profit[i]   
        });
    }

    // inicializa vetor countWays
    countWays = [];
    for (let i = 0; i <= n; i++) {
        countWays[i] = [];
        for (let j = 0; j <= minProfit; j++) {
            countWays[i][j] = 0;
        }
    }

    // Caso base do problema
    countWays[0][0] = 1;

    for (let i = 0; i < schemes.length; i++) {

   
    }

    //return something;
};
