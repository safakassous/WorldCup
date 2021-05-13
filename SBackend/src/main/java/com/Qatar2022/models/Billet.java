package com.Qatar2022.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

	@Entity
	public class Billet {
		@Id
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private Long idBillet; //cle primaire AUTOINCR
		private Double prixBillet;
		private String categorieBillet;
		
		public Billet() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public Billet(Double prixBillet, String categorieBillet) {
			super();
			this.prixBillet = prixBillet;
			this.categorieBillet = categorieBillet;
		}

		public Long getIdBillet() {
			return idBillet;
		}

		public void setIdBillet(Long idBillet) {
			this.idBillet = idBillet;
		}

		public Double getPrixBillet() {
			return prixBillet;
		}

		public void setPrixBillet(Double prixBillet) {
			if(prixBillet!=null)
				this.prixBillet = prixBillet;
		}

		public String getCategorieBillet() {
			return categorieBillet;
		}

		public void setCategorieBillet(String categorieBillet) {
			if(categorieBillet!=null)
				this.categorieBillet = categorieBillet;
		}

		@Override
		public String toString() {
			return "Billet [idBillet=" + idBillet + ", prixBillet=" + prixBillet + ", categorieBillet="
					+ categorieBillet + "]";
		}	
		
}

