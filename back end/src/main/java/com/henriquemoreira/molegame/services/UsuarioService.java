package com.henriquemoreira.molegame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.henriquemoreira.molegame.entities.Usuario;
import com.henriquemoreira.molegame.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository repositorio;
	
	public List<Usuario> allUsers() {
		return repositorio.findAll();
	}
	
	public Usuario newUser(@RequestBody Usuario usuario) {
		return repositorio.save(usuario);
	}
}
