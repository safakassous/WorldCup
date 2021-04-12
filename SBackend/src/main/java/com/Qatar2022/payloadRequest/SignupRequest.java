package com.Qatar2022.payloadRequest;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

public class SignupRequest {

    private String username;
    private String password;
	private String nom;
	private String prenom;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dateN;
	 
    private Set<String> role;
    
    public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Date getDateN() {
		return dateN;
	}

	public void setDateN(Date dateN) {
		this.dateN = dateN;
	}

	public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 

 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
}
