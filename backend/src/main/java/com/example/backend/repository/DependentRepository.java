package com.example.backend.repository;

import com.example.backend.model.Dependent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DependentRepository extends JpaRepository<Dependent , Long> {
}
