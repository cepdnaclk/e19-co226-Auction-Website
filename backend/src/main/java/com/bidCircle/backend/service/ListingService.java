package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ListingService {
    Optional<Item> getItemById(long id);

    List<Item> getAll();
}
