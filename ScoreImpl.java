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
public class ScoreImpl{

	@Autowired
	private EntityManager em;

	public Scores save(Scores scores) {

		if (scores.getSid() == null) {
			em.persist(scores);
		} else {
			em.merge(scores);
		}

		return scores;
	}
	
	public List<Scores> findAll() {
		return em.createQuery("from Scores").getResultList();
	}
}

