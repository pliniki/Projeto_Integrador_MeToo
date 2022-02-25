package com.integralproject.metoo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.integralproject.metoo.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository<Tema,Long>{
	
	public List<Tema> findAllByPostContainingIgnoreCase(String post);

}
