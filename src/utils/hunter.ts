import axios from 'axios';

import { incrementApiCallCounter } from './metrics';
// Use process.env for better security, ensure you configure your environment variables
const API_KEY = '3e7e15eab77cbb7c98823ccd3a35a1b31e69409f';
const BASE_URL = 'https://api.hunter.io/v2'; 

/**
 * Searches for email addresses associated with a given domain using the Hunter.io API.
 * @param domain The domain name to search.
 * @returns A Promise that resolves with the API response data, or rejects with an error.
 */
export const searchDomain = async (domain: string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/domain-search`, {
      params: {
        domain: domain,
        api_key: API_KEY,
      },
    });
    incrementApiCallCounter();
    return response.data;
  } catch (error) {
    console.error('Error searching domain:', error);
    throw error; // Re-throw the error for handling in the calling code
  }
};

/**
 * Verifies the deliverability of an email address using the Hunter.io API.
 * @param email The email address to verify.
 * @returns A Promise that resolves with the API response data, or rejects with an error.
 */
export const verifyEmail = async (email: string): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/email-verifier`, {
      params: {
        email: email,
        api_key: API_KEY,
      },
    });    
    incrementApiCallCounter();
    return response.data;
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error; // Re-throw the error for handling in the calling code
  }
};