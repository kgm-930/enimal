package com.enimal.backend.repository;

import com.enimal.backend.entity.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal,Integer> {
    List<Animal> findByGrade(String drawGradeDic);
}
