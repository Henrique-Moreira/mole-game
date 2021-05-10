package com.henriquemoreira.molegame.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henriquemoreira.molegame.entities.Usuario;
import com.henriquemoreira.molegame.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {
	
	@Autowired
	UsuarioService userService;
	
	@GetMapping
    public List<Usuario> allUsers() {
        return userService.allUsers();
}
	
	@PostMapping("/new-user")
	public Usuario novo(@RequestBody Usuario usuario) {
		return userService.newUser(usuario);
	}
}
