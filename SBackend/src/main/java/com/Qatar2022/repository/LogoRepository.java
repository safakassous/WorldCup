package com.Qatar2022.repository;

import com.Qatar2022.models.LogoModelEquipe;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LogoRepository extends JpaRepository <LogoModelEquipe, Long>{

    Optional<LogoModelEquipe> findById(Long id);
    
}
