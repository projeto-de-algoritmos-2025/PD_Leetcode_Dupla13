int findMaxForm(char** strs, int strsSize, int m, int n) {
    // Mapeamento de dígitos;
    int zeros[strsSize], ones[strsSize];

    // Verificar dígito 0 ou 1;
    for (int i = 0; i < strsSize; i++) {
        int z = 0, o = 0;
        for (int k = 0; strs[i][k]; k++) {
            if (strs[i][k] == '0') z++;
            else o++;
        }
        zeros[i] = z;
        ones[i] = o;
    }

    int sizeArr = strsSize;

    // Criação e preenchimento da tabela;
    int dp[sizeArr+1][m + 1][n + 1];
    memset(dp, 0, sizeof(dp));

    // Pesos 0 como m, e 1 como n;
    // Quantidade de strings como valor;
    // Verificar se j e k estouram, respectivamente em m e n;
    // Aplicação de Knapsnack 2D,;
    for(int i = 1; i <= sizeArr; i++){
        for(int j = 0; j <= m; j++){
            for(int k = 0; k <= n; k++){
                if(zeros[i-1] > j || ones[i-1] > k){
                    dp[i][j][k] = dp[i-1][j][k];
                }else{
                    if(dp[i-1][j][k] > dp[i-1][j-zeros[i-1]][k-ones[i-1]] + 1){
                        dp[i][j][k] = dp[i-1][j][k];
                    }else{
                        dp[i][j][k] = dp[i-1][j-zeros[i-1]][k-ones[i-1]] + 1;
                    }
                }
            }
        }
    }
    
    printf("%d", dp[sizeArr][m][n]);

    return dp[sizeArr][m][n];

}

int main(){
    
}