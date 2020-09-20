package com.capstone.project.project.team;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//import com.capstone.project.project.player.Player;

@Entity
@Table(name="Team")
public class Team {

	@Id
	private String teamname;

	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="playersteam",referencedColumnName="teamname")
	private List<Player>player= new ArrayList<>();
	
	public Team() {
	}

	public Team( String teamname) {
		super();
		//this.tid = tid;
		this.teamname = teamname;
	}

	/*public Long getId() {
		return tid;
	}

	public void setId(Long tid) {
		this.tid = tid;
	}*/

	public String getTeamname() {
		return teamname;
	}

	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}

	
	public List<Player> getPlayers() {
		return player;
	}

	public void setPlayers(List<Player> player) {
		this.player = player;
	}  

	@Override
	public String toString() {
		return "Player [ teamname=" + teamname + "]";
	}
	
	
	
	}
