package com.vue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vue.entity.BoardEntity;

public interface BoardRespository extends JpaRepository<BoardEntity, Integer> {
	

}
