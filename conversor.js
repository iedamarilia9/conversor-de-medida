document.getElementById('converter').addEventListener('click', function() {
    const valorMetros = parseFloat(document.getElementById('valorMetros').value);
    const unidadeMedida = document.getElementById('unidadeMedida').value;
    let resultado = '';
  
    switch (unidadeMedida) {
      case "mm":
        resultado = valorMetros * 1000 + " mm";
        break;
      case "cm":
        resultado = valorMetros * 100 + " cm";
        break;
      case "dm":
        resultado = valorMetros * 10 + " dm";
        break;
      case "dam":
        resultado = valorMetros / 10 + " dam";
        break;
      case "hm":
        resultado = valorMetros / 100 + " hm";
        break;
      case "km":
        resultado = valorMetros / 1000 + " km";
        break;
      default:
        resultado = "Opção inválida!";
        break;
    }
  
    document.getElementById('resultado').textContent = "Resultado: " + valorMetros + " m = " + resultado;
  });
  