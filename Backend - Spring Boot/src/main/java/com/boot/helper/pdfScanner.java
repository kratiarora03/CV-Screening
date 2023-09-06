package com.boot.helper;

import java.io.IOException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class pdfScanner {

	public String scan(MultipartFile file) throws IOException {

		PDDocument document = PDDocument.load(file.getInputStream());

		PDFTextStripper textStripper = new PDFTextStripper();

		String text = textStripper.getText(document);

		document.close();

		return text;

	}
}
