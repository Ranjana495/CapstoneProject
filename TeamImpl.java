package com.capstone.project.project.team;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class TeamImpl {

	@Autowired
	private EntityManager em;

	
	public List<Team> findAll() {
		return em.createQuery("from Team").getResultList();
	}
	
	public Team save(Team team) {

		if (team.getTeamname() == null) {
			em.persist(team);
		} else {
			em.merge(team);
		}

		return team;
	}
	
	public Team findByTeamName(String name) {
	   //return (Team) em.createQuery("from Team where  Team.teanmane ='"+name+"'");
	  return em.find(Team.class, name);
	}
	
	public List<Team> findRandomTeams(){
		/*List<Team> givenList =new ArrayList<>(eam);  
	    Random rand = new Random();
	    int randomElement = givenList.get(rand.nextInt(givenList.size()));*/
		return   em.createQuery(" FROM Team ORDER BY rand()").setMaxResults(3).getResultList();
	  }

}
	


//List<Team> givenList =new ArrayList<>(eam);  
// Random rand = new Random();
 //int randomElement = givenList.get(rand.nextInt(givenList.size()));*/
	 //List<Team> randt= em.createQuery(" FROM Team ORDER BY rand()").setMaxResults(3).getResultList();
	 //List<Team> randt1= em.createQuery("Select teamname FROM Team ORDER BY rand()").setMaxResults(3).getResultList();
	  //teamName.addAll(randt1);
	  //System.out.println(teamName);
	 //return randt1;


