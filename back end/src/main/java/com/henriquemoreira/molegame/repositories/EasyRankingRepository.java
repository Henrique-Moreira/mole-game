package com.henriquemoreira.molegame.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.henriquemoreira.molegame.entities.EasyRanking;

@Repository
public interface EasyRankingRepository extends JpaRepository<EasyRanking, Integer> {
	
	@Query(value = "SELECT * FROM easy_ranking obj ORDER BY obj.pontos DESC LIMIT 5", nativeQuery = true)
	List<EasyRanking> searchTop10();
}
