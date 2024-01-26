const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
    function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
        elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
        `
    }

}

/*function filtrarLivros() {
    if (this.classList.value == 'btn btn-disponiveis') {
        let disponiveis = livros.filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(disponiveis)
        
    } else {
        const elementoBtn = document.getElementById(this.id)
        const categoria = elementoBtn.value
        let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
        exibirOsLivrosNaTela(livrosFiltrados);

    }
   

}*/

