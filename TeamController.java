package com.capstone.project.project.team;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TeamController {

	@Autowired
	private PlayerImpl repos;
   
	@Autowired
	private TeamImpl reposit;
	
	@Autowired
	private ScoreImpl scoreRepos;
	
	@GetMapping("/jpa/team")
	public List<Team> retrieveAllTeams()
	{
		 return reposit.findAll();
	}
	
	@GetMapping("/team")
	public List<Team> retrieveRandomTeams()
	{
		 return reposit.findRandomTeams ();
	}
	
   @GetMapping("/jpa/team/{teamname}")
   public Team getById(@PathVariable String teamname) {
         return reposit.findByTeamName(teamname) ;
        
	}
   
	@PostMapping("/jpa/team")
	public ResponseEntity<Void> save(@RequestBody Team team) {
		
		//return reposit.save(team);
		//todo.setUsername(username);
		Team createdTeam= reposit.save(team);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{teamname}").buildAndExpand(createdTeam.getTeamname()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	/* Player Retrieval*/
	
	@GetMapping("/jpa/players")
	public List<Player> retrieveAllPlayers()
	{
		 return repos.findAll();
	}
	
	@GetMapping("/{teamname}/player")
	public List<Player> retrievePlayersByTeam(@PathVariable String teamname)
	{   
		return repos.findRandomPlayerByTe(teamname);
    }
	
	@PostMapping("/jpa/player")
    public void save(@RequestBody Player player) 
	 {
	   if(player.getAge()>=18) 
	    {
		 repos.save(player);
		 }
	 }
	
	/*Score */
	@PostMapping("/jpa/score")
    public void saveScores(@RequestBody Scores score) 
	 {
	   scoreRepos.save(score);
		 
	 }
	@GetMapping("/score")
	public List<Scores> retrieveAllScore()
	{
		 return scoreRepos.findAll();
	}
	
}	
	
	

