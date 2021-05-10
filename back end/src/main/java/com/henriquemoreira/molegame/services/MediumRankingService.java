package com.henriquemoreira.molegame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.henriquemoreira.molegame.entities.MediumRanking;
import com.henriquemoreira.molegame.repositories.MediumRankingRepository;

@Service
public class MediumRankingService {

	@Autowired
	MediumRankingRepository repositorio;

	public List<MediumRanking> all() {
		return repositorio.searchTop();
	}

	public MediumRanking newRank(@RequestBody MediumRanking rank) {
		return repositorio.save(rank);
	}
}
