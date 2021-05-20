package com.henriquemoreira.molegame.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henriquemoreira.molegame.entities.MediumRanking;
import com.henriquemoreira.molegame.services.MediumRankingService;

@RestController
@RequestMapping(value = "/medium")
public class MediumRankingController {
	
	@Autowired
	MediumRankingService service;
	
	@GetMapping(value = "/rank")
    public List<MediumRanking> all() {
        return service.all();
}
	
	@PostMapping(value = "/new-rank")
	public MediumRanking newRank(@RequestBody MediumRanking rank) {
		return service.newRank(rank);
	}
	
	@GetMapping(value = "/top5")
	public List<MediumRanking> top5Points() {
		return service.findTop5ByOrderByPontosDesc();
	}
}
