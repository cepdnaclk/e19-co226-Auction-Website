package com.bidCircle.backend.repository;

import com.bidCircle.backend.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public class VerificationTokenRepository extends JpaRepository<VerificationToken,long> {
}
