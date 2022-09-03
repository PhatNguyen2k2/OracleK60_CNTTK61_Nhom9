package com.viewresult.scoreResult.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {
	@Id
	private String id;
	@NonNull
	private String name;
	private String gender;
	private float maths;
	private float literatures;
	private float foreignLang;
	private float physics;
	private float chemistry;
	private float biology;
	private float history;
	private float geography;
	private float civicEdu;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public float getMaths() {
		return maths;
	}
	public void setMaths(float maths) {
		this.maths = maths;
	}
	public float getLiteratures() {
		return literatures;
	}
	public void setLiteratures(float literatures) {
		this.literatures = literatures;
	}
	public float getForeignLang() {
		return foreignLang;
	}
	public void setForeignLang(float foreignLang) {
		this.foreignLang = foreignLang;
	}
	public float getPhysics() {
		return physics;
	}
	public void setPhysics(float physics) {
		this.physics = physics;
	}
	public float getChemistry() {
		return chemistry;
	}
	public void setChemistry(float chemistry) {
		this.chemistry = chemistry;
	}
	public float getBiology() {
		return biology;
	}
	public void setBiology(float biology) {
		this.biology = biology;
	}
	public float getHistory() {
		return history;
	}
	public void setHistory(float history) {
		this.history = history;
	}
	public float getGeography() {
		return geography;
	}
	public void setGeography(float geography) {
		this.geography = geography;
	}
	public float getCivicEdu() {
		return civicEdu;
	}
	public void setCivicEdu(float civicEdu) {
		this.civicEdu = civicEdu;
	}
}
