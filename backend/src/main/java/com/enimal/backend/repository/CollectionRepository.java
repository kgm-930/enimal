package com.enimal.backend.repository;

import com.enimal.backend.dto.Etc.UserRankShowDto;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Collection;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CollectionRepository extends JpaRepository<Collection,Integer> {


    Integer countByUserId(String userId);
    @Query(value = "SELECT t.ranking from (SELECT user_id,rank() over (order by te.cnt desc) as ranking from (SELECT user_id ,count(user_id) cnt from COLLECTION c group by c.user_id order by cnt desc) te) t where user_id = :userId",nativeQuery = true)
    Integer findByUserIdRank(@Param("userId") String userId);

    List<Collection> findByUserId(String userId);
    List<Collection> findByUserIdAndAnimal(String userId, String drawEnimal);
    @Query("SELECT t.animal FROM Collection t " +
            "WHERE t.userId = :userId " +
            "group by t.animal")
    List<String> findByUserIdALL(String userId);

    Optional<Collection> findTop1ByOrderByIdxDesc();

    @Query("SELECT t FROM User t " +
            "WHERE t.idx < :lastIdx " +
            "order by t.usedcredit DESC")
    Slice<User> findAllByOrderByIdxDesc(Integer lastIdx, Pageable pageable);



    @Query("SELECT  t.userId as UserId,count(t.userId) as Cnt FROM Collection t " +
            "group by t.animal order by cnt desc")
    List<UserRankShowDto> test();
}
