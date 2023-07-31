package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.PasswordResetToken;
import com.bidCircle.backend.entity.UserInfo;
import com.bidCircle.backend.entity.VerificationToken;
import com.bidCircle.backend.model.UserModel;
import com.bidCircle.backend.repository.PasswordResetTokenRepository;
import com.bidCircle.backend.repository.UserInfoRepository;
import com.bidCircle.backend.repository.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserInfoRepository userRepository;

    @Autowired
    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserInfo registerUser(UserModel userModel) {
        UserInfo user = new UserInfo();
        user.setEmail(userModel.getEmail());
        user.setUserName(userModel.getUserName());
        user.setRoles(userModel.getRoles());
        user.setPassword(passwordEncoder.encode(userModel.getPassword()));

        userRepository.save(user);
        return user;
    }

    @Override
    public void saveVerificationTokenForUser(String token, UserInfo user) {
        VerificationToken verificationToken
                = new VerificationToken(user, token);

        verificationTokenRepository.save(verificationToken);
    }

    @Override
    public String validateVerificationToken(String token) {
        VerificationToken verificationToken
                = verificationTokenRepository.findByToken(token);

        if (verificationToken == null) {
            return "invalid";
        }

        UserInfo user = verificationToken.getUser();
        Calendar cal = Calendar.getInstance();

        if ((verificationToken.getExpirationTime().getTime()
                - cal.getTime().getTime()) <= 0) {
            verificationTokenRepository.delete(verificationToken);
            return "expired";
        }

        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }

    @Override
    public VerificationToken generateNewVerificationToken(String oldToken) {
        VerificationToken verificationToken
                = verificationTokenRepository.findByToken(oldToken);
        verificationToken.setToken(UUID.randomUUID().toString());
        verificationTokenRepository.save(verificationToken);
        return verificationToken;
    }

    @Override
    public UserInfo findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void createPasswordResetTokenForUser(UserInfo user, String token) {
        PasswordResetToken passwordResetToken
                = new PasswordResetToken(user,token);
        passwordResetTokenRepository.save(passwordResetToken);
    }

    @Override
    public String validatePasswordResetToken(String token) {
        PasswordResetToken passwordResetToken
                = passwordResetTokenRepository.findByToken(token);

        if (passwordResetToken == null) {
            return "invalid";
        }

        UserInfo user = passwordResetToken.getUser();
        Calendar cal = Calendar.getInstance();

        if ((passwordResetToken.getExpirationTime().getTime()
                - cal.getTime().getTime()) <= 0) {
            passwordResetTokenRepository.delete(passwordResetToken);
            return "expired";
        }

        return "valid";
    }

    @Override
    public Optional<UserInfo> getUserByPasswordResetToken(String token) {
        return Optional.ofNullable(passwordResetTokenRepository.findByToken(token).getUser());
    }

    @Override
    public void changePassword(UserInfo user, String newPassword) {
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    @Override
    public boolean checkIfValidOldPassword(UserInfo user, String oldPassword) {
        return passwordEncoder.matches(oldPassword, user.getPassword());
    }
}
