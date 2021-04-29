package com.Qatar2022.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Qatar2022.models.Acheteur;
import com.Qatar2022.repository.AcheteurRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")

public class AcheteurController {
	@Autowired	
	AcheteurRepository acheteurRepo;
	
	@PostMapping("/addAcheteur")
	public Acheteur createAcheteur(@RequestBody Acheteur acheteur) {
	    return acheteurRepo.save(acheteur);
	}

}