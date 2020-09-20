package com.capstone.project.project.team;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import com.capstone.project.project.team.Team;
import javax.persistence.ManyToOne;

@Entity
public class Scores {

	@Id
	@GeneratedValue
	private Long sid;
	
	private String name;
	private int scoreval;
	
    public Scores() {}
     
	public Scores(Long sid,String name,int scoreval) {
		super();
		this.sid=sid;
		 this.name=name;
		this.scoreval = scoreval;
	}
	

	public Long getSid() {
		return sid;
	}

	public void setSid(Long sid) {
		this.sid = sid;
	}

	public int getScoreVal() {
		return scoreval;
	}

	public void setScoreVal(int scoreval) {
		this.scoreval = scoreval;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Scores [sid=" + sid + ", scoreval=" + scoreval + "]";
	}
	
	
}
