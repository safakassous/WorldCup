package com.Qatar2022.controllers;

import java.util.List;

import com.Qatar2022.models.Joueur;
import com.Qatar2022.repository.JoueurRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")

public class JoueurController {
	@Autowired
	JoueurRepository joueurRepo;

	@GetMapping("/joueurs")
	public List<Joueur> getAllJoueurs() {
		List<Joueur> jou = joueurRepo.findAll();
	    return jou;
	}

	@PostMapping("/addJoueur")
	public Joueur createJoueur(@RequestBody Joueur joueur) {
	    return joueurRepo.save(joueur);
	}

	@GetMapping("/joueur/{id}")
	public Joueur getJoueurtById(@PathVariable(value = "id") Long Id) {
	    return joueurRepo.findById(Id).orElseThrow(null);
	}

	@PutMapping("/updateJoueur/{id}")
	public Joueur updateJoueur(@PathVariable(value = "id") Long Id, @RequestBody Joueur joueurDetails) {

		Joueur joueur = joueurRepo.findById(Id).orElseThrow(null);
	    
		joueur.setNom(joueurDetails.getNom());
		joueur.setPrenom(joueurDetails.getPrenom());
		joueur.setPoste(joueurDetails.getPoste());
		Joueur updatedJoueur = joueurRepo.save(joueur);
	    return updatedJoueur;
	}

	@DeleteMapping("/joueur/{id}")
	public ResponseEntity<?> deleteJoueur(@PathVariable(value = "id") Long joueurId) {
		Joueur joueur = joueurRepo.findById(joueurId).orElseThrow(null);

		joueurRepo.delete(joueur);

	    return ResponseEntity.ok().build();
	}		
}