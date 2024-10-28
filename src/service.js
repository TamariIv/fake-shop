// export const getProductsJewelry = () => {
//     return fetch('https://fakestoreapi.com/products/category/jewelery');
// }

// export const getProductsElectronics = () => {
//     return fetch('https://fakestoreapi.com/products/category/electronics');
// }

// export const getProductsBooks = async () => {
//     return fetch('http://localhost:8080/books');
// }

// src/services/service.js

const CACHE_KEY_JEWELRY = 'jewelryProducts';
const CACHE_TIME_KEY_JEWELRY = 'jewelryProductsTimestamp';
const CACHE_KEY_ELECTRONICS = 'electronicsProducts';
const CACHE_TIME_KEY_ELECTRONICS = 'electronicsProductsTimestamp';
const CACHE_KEY_BOOKS = 'booksProducts';
const CACHE_TIME_KEY_BOOKS = 'booksProductsTimestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export const getProductsJewelry = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY_JEWELRY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY_JEWELRY);
    const now = Date.now();

    // Check if the cached data is still valid
    if (cachedData && cachedTimestamp && now - cachedTimestamp < CACHE_DURATION) {
        return JSON.parse(cachedData); // Return cached data
    }

    // Fetch new data from the API
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Save fetched data to localStorage
    localStorage.setItem(CACHE_KEY_JEWELRY, JSON.stringify(data));
    localStorage.setItem(CACHE_TIME_KEY_JEWELRY, now.toString());

    return data; // Return the fetched data
};

export const getProductsElectronics = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY_ELECTRONICS);
    const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY_ELECTRONICS);
    const now = Date.now();

    // Check if the cached data is still valid
    if (cachedData && cachedTimestamp && now - cachedTimestamp < CACHE_DURATION) {
        return JSON.parse(cachedData); // Return cached data
    }

    // Fetch new data from the API
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Save fetched data to localStorage
    localStorage.setItem(CACHE_KEY_ELECTRONICS, JSON.stringify(data));
    localStorage.setItem(CACHE_TIME_KEY_ELECTRONICS, now.toString());

    return data; // Return the fetched data
};

export const getProductsBooks = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY_BOOKS);
    const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY_BOOKS);
    const now = Date.now();

    // Check if the cached data is still valid
    if (cachedData && cachedTimestamp && now - cachedTimestamp < CACHE_DURATION) {
        return JSON.parse(cachedData); // Return cached data
    }

    // Fetch new data from the API
    const response = await fetch('http://localhost:8080/books');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Save fetched data to localStorage
    localStorage.setItem(CACHE_KEY_BOOKS, JSON.stringify(data));
    localStorage.setItem(CACHE_TIME_KEY_BOOKS, now.toString());

    return data; // Return the fetched data
};

