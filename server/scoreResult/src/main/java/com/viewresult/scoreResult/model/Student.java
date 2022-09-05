package com.viewresult.scoreResult.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

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
	@Id
	private String id;
	@NonNull
	private float maths;
	private float literatures;
	private float foreignLang;
	private float physics;
	private float chemistry;
	private float biology;
	private float history;
	private float geography;
	private float civicEdu;
	
	@Column(name = "SBD", nullable = false)
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Column(name = "Toán", nullable = false)
	public float getMaths() {
		return maths;
	}
	public void setMaths(float maths) {
		this.maths = maths;
	}
	@Column(name = "Ngữ văn", nullable = false)
	public float getLiteratures() {
		return literatures;
	}
	public void setLiteratures(float literatures) {
		this.literatures = literatures;
	}
	@Column(name = "Tiếng Anh", nullable = false)
	public float getForeignLang() {
		return foreignLang;
	}
	public void setForeignLang(float foreignLang) {
		this.foreignLang = foreignLang;
	}
	@Column(name = "Vật lí", nullable = false)
	public float getPhysics() {
		return physics;
	}
	public void setPhysics(float physics) {
		this.physics = physics;
	}
	
	@Column(name = "Hóa học", nullable = false)
	public float getChemistry() {
		return chemistry;
	}
	public void setChemistry(float chemistry) {
		this.chemistry = chemistry;
	}
	@Column(name = "Sinh học", nullable = false)
	public float getBiology() {
		return biology;
	}
	public void setBiology(float biology) {
		this.biology = biology;
	}
	
	@Column(name = "Lịch sử", nullable = false)
	public float getHistory() {
		return history;
	}
	public void setHistory(float history) {
		this.history = history;
	}
	@Column(name = "Địa lí", nullable = false)
	public float getGeography() {
		return geography;
	}
	public void setGeography(float geography) {
		this.geography = geography;
	}
	
	@Column(name = "GDCD", nullable = false)
	public float getCivicEdu() {
		return civicEdu;
	}
	public void setCivicEdu(float civicEdu) {
		this.civicEdu = civicEdu;
	}
}
