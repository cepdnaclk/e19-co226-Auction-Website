package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Auctioneer;
import com.bidCircle.backend.entity.Category;
import com.bidCircle.backend.entity.Item;

import com.bidCircle.backend.model.ItemModel;
import com.bidCircle.backend.repository.AuctioneerRepository;
import com.bidCircle.backend.repository.CategoryRepository;
import com.bidCircle.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.DateTimeException;
import java.util.Optional;

@Service
public class SellerServiceImpl implements SellerService{

    @Autowired
    private AuctioneerRepository auctioneerRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Item addItem(ItemModel itemModel) throws DateTimeException {
        Item item = new Item();
        item.setDescription(itemModel.getDescription());
        item.setTitle(itemModel.getTitle());
        Auctioneer auctioneer = auctioneerRepository.findByUserName(itemModel.getUserName());
        Category category = categoryRepository.findByName(itemModel.getCategory());
        category.addItems(item);
        item.setCategory(category);
        item.setAuctioneer(auctioneer);
        item.setStartPrice(Integer.parseInt(itemModel.getStartPrice()));
        item.setIncrementPrice(Integer.parseInt(itemModel.getIncrementPrice()));
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
        try {
            item.setStartDate(format.parse(itemModel.getStartDate()));
        }catch (Exception e){
            throw new DateTimeException("invalid start date");
        }
        try {
            item.setEndDate(format.parse(itemModel.getEndDate()));
        }catch (Exception e){
            throw new DateTimeException("invalid end date");
        }return item;
    }

    @Override
    public void saveItem(Item item) {
        itemRepository.save(item);

    }

    @Override
    public Optional<Item> getItemById(long id) {
        return itemRepository.findById(id);
    }
}
