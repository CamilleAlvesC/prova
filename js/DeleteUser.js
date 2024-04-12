function deleteProd() {
    const userID = document.getElementById("getUserId").value;
    if (!userID) {
        Swal.fire('Por favor, insira um id!')
        return;
    }
    fetch('/backend/usuarios.php?id=' + userID, {
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
            Swal.fire('Não pode Deletar!')
        }else{
            Swal.fire('Excluido com sucesso!')
            document.getElementById("nomeUser").value = ''; 
        } 
        
    })
    .catch(error => Swal.fire('Coloque algum um id válido!'));
}