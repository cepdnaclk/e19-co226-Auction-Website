package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Image;
import com.bidCircle.backend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Blob;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private ImageRepository imageRepository;
    @Override
    public Image saveImages(MultipartFile file) throws Exception {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if(fileName.contains("..")) {
                throw  new Exception("Filename contains invalid path sequence "
                        + fileName);
            }

            Image attachment = new Image();
            attachment.setFileName(fileName);
            attachment.setFileType(file.getContentType());
//            attachment.setData(file.getBytes());
            Blob blob = new javax.sql.rowset.serial.SerialBlob(file.getBytes());
            attachment.setData(blob);
            return imageRepository.save(attachment);

        } catch (Exception e) {
            throw new Exception("Could not save File: " + fileName);
        }
    }

}

