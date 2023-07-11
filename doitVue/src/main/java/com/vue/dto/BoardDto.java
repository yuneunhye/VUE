package com.vue.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BoardDto {

	private int idx;
	private String title;
	private String author;
	private String created_at;
	private String contents;
	
}
