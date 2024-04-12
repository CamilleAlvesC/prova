function getUser() {
    const userid = document.getElementById("userid").value;

    fetch('/backend/usuarios.php?id=' + userid, {
        method: 'GET'
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
            Swal.fire('Usuario não encontrado!')
            document.getElementById("nomeUser").value = ''; 
        }else{
            document.getElementById("nomeUser").value = data.usuarios.nome;
            document.getElementById("emailUser").value = data.usuarios.email;
            document.getElementById("senhaUser").value = data.usuarios.senha;
            document.getElementById("datanascimento").value = data.usuarios.datanascimento;
        } 
       
    })
    .catch(error => Swal.fire('Coloque algum um id válido!'));
}