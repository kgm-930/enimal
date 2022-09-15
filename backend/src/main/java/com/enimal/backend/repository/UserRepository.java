package com.enimal.backend.repository;

import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
}
