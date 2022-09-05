package com.viewresult.scoreResult.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DATA")
public class Student {
	private long id;
	private float maths;
	private float literatures;
	private float foreignLang;
	private float physics;
	private float chemistry;
	private float biology;
	private float history;
	private float geography;
	private float civicEdu;
	
	public Student() {
		
	}
	public Student(long id, float maths, float literatures, float history, float geography, float physics, float biology, float foreignLang, float civicEdu, float chemistry) {
		super();
		this.id = id;
		this.maths = maths;
		this.literatures = literatures;
		this.foreignLang = foreignLang;
		this.physics = physics;
		this.chemistry = chemistry;
		this.biology = biology;
		this.history = history;
		this.geography = geography;
		this.civicEdu = civicEdu;
	}
	@Id
	@Column(name = "SBD", nullable = false)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column(name = "TOÁN")
	public float getMaths() {
		return maths;
	}
	public void setMaths(float maths) {
		this.maths = maths;
	}
	@Column(name = "VĂN")
	public float getLiteratures() {
		return literatures;
	}
	public void setLiteratures(float literatures) {
		this.literatures = literatures;
	}
	@Column(name = "ANH")
	public float getForeignLang() {
		return foreignLang;
	}
	public void setForeignLang(float foreignLang) {
		this.foreignLang = foreignLang;
	}
	@Column(name = "LÍ")
	public float getPhysics() {
		return physics;
	}
	public void setPhysics(float physics) {
		this.physics = physics;
	}
	
	@Column(name = "HÓA")
	public float getChemistry() {
		return chemistry;
	}
	public void setChemistry(float chemistry) {
		this.chemistry = chemistry;
	}
	@Column(name = "SINH")
	public float getBiology() {
		return biology;
	}
	public void setBiology(float biology) {
		this.biology = biology;
	}
	
	@Column(name = "SỬ")
	public float getHistory() {
		return history;
	}
	public void setHistory(float history) {
		this.history = history;
	}
	@Column(name = "ĐỊA")
	public float getGeography() {
		return geography;
	}
	public void setGeography(float geography) {
		this.geography = geography;
	}
	
	@Column(name = "GDCD")
	public float getCivicEdu() {
		return civicEdu;
	}
	public void setCivicEdu(float civicEdu) {
		this.civicEdu = civicEdu;
	}
}
