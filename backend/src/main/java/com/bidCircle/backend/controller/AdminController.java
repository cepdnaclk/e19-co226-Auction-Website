package com.bidCircle.backend.controller;

import com.bidCircle.backend.model.AddNewSeller;
import com.bidCircle.backend.model.CategoryModel;
import com.bidCircle.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @PostMapping("/addCategory")
    public String addNewUser(@RequestBody CategoryModel categoryModel){

         adminService.addCategory(categoryModel);
         return "Success";
    }
    @PostMapping("/addSeller")
    public String addNewSeller(@RequestBody AddNewSeller addNewSeller){

        adminService.addNewSeller(addNewSeller);
        return "Success";
    }
}
