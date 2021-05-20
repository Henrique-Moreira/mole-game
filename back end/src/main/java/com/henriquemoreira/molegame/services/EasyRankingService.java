package com.henriquemoreira.molegame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.henriquemoreira.molegame.entities.EasyRanking;
import com.henriquemoreira.molegame.repositories.EasyRankingRepository;

@Service
public class EasyRankingService {

	@Autowired
	EasyRankingRepository repositorio;

	public List<EasyRanking> all() {
		return repositorio.searchTop();
	}

	public EasyRanking newRank(@RequestBody EasyRanking rank) {
		return repositorio.save(rank);
	}

	public List<EasyRanking> findTop5ByOrderByPontosDesc() {
		return repositorio.findTop5ByOrderByPontosDesc();
	}
}
