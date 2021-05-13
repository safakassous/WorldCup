package com.Qatar2022.controllers;

import java.util.List;
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
import com.Qatar2022.models.Billet;
import com.Qatar2022.repository.BilletRepository;


	@RestController
	@RequestMapping("/api")
	@CrossOrigin(origins ="http://localhost:4200")

	public class BilletController {

	@Autowired
	BilletRepository billetRepo;

	@GetMapping("/billets")

	public List<Billet> getAllBillets() {
		List<Billet> bil = billetRepo.findAll();
	    return bil;
	}

	@PostMapping("/addBillet")
	public Billet createBillet(@RequestBody Billet billet) {
	    return billetRepo.save(billet);
	}

	@GetMapping("/billet/{id}")
	public Billet getBilletById(@PathVariable(value = "id") Long Id) {
	    return billetRepo.findById(Id).orElseThrow(null);
	}

	@PutMapping("/billet/{id}")
	public Billet updateBillet(@PathVariable(value = "id") Long Id, @RequestBody Billet billetDetails) {

		Billet billet = billetRepo.findById(Id).orElseThrow(null);
	    
		billet.setPrixBillet(billetDetails.getPrixBillet());
		billet.setCategorieBillet(billetDetails.getCategorieBillet());

		Billet updatedBillet = billetRepo.save(billet);
	    return updatedBillet;
	}

	@DeleteMapping("/billet/{id}")
	public ResponseEntity<?> deleteBillet(@PathVariable(value = "id") Long billetId) {
		Billet billet = billetRepo.findById(billetId).orElseThrow(null);

		billetRepo.delete(billet);

	    return ResponseEntity.ok().build();
	}

}


