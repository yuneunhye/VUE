package com.vue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vue.dto.BoardDto;
import com.vue.service.BoardService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@CrossOrigin
@RestController
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	
	@PostMapping("/api/post")
	public ResponseEntity create(@RequestBody BoardDto vo) {
		log.debug("create"+vo);
		System.out.println(vo.getAuthor());
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@GetMapping("/api/list")
	public List<BoardDto> getBoardList(){
		return boardService.getBoardList();
		
	}
	
}
