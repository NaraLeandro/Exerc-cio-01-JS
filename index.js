// Função para realizar as operações
function calcular(valor1, valor2, operador) {
    let resultado;
    let sobra;
  
    switch (operador) {
      case '+':
        resultado = valor1 + valor2;
        break;
      case '-':
        resultado = valor1 - valor2;
        break;
      case '*':
        resultado = valor1 * valor2;
        break;
      case '/':
        resultado = Math.floor(valor1 / valor2); // Divisão inteira
        sobra = valor1 % valor2; // Resto da divisão
        break;
      default:
        return "Operador inválido";
    }
  
    if (sobra === undefined) {
      return `Resultado: ${resultado}`;
    } else {
      return `Resultado: ${resultado}, Sobra: ${sobra}`;
    }
  }
  
  // Solicita os valores e operador ao usuário
  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));
  const operador = prompt("Digite o operador (+, -, *, /):");
  
  // Chama a função calcular e exibe o resultado em um prompt
  const resultado = calcular(valor1, valor2, operador);
  alert(resultado);
  