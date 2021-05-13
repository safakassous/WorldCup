package com.Qatar2022.models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Acheteur {
	   @Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private long id;
	   private String nom;
	   private String prenom;
	   private long numcarte;
	   private long cvc2;
	   private String e_mail;
	   @JsonFormat(pattern="yyyy-MM-dd")
	   private Date dateexp;
		public Acheteur() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public Acheteur(long id, String nom, String prenom, long numcarte, long cvc2, String e_mail, Date dateexp) {
			super();
			this.id = id;
			this.nom = nom;
			this.prenom = prenom;
			this.numcarte = numcarte;
			this.cvc2 = cvc2;
			this.e_mail = e_mail;
			this.dateexp = dateexp;
		}
			
		public String getPrenom() {
			return prenom;
		}
		public void setPrenom(String prenom) {
			this.prenom = prenom;
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public long getNumcarte() {
			return numcarte;
		}
		public void setNumcarte(long numcarte) {
			this.numcarte = numcarte;
		}
		public long getCvc2() {
			return cvc2;
		}
		public void setCvc2(long cvc2) {
			this.cvc2 = cvc2;
		}
		public String getE_mail() {
			return e_mail;
		}
		public void setE_mail(String e_mail) {
			this.e_mail = e_mail;
		}
		public Date getDateexp() {
			return dateexp;
		}
		public void setDateexp(Date dateexp) {
			this.dateexp = dateexp;
		}
		@Override
		public String toString() {
			return "Acheteur [nom=" + nom + ", prenom=" + prenom + ", numcarte=" + numcarte + ", cvc2=" + cvc2 + ", e_mail="
					+ e_mail + ", dateexp=" + dateexp + "]";
		}


}

