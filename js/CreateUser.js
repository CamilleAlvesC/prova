document.getElementById('submitButton').addEventListener('click', CreateUser);

function CreateUser() {
    const nome = document.getElementById('nomeUser').value;
    const email = document.getElementById('emailUser').value;
    const datanascimento = document.getElementById('datanascimento').value;
    const senha = document.getElementById('senhaUser').value;
    if (!nomeUser) {
        Swal.fire("Coloca um nome!");
        return;
    }
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        datanascimento: datanascimento
    };
    fetch('/backend/usuarios.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "ERRO 401",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Não foi possivel localizar o recurso!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  })
            }
        }
        return response.json();
    })
    .then(data => {
        if(!data.status){
            Swal.fire('Usuario já existe!')
        }else{
            Swal.fire('Usuario criado!')
            
        } 
       
    })
    .catch(error => 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "CATH ERRO!",
            footer: '<a href="#">Why do I have this issue?</a>'
          })
    )
}
