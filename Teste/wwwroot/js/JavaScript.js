var ObjetoVenda = new Object();

ObjetoVenda.CarregarProdutos = function () {
    $.ajax({
        type: 'GET',
        url: 'api/ListarProdutos',
        datatype: 'JSON',
        ContentType: 'application/json',
        cache: false,
        async: true,
        success: function (data) {
            var htmlContent = "";
            data.forEach(function (entry) {
                var idNome = "nome_" + entry.id;
                var idQtd = "qtd_" + entry.id;

                htmlContent += " <div class='col-xs-12 col-sm-4 col-md-4 col-lg-4'>";
                htmlContent += " <div class='x_panel definePanel'>";
                htmlContent += " <div class='x_content defineContener'>";

               

                htmlContent += "<label id='" + idNome + "' style='margin-right: 1em;' > Produto: " + entry.nomeProduto + "</label>";
                htmlContent += "<label> Valor: " + entry.preco + "</label>";

                htmlContent += "<input type='number' id='" + idQtd + "' style='margin-bottom: 1em; margin-right: 1em; margin-left: 1em; max-width: 4em' >";
                htmlContent += "<input type='button' onclick='ObjetoVenda.SalvarVenda(" + entry.id + ")' value='Comprar'> </br>";
                htmlContent += "</div></div></div>";
            });

            $('#DivVenda').html(htmlContent);
        }
    });
};

ObjetoVenda.SalvarVenda = function (venda) {

    var qtd = $('#qtd_' + venda).val();
    var nome = $('#nome_' + venda).text();

    $.ajax({
        type: 'POST',
        url: 'api/AdicionarProduto',
        datatype: 'JSON',
        ContentType: 'application/json',
        cache: false,
        async: true,
        data: {
            "id": venda,
            "nome": nome,
            "qtd": qtd
        },
        success: function (data) {

        }
    });
};

$(function () {
    ObjetoVenda.CarregarProdutos();
});