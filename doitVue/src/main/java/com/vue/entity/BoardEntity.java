package com.vue.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name="BOARD")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@SequenceGenerator(name="BOARD_SEQUENCE_GENERATOR",sequenceName ="board_idx",allocationSize = 1)
//@SequenceGenerator 속성 
//name  : 식별자 생성기 이름 필수
//sequenceName  : 데이터베이스에 등록되어 있는 시퀀스 이름 hibernate_sequence
//initialValue  : DDL 생성 시에만 사용됨, 시퀀스 DDL을 생성할 때 처음 1 시작하는 수를 지정한다. 1
//allocationSize  : 시퀀스 한 번 호출에 증가하는 수 (성능 최적화에 사용), 데이터베이스 시퀀스 값이 하나씩 증가하도록 설정되어 있으면 이 값을 반드시 1로 설정해야 한다. 50

public class BoardEntity {

	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOARD_SEQUENCE_GENERATOR")
	private int idx;
	
	
	private String title;
	private String author;
	private String created_at;
	private String contents;
	
}
