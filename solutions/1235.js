let jobScheduling = (startTime, endTime, profit) => {

    // Inicialização de variáveis
    let jobs = []
    let p;
    let low, high, mid, targetStart;  
    let m, includeProfit, excludeProfit;

    // Preenchimento do vetor de objetos "jobs"
    for (let i = 0; i < endTime.length; i++) {
        jobs.push({
            "start": startTime[i],
            "end": endTime[i],
            "profit": profit[i]
        });
    };

    // Ordenar os processos de forma crescente pelo valor do término
    jobs.sort((a, b) => {
        return a["end"] - b["end"];
    });
    
    // Busca binária para achar a sequência que não se sobrepõe
    p = [];

    for (let i = 0; i < jobs.length; i++) {
        low = 0;
        high = i - 1;
        targetStart = jobs[i].start;
        p[i] = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (jobs[mid].end <= targetStart) {
                if (mid + 1 < i && jobs[mid + 1].end <= targetStart) {
                    low = mid + 1;
                } else {
                    p[i] = mid;
                    break;
                }
            } else {
                high = mid - 1;
            }
        }
    }

    // Soma dos lucros das sequências que não se sobrepõem
    m = [];
    m[0] = jobs[0].profit;

    for (let i = 1; i < jobs.length; i++) {
        includeProfit = jobs[i].profit;
        if (p[i] !== -1) 
            includeProfit += m[p[i]];

        excludeProfit = m[i - 1];

        m[i] = Math.max(includeProfit, excludeProfit);
    }
    return m[m.length-1];
};
