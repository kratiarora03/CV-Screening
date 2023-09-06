package com.boot.helper;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

@Component
public class wordFinder {

	public String emailFinder(String words) {
		Pattern emailPattern = Pattern.compile("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b");
		Matcher matcher = emailPattern.matcher(words);
		String email = "";

		while (matcher.find()) {
			email = matcher.group();
		}
		return email;
	}

	public String findPhoneNumber(String input) {
		Pattern pattern = Pattern.compile("\\(?(\\d{3})\\)?[-.\\s]?(\\d{3})[-.\\s]?(\\d{4})");
		Matcher matcher = pattern.matcher(input);

		if (matcher.find()) {
			String areaCode = matcher.group(1);
			String firstPart = matcher.group(2);
			String secondPart = matcher.group(3);

			return areaCode + firstPart + secondPart;
		}

		return null; // If no phone number is found
	}

	public Double keyMatch(String words_pdf, List<String> list) {

		String[] words = extractWords(words_pdf);

		int unmatchedCount = 0;
		for (String word : list) {
			boolean isMatched = false;
			for (String str : words) {
				if (word.equalsIgnoreCase(str)) {
					isMatched = true;
					break;
				}
			}
			if (!isMatched) {
				unmatchedCount++;
			}
		}
		double unmatchedPercentage = (double) unmatchedCount / list.size() * 100;
		double matchedPercentage = 100 - unmatchedPercentage;
		return matchedPercentage;
	}

	public Map<String, String> match(String words_pdf, List<String> list) {

		String[] words = extractWords(words_pdf);

		Map<String, Integer> map = new HashMap<>();

		for (int i = 0; i != list.size(); i++) {
			int wordscount = 0;
			for (int j = 0; j != words.length; j++) {
				if (words[j].equals(list.get(i))) {
					wordscount++;
					map.put(list.get(i), wordscount);
				}
			}
		}

		Map<String, String> percentage = new HashMap<>();

		int total_occurences = 0;

		// Calculating total no of occurrences
		for (Map.Entry<String, Integer> entry : map.entrySet()) {
			int occ = entry.getValue();
			total_occurences += occ;
		}

		// Iterate over the map for percentage calculate
		for (Map.Entry<String, Integer> entry : map.entrySet()) {
			String topic = entry.getKey();
			int occ = entry.getValue();

			double temp = (double) occ / total_occurences * 100;

			int decimalPlaces = 2;
			DecimalFormat decimalFormat = new DecimalFormat("#." + "0".repeat(decimalPlaces));
			String percentagee = decimalFormat.format(temp);

			percentage.put(topic, percentagee);
		}
		return percentage;
	}

	private static String[] extractWords(String paragraph) {
		// Remove punctuation and convert to Lower case
		String cleanedParagraph = paragraph.replaceAll("[^a-zA-Z ]", "").toLowerCase();
		// Split into individual words
		return cleanedParagraph.split("\\s+");
	}
}
