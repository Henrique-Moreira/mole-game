package com.henriquemoreira.molegame.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.henriquemoreira.molegame.entities.MediumRanking;

@Repository
public interface MediumRankingRepository extends JpaRepository<MediumRanking, Integer> {

	@Query(value = "SELECT * FROM medium_ranking obj ORDER BY obj.pontos DESC LIMIT 5", nativeQuery = true)
	List<MediumRanking> searchTop();
	
	List<MediumRanking> findTop5ByOrderByPontosDesc();
}
