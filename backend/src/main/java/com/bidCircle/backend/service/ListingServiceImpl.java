package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Item;
import com.bidCircle.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListingServiceImpl implements ListingService{

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Optional<Item> getItemById(long id) {
        return itemRepository.findById(id);
    }

    @Override
    public List<Item> getAll() {
        return itemRepository.findAll();
    }
}
