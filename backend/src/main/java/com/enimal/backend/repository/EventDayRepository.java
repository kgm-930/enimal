package com.enimal.backend.repository;

import com.enimal.backend.entity.EventDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventDayRepository extends JpaRepository<EventDay,Integer> {
}
