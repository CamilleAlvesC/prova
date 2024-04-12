function deleteProd() {
    const prodId = document.getElementById("getProdId").value;
    if (!prodId) {
        Swal.fire('Por favor, insira um id!')
        return;
    }
    fetch('/backend/produtos.php?id=' + prodId, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Não autorizado');
            } else {
                throw new Error('Sem rede ou não conseguiu localizar o recurso');
            }
        }
        return response.json();
    })
    .then(data => {
        if(!data.status){
            Swal.fire('ID não encontrado!')
        }else{
            if(data.status == 1){
                Swal.fire('Deletado com sucesso!')
                document.getElementById("inputNome").value = ''
                document.getElementById("inputPreco").value = ''
                document.getElementById("inputQuantidade").value = ''
            } else {
                Swal.fire('Não foi possivel Deletar!')
            }
        } 
        
    })
}