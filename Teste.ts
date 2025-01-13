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

// 4) Calculo percentual de representação
function calcularPercentualPorEstado(): void {
  const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };

  const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, curr) => acc + curr, 0);

  for (let estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
  }
}

// 5) Inverter os caracteres de uma string
function inverterString(s: string): string {
  let sInvertida = "";
  for (let i = s.length - 1; i >= 0; i--) {
    sInvertida += s[i];
  }
  return sInvertida;
}

// Função para rodar todas as questões
function executar() {
  // 1) Calcular a soma
  calcularSoma();

  // 2) Verificar número na sequência de Fibonacci
  const numero = 21; // Exemplo de número a ser testado
  console.log(verificaFibonacci(numero));

  // 3) Analisar faturamento
  const faturamento = {
    "SP": [67450, 68000, 71000, 69000, 70000],
    "RJ": [36000, 35000, 37000, 36500, 36800],
    "MG": [29000, 28000, 30000, 31000, 29500],
    "ES": [27000, 27500, 26700, 26000, 25000],
    "Outros": [19000, 18000, 20000, 19000, 21000]
  };
  analisarFaturamento(faturamento);

  // 4) Calcular percentual de faturamento por estado
  calcularPercentualPorEstado();

  // 5) Inverter uma string
  const texto = "Exemplo de string"; // Exemplo de string
  console.log(`String invertida: ${inverterString(texto)}`);
}


executar();