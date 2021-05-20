package com.henriquemoreira.molegame.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henriquemoreira.molegame.entities.HardRanking;
import com.henriquemoreira.molegame.services.HardRankingService;

@RestController
@RequestMapping(value = "/hard")
public class HardRankingController {
	
	@Autowired
	HardRankingService service;
	
	@GetMapping(value = "/rank")
    public List<HardRanking> all() {
        return service.all();
}
	
	@PostMapping(value = "/new-rank")
	public HardRanking newRank(@RequestBody HardRanking rank) {
		return service.newRank(rank);
	}
	
	@GetMapping(value = "/top5")
	public List<HardRanking> top5Points() {
		return service.findTop5ByOrderByPontosDesc();
	}
}
