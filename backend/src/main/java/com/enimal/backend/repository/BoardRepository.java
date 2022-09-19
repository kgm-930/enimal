package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Notice;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board,Integer> {

    Optional<Board> findTop1ByOrderByIdxDesc();
    @Query("SELECT t FROM Board t " +
            "WHERE t.user.id = :userId AND t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Board> findByUserIdOrderByIdxDesc(String userId, Integer lastIdx, Pageable pageable);
    @Query("SELECT t FROM Board t " +
            "WHERE t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Board> findAllByOrderByIdxDesc(Integer lastIdx, Pageable pageable);
}
