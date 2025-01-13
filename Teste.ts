// 1) Cálculo do valor SOMA
function calcularSoma(): void {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  console.log(`SOMA: ${SOMA}`);
}

// 2) Sequência de Fibonacci
function verificaFibonacci(n: number): string {
  let a = 0, b = 1;
  
  while (b < n) {
    [a, b] = [b, a + b];
  }

  return b === n 
    ? `O número ${n} pertence à sequência de Fibonacci.` 
    : `O número ${n} NÃO pertence à sequência de Fibonacci.`;
}

// 3) Análise do faturamento diário
interface Faturamento {
  [estado: string]: number[];
}

function analisarFaturamento(faturamento: Faturamento): void {
  let totalFaturamento = 0;
  let diasComFaturamento = 0;
  let maiorValor = -Infinity;
  let menorValor = Infinity;

  for (let estado in faturamento) {
    for (let valor of faturamento[estado]) {
      totalFaturamento += valor;
      diasComFaturamento += 1;
      maiorValor = Math.max(maiorValor, valor);
      menorValor = Math.min(menorValor, valor);
    }
  }

  let mediaFaturamento = totalFaturamento / diasComFaturamento;

  let diasAcimaMedia = 0;
  for (let estado in faturamento) {
    for (let valor of faturamento[estado]) {
      if (valor > mediaFaturamento) {
        diasAcimaMedia += 1;
      }
    }
  }

  console.log(`Menor faturamento: R$${menorValor}`);
  console.log(`Maior faturamento: R$${maiorValor}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
}