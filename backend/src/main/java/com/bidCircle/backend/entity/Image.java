package com.bidCircle.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String fileName;
    private String fileType;

    @Lob
    private byte[] data;

    @ManyToOne()
    @JoinColumn(
            name = "item_id",
            referencedColumnName = "id"
    )@JsonIgnore
    private Item item;


}
