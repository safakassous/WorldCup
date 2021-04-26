package com.Qatar2022.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Joueur {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long idJoueur; //cle primaire AUTOINCR
	private String nom;
	private String prenom;
	private String poste;
	
	@OneToOne(mappedBy = "joueur")
    private ImageModel image;
	public Joueur() {
		super();
	}


	public Joueur(String nom, String prenom, String poste) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.poste = poste;
	}


	public Long getIdJoueur() {
		return idJoueur;
	}


	public void setIdJoueur(Long idJoueur) {
		this.idJoueur = idJoueur;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		if(nom!=null)
		this.nom = nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public void setPrenom(String prenom) {
		if(prenom!=null)
		this.prenom = prenom;
	}


	public String getPoste() {
		return poste;
	}


	public void setPoste(String poste) {
		if(poste!=null)
		this.poste = poste;
	}


	@Override
	public String toString() {
		return "Joueur [idJoueur=" + idJoueur + ", nom=" + nom + ", prenom=" + prenom + ", poste=" + poste + "]";
	}
	

	
	
}