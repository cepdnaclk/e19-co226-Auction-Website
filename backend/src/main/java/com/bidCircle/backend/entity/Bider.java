package com.bidCircle.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Bider {
    @Id
    private String email;
    private String address1;
    private String address2;
    private String address3;
    private String province;
    private String postalCode;
    private String contactNo;
}
