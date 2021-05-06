package com.Qatar2022.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Joueur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // cle primaire AUTOINCR
	private String nom;
	private String prenom;
	private String poste;
	private Long idImage;

	@OneToOne(mappedBy = "joueur")
	private ImageModel image;

	public Joueur() {
		super();
	}
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "equipe_id", nullable = false, updatable = true, insertable = true)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Equipe equipe;

	public ImageModel getImage() {
		return this.image;
	}

	public void setImage(ImageModel image) {
		this.image = image;
	}


	public Joueur(String nom, String prenom, String poste, Long idImage,Equipe equipe) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.poste = poste;
		this.idImage = idImage;
		this.equipe=equipe;
	}

	public Long getIdImage() {
		return idImage;
	}

	public void setIdImage(Long idImage) {
		this.idImage = idImage;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long idJoueur) {
		this.id = idJoueur;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		if (nom != null)
			this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		if (prenom != null)
			this.prenom = prenom;
	}

	public String getPoste() {
		return poste;
	}

	public void setPoste(String poste) {
		if (poste != null)
			this.poste = poste;
	}

	public Equipe getEquipe() {
		return this.equipe;
	}

	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
	
	@Override
	public String toString() {
		return "Joueur [idJoueur=" + id + ", nom=" + nom + ", prenom=" + prenom + ", poste=" + poste + "]";
	}

}