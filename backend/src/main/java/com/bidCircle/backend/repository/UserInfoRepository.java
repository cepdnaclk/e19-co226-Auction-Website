package com.bidCircle.backend.repository;

import com.bidCircle.backend.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository <UserInfo, String> {
    Optional<UserInfo> findByUserName(String userName);

    UserInfo findByEmail(String email);
}