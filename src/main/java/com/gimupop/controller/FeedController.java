package com.gimupop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/")
public class FeedController {
    @RequestMapping("/feed")
    public String login() {
        return "html/feed.html";
    }
}
