package com.Qatar2022.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


@Entity
public class Equipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // cle primaire AUTOINCR
    private String nom;

    @OneToOne(mappedBy = "equipe")
	private LogoModelEquipe image;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "equipe")
    private Set<Joueur> joueurs = new HashSet<>();

    public Equipe() {
    }

    public Equipe(String nom) {
        this.nom = nom;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    public LogoModelEquipe getImage() {
		return this.image;
	}

	public void LogoModelEquipe(LogoModelEquipe image) {
		this.image = image;
	}
}
