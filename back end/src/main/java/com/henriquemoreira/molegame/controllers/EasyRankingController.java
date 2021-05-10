package com.henriquemoreira.molegame.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henriquemoreira.molegame.entities.EasyRanking;
import com.henriquemoreira.molegame.services.EasyRankingService;

@RestController
@RequestMapping(value = "/easy")
public class EasyRankingController {
	
	@Autowired
	EasyRankingService service;
	
	@GetMapping(value = "/rank")
    public List<EasyRanking> all() {
        return service.all();
}
	
	@PostMapping(value = "/new-rank")
	public EasyRanking newRank(@RequestBody EasyRanking rank) {
		return service.newRank(rank);
	}
}
