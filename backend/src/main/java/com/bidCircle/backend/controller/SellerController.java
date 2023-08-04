package com.bidCircle.backend.controller;

import com.bidCircle.backend.entity.Image;
import com.bidCircle.backend.model.FileDataModel;
import com.bidCircle.backend.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/seller")
public class SellerController {

    @Autowired
    private FileService imageService;

    @PostMapping("/addItem")
    public List<FileDataModel> uploadFiles(@RequestParam("file") MultipartFile[] files) throws Exception {
        List<FileDataModel> responseDataList = new ArrayList<>();

        for (MultipartFile file : files) {
            Image attachment = imageService.saveImages(file); // Assuming this line is supposed to save the image to the database.
            String downloadUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/download/")
                    .path(attachment.getId())
                    .toUriString();

            FileDataModel fileDataModel = new FileDataModel(attachment.getFileName(),
                    downloadUrl,
                    file.getContentType(),
                    file.getSize());

            responseDataList.add(fileDataModel);
        }

        return responseDataList;
    }

}
