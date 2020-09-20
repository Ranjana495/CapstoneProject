package com.capstone.project.project.team;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import com.capstone.project.project.team.Team;
import javax.persistence.ManyToOne;

@Entity
public class Player {

	@Id
	@GeneratedValue
    private Long pid;
	
	private String playername;
	private int age;
	private String caption;
	private String playersteam;
    private long score;
	//@ManyToOne
	//private Team team;
	
	protected Player() {
	}

	public Player(Long pid, String playername, int age , String caption,String playersteam,long score) {
		super();
		this.pid = pid;
		this.playername = playername;
		this.age = age;
		this.caption=caption;
		this.playersteam=playersteam;
		this.score=score;
	}

	 
	public long getScores() {
		return score;
	}

	public void setScores(long score) {
		this.score = score;
	} 

	public String getPlayersteam() {
		return playersteam;
	}

	public void setPlayersteam(String playersteam) {
		this.playersteam = playersteam;
	}

	public Long getId() {
		return pid;
	}

	public void setId(Long pid) {
		this.pid = pid;
	}

	public String getPlayername() {
		return playername;
	}

	public void setPlayername(String playername) {
		this.playername = playername;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
   
	 
	
	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	/*public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}*/
     
    
	@Override
	public String toString() {
		return "Player [pid=" + pid + ", playername=" + playername + ", age=" + age + ", caption=" + caption
				+ ", playersteam=" + playersteam + "]";
	}


	
}
