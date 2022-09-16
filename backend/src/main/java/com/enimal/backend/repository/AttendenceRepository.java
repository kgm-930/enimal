package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AttendenceRepository extends JpaRepository<Attendence,Integer> {
    List<Attendence> findByUserId(String userId);

//    Optional<Attendence> findTop1ByOrderByIdxDesc();
//
//    Slice<Attendence> findByUserIdOrderByIdxDesc(String userId, Integer lastIdx, Pageable pageable);
//
//    Optional<Attendence> findTop1ByUserId(String userId);
}
