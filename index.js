const calcularGorjeta = function() {
  if (this.valor < 50) {
    this.gorjeta = this.valor * 0.2;
    return this.gorjeta;
  } else if (this.valor >= 50 && this.valor <= 200) {
    this.gorjeta = this.valor * 0.15;
    return this.gorjeta;
  } else if (this.valor > 200){
    this.gorjeta = this.valor * 0.1;
    return this.gorjeta;
  }
}

const calcularValorTotal = function() {
    this.valorTotal = parseFloat(this.valor) + parseFloat(this.gorjeta);
}

const toString = function() {
  return `Restaurante ${this.nome} - [Valor: R$ ${this.valor} | Gorjeta: R$ ${this.gorjeta.toFixed(2)} | Total: R$ ${this.valorTotal.toFixed(2)}]`;
}

const num = parseInt(prompt("Digite o número de restaurantes visitados:"));

const restaurantes = [];

for (let i = 0; i < num; i++) {
  const dadosRestaurantes = {
    setNome: function(nome) {
      this.nome = nome;
    },
    setValor: function(valor) {
        this.valor = valor;
    },
    calcularGorjeta,
    calcularValorTotal,
    toString,
  }
  dadosRestaurantes.setNome(prompt(`Informe o nome do ${i + 1}º restaurante:`));
  dadosRestaurantes.setValor(prompt(`Informe o valor da conta do ${i + 1}º restaurante:`));
  dadosRestaurantes.calcularGorjeta();
  dadosRestaurantes.calcularValorTotal();
  
  restaurantes.push(dadosRestaurantes);
}

restaurantes.maiorGasto = function() {
  let maiorGasto = 0;
  for (let i=0; i < num; i++) {
    let aux = 0;
    aux = parseFloat(restaurantes[i].valorTotal);

    if (aux >= maiorGasto) {
        maiorGasto = i;
    }
  }
  return restaurantes[maiorGasto];
}

restaurantes.totalGasto = function() {
  let total = 0;

  for (let i = 0; i < num; i++) {
    total += parseFloat(restaurantes[i].valorTotal);
  } 
  return total;
}

restaurantes.gastoMedio = function() {
  return restaurantes.totalGasto() / num;
}

restaurantes.imprimir = function() {
    console.log(`Restaurantes visitados no feriado: ${num}`);
    console.log('Lista de gastos: ');
    for (let i = 0; i < num; i++) {
      console.log(`${restaurantes[i].toString()}`);
    }
    console.log(`Total gasto: R$ ${restaurantes.totalGasto().toFixed(2)}`);
    console.log(`Média de gastos: R$ ${restaurantes.gastoMedio().toFixed(2)}`);
    console.log(`Restaurante com maior gasto total: ${restaurantes.maiorGasto().nome} R$${restaurantes.maiorGasto().valorTotal.toFixed(2)}`);
}

restaurantes.imprimir();