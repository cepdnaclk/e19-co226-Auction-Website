package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Item;
import com.bidCircle.backend.model.ItemModel;

import java.time.DateTimeException;
import java.util.Optional;

public interface SellerService {
    Item addItem(ItemModel itemModel) throws DateTimeException;

    void saveItem(Item item);

    Optional<Item >getItemById(long id);
}
