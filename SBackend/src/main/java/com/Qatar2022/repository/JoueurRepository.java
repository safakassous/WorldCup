package com.Qatar2022.repository;

import java.util.Optional;

import com.Qatar2022.models.Joueur;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JoueurRepository extends JpaRepository<Joueur, Long> {

    Page<Joueur> findByEquipeId(Long equipeId, Pageable pageable);
    Optional<Joueur> findByIdAndEquipeId(Long id, Long equipeId);
    Optional<Joueur> findById(Long id);
}