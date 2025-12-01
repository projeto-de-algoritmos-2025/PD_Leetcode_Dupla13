let profitableSchemes = (n, minProfit, group, profit) => {

    // Inicialização de variáveis
    let countWays, schemes, result; 
    const MODULO = 1000000007;

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

    let g, p;

    // Percorre os valores de cada crime
    for (let i = 0; i < schemes.length; i++) {
        g = schemes[i].weight;
        p = schemes[i].value;

        // Número de pessoas é percorrido
        for (let j = n; j >= g; j--) {

            // O lucro é percorrido aqui
            let prevProfit;
            for (let k = minProfit; k >= 0; k--) {

                prevProfit = k - p;
                if (prevProfit < 0) prevProfit = 0;

                countWays[j][k] =
                    (countWays[j][k] + countWays[j - g][prevProfit]) % MODULO;
            }
        }
    }

    // Soma todas as formas que atingem o lucro mínimo
    result = 0;
    for (let i = 0; i <= n; i++) {
        result = (result + countWays[i][minProfit]) % MODULO;
    }

    return result;
};