package com.bidCircle.backend.controller;

import com.bidCircle.backend.entity.Image;
import com.bidCircle.backend.entity.Item;
import com.bidCircle.backend.model.ItemResponseModel;
import com.bidCircle.backend.service.ListingService;
import com.bidCircle.backend.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/listing")
public class ListingController {
    @Autowired
    private ListingService listingService;

    @GetMapping("/item")
    public ResponseEntity<ItemResponseModel> displayImage(@RequestParam("id") long id) throws Exception {
        Optional<Item> item = listingService.getItemById(id);
        Item itemEntity = item.orElseThrow(() -> new Exception("Item not found for id: " + id));

        List<byte[]> imageByteArray = new ArrayList<>();

        for(Image data: itemEntity.getImages()){
            byte [] imageBytes = null;
            imageBytes = data.getData().getBytes(1,(int) data.getData().length());
            imageByteArray.add(imageBytes);

        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        ItemResponseModel itemResponseModel = new ItemResponseModel();
        itemResponseModel.setData(imageByteArray);
        itemResponseModel.setDescription(itemEntity.getDescription());
        itemResponseModel.setCategory(itemEntity.getCategory().getName());
        itemResponseModel.setEndDate(sdf.format(itemEntity.getEndDate()));
        itemResponseModel.setStartDate(sdf.format(itemEntity.getStartDate()));
        itemResponseModel.setTitle(itemEntity.getTitle());
        itemResponseModel.setStartPrice(String.valueOf(itemEntity.getStartPrice()));
        itemResponseModel.setIncrementPrice(String.valueOf(itemEntity.getIncrementPrice()));
        itemResponseModel.setName(itemEntity.getAuctioneer().getCompanyName());


        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(itemResponseModel);
    }

    @GetMapping("/all")
    public List<ItemResponseModel> displayall() throws Exception {
        List<Item> items = listingService.getAll();
        List<ItemResponseModel> response  = new ArrayList<>();
        for (Item itemEntity : items) {


            List<byte[]> imageByteArray = new ArrayList<>();

            for (Image data : itemEntity.getImages()) {
                byte[] imageBytes = null;
                imageBytes = data.getData().getBytes(1, (int) data.getData().length());
                imageByteArray.add(imageBytes);

            }
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
            ItemResponseModel itemResponseModel = new ItemResponseModel();
            itemResponseModel.setData(imageByteArray);
            itemResponseModel.setDescription(itemEntity.getDescription());
            itemResponseModel.setCategory(itemEntity.getCategory().getName());
            itemResponseModel.setEndDate(sdf.format(itemEntity.getEndDate()));
            itemResponseModel.setStartDate(sdf.format(itemEntity.getStartDate()));
            itemResponseModel.setTitle(itemEntity.getTitle());
            itemResponseModel.setStartPrice(String.valueOf(itemEntity.getStartPrice()));
            itemResponseModel.setIncrementPrice(String.valueOf(itemEntity.getIncrementPrice()));
            itemResponseModel.setName(itemEntity.getAuctioneer().getCompanyName());
            response.add(itemResponseModel);

        }
        return response;
    }

}
