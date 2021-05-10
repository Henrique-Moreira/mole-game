package com.henriquemoreira.molegame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.henriquemoreira.molegame.entities.HardRanking;
import com.henriquemoreira.molegame.repositories.HardRankingRepository;

@Service
public class HardRankingService {

	@Autowired
	HardRankingRepository repositorio;

	public List<HardRanking> all() {
		return repositorio.searchTop10();
	}

	public HardRanking newRank(@RequestBody HardRanking rank) {
		return repositorio.save(rank);
	}
}