class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos = []
    }

    Adicionar() {
        let produto = this.LerDados() 
        if (this.Validar(produto)== true){
            this.Salvar(produto)
        }
        this.Listar(produto)
        this.Cancelar()
    }
    LerDados(){
        let produto = {}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById("nome").value
        produto.qtdProduto = document.getElementById("qtd").value
        produto.classeProduto = document.getElementById("classe").value
        return produto
        }  

    Validar(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do medicamento! \n'
        } 
        if (produto.qtdProduto == '') {
            msg += 'Por favor, insira corretamente a quantidade de medicamento! \n'
        }
        if (produto.classeProduto == '') {
            msg += 'Por favor, insira corretamente a classe do medicamento! \n'
        }
        if (msg != ''){
            alert(msg)
            return false
        }
        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    Listar(){
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''

        for(let i=0; i < this.arrayProdutos.length; i++){

                let tr = tbody.insertRow()

                let td_id = tr.insertCell()
                let td_medicamento = tr.insertCell()
                let td_qtd = tr.insertCell()
                let td_classe = tr.insertCell()
                let td_del = tr.insertCell()

                td_id.innerText = this.arrayProdutos[i].id
                td_medicamento.innerText = this.arrayProdutos[i].nomeProduto
                td_qtd.innerText = this.arrayProdutos[i].qtdProduto
                td_classe.innerText = this.arrayProdutos[i].classeProduto
                let imagem = document.createElement('img')
                imagem.src = 'img/delete.png'
                imagem.setAttribute('onclick','produto.Deletar('+this.arrayProdutos[i].id+')')
                td_del.appendChild(imagem)
            }
        }

    Cancelar(){
        document.getElementById("nome").value = ""
        document.getElementById("qtd").value = ""
        document.getElementById("classe").value = ""
    }

    Deletar(id) {
        let tbody = document.getElementById('tbody')
        
        for (let i = 0; i < this.arrayProdutos.length;i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1)
                tbody.deleteRow(i)
            }

        }
        alert(`Será deletado o item ${id}`)
    }
    }

var produto = new Produto()


