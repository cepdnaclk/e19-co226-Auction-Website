package com.bidCircle.backend.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.Date;

@Data
public class ItemModel {
    private String userName;
    private String title;
    private String description;
    private String  startDate;
    private String endDate;
    private String startPrice;
    private String incrementPrice;
    private String category;

}
