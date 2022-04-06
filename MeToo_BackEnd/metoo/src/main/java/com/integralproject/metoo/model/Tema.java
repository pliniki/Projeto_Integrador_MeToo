package com.integralproject.metoo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_tema")

public class Tema {

	// Atributos e variaveis
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String forum;
	
	private String publicacao; //descricao

	@OneToMany(mappedBy = "tema", cascade = CascadeType.ALL) 
	@JsonIgnoreProperties("tema") 
	private List<Postagem> postagem;

	// Métodos gatters and setters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getForum() {
		return forum;
	}

	public void setForum(String forum) {
		this.forum = forum;
	}

	public String getPublicacao() {
		return publicacao;
	}

	public void setPublicacao(String publicacao) {
		this.publicacao = publicacao;
	}

	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
}
