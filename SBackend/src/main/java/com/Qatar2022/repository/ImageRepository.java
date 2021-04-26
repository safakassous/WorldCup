package com.Qatar2022.repository;


import java.util.Optional;
import com.Qatar2022.models.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {

    Optional<ImageModel> findById(Long id);

}