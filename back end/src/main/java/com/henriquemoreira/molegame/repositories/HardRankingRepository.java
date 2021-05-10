package com.henriquemoreira.molegame.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.henriquemoreira.molegame.entities.HardRanking;

@Repository
public interface HardRankingRepository extends JpaRepository<HardRanking, Integer> {

	@Query(value = "SELECT * FROM hard_ranking obj ORDER BY obj.pontos DESC LIMIT 5", nativeQuery = true)
	List<HardRanking> searchTop();
}
