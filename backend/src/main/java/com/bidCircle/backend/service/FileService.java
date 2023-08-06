package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Image;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {


    Image saveImages(MultipartFile file) throws Exception;
}
