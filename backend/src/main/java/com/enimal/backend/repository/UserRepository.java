package com.enimal.backend.repository;

import com.enimal.backend.dto.User.UserProfileDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "SELECT t.ranking from (SELECT id,rank() over (order by donation desc) as ranking from `USER` u) t where id = :userId",nativeQuery = true)
    Integer findByUserIdRank(@Param("userId") String userId);
    List<User> findAllByOrderByDonationDesc();
//    @Query(nativeQuery = true,value = "SELECT t.id,t.nickname,t.wallet,t.ranking from (select *,(@rank := @rank +1) as ranking from `USER` as u, (select @rank := 0 ) as b order by u.donation  desc ) t where t.id = #{userId};")
//    List<Object[]> findByIdRank(String userId);

}
