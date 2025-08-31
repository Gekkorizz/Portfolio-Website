// Test script to check Dev.to API
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testDevToAPI() {
  try {
    console.log('Testing connection to Dev.to API...');
    const response = await fetch('https://dev.to/api/articles?per_page=3', {
      headers: {
        'User-Agent': 'Portfolio-Blog-Fetcher-Test/1.0',
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const articles = await response.json();
    console.log('Connection successful!');
    console.log(`Retrieved ${articles.length} articles`);
    console.log('First article title:', articles[0]?.title || 'No title available');
    
  } catch (error) {
    console.error('Error connecting to Dev.to API:', error);
  }
}

testDevToAPI();
