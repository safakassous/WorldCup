package com.Qatar2022.controllers;

import java.util.List;

import com.Qatar2022.models.Equipe;
import com.Qatar2022.repository.EquipeRepository;
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
public class EquipeController {
    @Autowired
	EquipeRepository equipeRepo;

    @GetMapping("/equipes")

	public List<Equipe> getAllDomaines() {
		List<Equipe> equipe = equipeRepo.findAll();
	    return equipe;
	}

	@PostMapping("/addEquipe")
	public Equipe createEquipe(@RequestBody Equipe equipe) {
	    return equipeRepo.save(equipe);
	}

	@GetMapping("/equipe/{id}")
	public Equipe getEquipeById(@PathVariable(value = "id") Long Id) {
	    return equipeRepo.findById(Id).orElseThrow(null);
	}


	@PutMapping("/updateEquipe/{id}")
	public Equipe updateEquipe(@PathVariable(value = "id") Long Id, @RequestBody Equipe equipeDetails) {

		Equipe equipe = equipeRepo.findById(Id).orElseThrow(null);
	    
		equipe.setNom(equipeDetails.getNom());

		Equipe updatedEquipe = equipeRepo.save(equipe);
	    return updatedEquipe;
	}

	@DeleteMapping("/deleteEquipe/{id}")
	public ResponseEntity<?> deleteEquipe(@PathVariable(value = "id") Long Id) {
		Equipe equipe = equipeRepo.findById(Id).orElseThrow(null);

		equipeRepo.delete(equipe);

	    return ResponseEntity.ok().build();
	}

    

}



