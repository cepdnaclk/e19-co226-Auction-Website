package com.bidCircle.backend.service;

import com.bidCircle.backend.entity.Category;
import com.bidCircle.backend.model.CategoryModel;
import com.bidCircle.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public void addCategory(CategoryModel categoryModel) {
        Category category = new Category();
        category.setName(categoryModel.getName());
        categoryRepository.save(category);

    }
}
