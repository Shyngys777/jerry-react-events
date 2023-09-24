import requests
import json
import csv
from bs4 import BeautifulSoup

# Function to scrape movie details from the provided URL
def scrape_movie_details(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extract relevant information from the webpage (customize this as needed)
    movie_title = soup.find('h1', class_='movie-title').text.strip()
    movie_description = soup.find('div', class_='movie-description').text.strip()
    
    return {
        'Title': movie_title,
        'Description': movie_description
    }

# Load the JSON data from the file
with open('movies.json', 'r') as json_file:
    movie_data = json.load(json_file)

# Create a CSV file to store the scraped data
with open('movie_details.csv', 'w', newline='', encoding='utf-8') as csv_file:
    fieldnames = ['Title', 'Description']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    
    for movie in movie_data:
        movie_url = movie['links-href']
        movie_details = scrape_movie_details(movie_url)
        
        # Write the scraped data to the CSV file
        writer.writerow(movie_details)

print("Scraping and CSV creation complete.")
