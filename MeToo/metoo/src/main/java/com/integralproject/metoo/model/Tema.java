package com.integralproject.metoo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_tema")

public class Tema {

	// Atributos e variaveis
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private long id;
	@NotNull
	private String forum;
	@NotNull
	private String publicacao;
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
}
