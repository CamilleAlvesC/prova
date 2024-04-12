function updateUser() {
    const idUser = document.getElementById("inputId").value;
    const nomeUser = document.getElementById("inputNome").value;
    const emailUser = document.getElementById("inputEmail").value;
    const senhaUser = document.getElementById("inputSenha").value;
    const datanascimentoUser = document.getElementById("inputDataNascimento").value;
    
    const UsuarioAtualizado = {
        nome: nomeUser,
        email: emailUser,
        senha: senhaUser,
        datanascimento: datanascimentoUser
    };
    if (!idUser) {
        Swal.fire('Por favor, insira um id!')
        return;
    }
    fetch('/backend/usuarios.php?id=' + idUser, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UsuarioAtualizado)
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
