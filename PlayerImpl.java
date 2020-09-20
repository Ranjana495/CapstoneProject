package com.capstone.project.project.team;

import java.net.URI;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PlayerImpl{

	@Autowired
	private EntityManager em;

	List<Player> plist=new ArrayList<>();
	public Player save(Player player) {

		if (player.getId() == null) {
			em.persist(player);
		} else {
			em.merge(player);
		}

		return player;
	}
	
	public List<Player> findAll() {
		return em.createQuery(" from Player").getResultList();
	}

	public List<Player> findRandomPlayerByTe(String teamname)
	{
		return em.createQuery(" from Player p where p.playersteam ='"+teamname+"' ORDER BY rand()").setMaxResults(2).getResultList();
	}
	
	
}

