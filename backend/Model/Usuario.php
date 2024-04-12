<?php
namespace App\Model;
class Usuario {
    private $userid;
    private $nome;
    private $email;
    private $senha;
    private $datanascimento;
    public $conn;

    public function __construct() {
        $this->conn = new Model();
        $this->conn->createTableFromModel($this);
    }

    public function getUsuarioId(){
        return $this->userid;
    }

    public function setUsuarioId($userid): self{
        $this->userid = $userid;

        return $this;
    }

    public function getNome(){
        return $this->nome;
    }

    public function setNome($nome): self{
        $this->nome = $nome;

        return $this;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setEmail($email): self{
        $this->email = $email;

        return $this;
    }

    public function getDataNascimento(){
        return $this->datanascimento;
    }

    public function setDataNacimento($datanascimento): self{
        $this->datanascimento = $datanascimento;

        return $this;
    }

    public function getSenha() {
        return $this->senha;
    }

    public function setSenha($senha): self {
        $this->senha = password_hash($senha, PASSWORD_DEFAULT);
        return $this;
    }

    public function getType() {
        return 'User';
    }

    public function toArray() {
        return ['id' => $this->getUsuarioId(), 'nome' => $this->getNome(), 'email' => $this->getEmail(), 'senha' => $this->getSenha(), 'datanascimento' => $this->getDataNascimento(), 'type' => $this->getType()];
    }
}
