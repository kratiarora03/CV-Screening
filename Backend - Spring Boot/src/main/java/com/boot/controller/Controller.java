package com.boot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.boot.entity.User;
import com.boot.helper.pdfScanner;
import com.boot.helper.wordFinder;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Controller {

	@Autowired
	private pdfScanner pdfScanner;

	@Autowired
	private wordFinder wordFinder;

	@PostMapping(value = "/upload-file")
	public User uploadFile(@RequestParam("pdf") MultipartFile file, @RequestParam("options") List<String> list)
			throws IOException, Exception {

		String words = pdfScanner.scan(file);

		User user = new User();
		user.setFilename(file.getOriginalFilename());
		user.setEmail(wordFinder.emailFinder(words));
		user.setPhone(wordFinder.findPhoneNumber(words));
		user.setMap(wordFinder.match(words, list));
		user.setMatchpercent(wordFinder.keyMatch(words, list));

		System.out.println("Api Called");
		
		return user;
	}
}
