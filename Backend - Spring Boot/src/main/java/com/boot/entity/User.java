package com.boot.entity;

import java.util.Map;

public class User {
	private String email;
	private String filename;
	private String phone;
	private Double matchpercent;
	private Map<String, String> map;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Map<String, String> getMap() {
		return map;
	}

	public void setMap(Map<String, String> map) {
		this.map = map;
	}

	public Double getMatchpercent() {
		return matchpercent;
	}

	public void setMatchpercent(Double matchpercent) {
		this.matchpercent = matchpercent;
	}

}
