package com.vue.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vue.dto.BoardDto;
import com.vue.entity.BoardEntity;
import com.vue.repository.BoardRespository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service

public class BoardService {

	@Autowired
	private BoardRespository boardRepository ;
	
	public List<BoardDto> getBoardList(){
	
	List<BoardEntity> boardEntities = boardRepository.findAll();
	List<BoardDto> arr = new ArrayList<>();
	
	for(BoardEntity entity : boardEntities) {
		BoardDto dto=BoardDto.builder()
				.idx(entity.getIdx())
				.author(entity.getAuthor())
				.contents(entity.getContents())
				.created_at(entity.getCreated_at())
				.title(entity.getTitle())
				.build();
		arr.add(dto);
	}
	return arr;
	
	}
	
}
