function updateUser() {
    const UserId = document.getElementById("getUserId").value;
    const nomeUser = document.getElementById("nomeUser").value;
    const email = document.getElementById("emailUser").value;
    const senhaUser = document.getElementById("senhaUser").value;
    const usuarioAtualizado = {
        id: UserId,
        nome: nomeUser,
        email: email,
        senha: senhaUser
    };
    if (!UserId) {
        Swal.fire('Por favor, insira o ID do Usuario!')
        return;
    }
    fetch('/backend/usuarios.php?id=' + UserId, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioAtualizado)
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
            Swal.fire('Não foi possivel atualizar!')
        }else{
            Swal.fire('Atualizado com sucesso!')
        } 
        
    })
    .catch(error => alert('Erro na requisição: ' + error));
}
