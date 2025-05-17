import axios from 'axios';
import { incrementApiCallCounter } from '../utils/metrics';

const IPINFO_API_BASE_URL = 'https://api.ipinfo.io/lite/';
const IPINFO_API_KEY = import.meta.env.VITE_IPINFO_API_KEY; // Ensure you have this in your .env file

export interface IpGeolocation {
  country: string;
  // Add other fields from the Lite API response if needed (e.g., country code)
  // Refer to IPinfo Lite documentation for the exact response structure
}

export const getIpGeolocation = async (ipAddress: string): Promise<IpGeolocation | null> => {
  if (!IPINFO_API_KEY) {
    console.error("IPinfo API key is not configured. Please add VITE_IPINFO_API_KEY to your .env file.");
    return null;
  }

  // Basic IP address format validation (you can enhance this)
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (!ipRegex.test(ipAddress)) {
    console.error(`Invalid IP address format: ${ipAddress}`);
    return null;
  }

  try {
    const response = await axios.get<IpGeolocation>(`${IPINFO_API_BASE_URL}${ipAddress}?token=${IPINFO_API_KEY}`);
    incrementApiCallCounter();
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching geolocation for ${ipAddress}:`, error.message);
      // You can add more specific error handling based on IPinfo API responses
      if (error.response) {
        console.error("IPinfo API response data:", error.response.data);
        console.error("IPinfo API response status:", error.response.status);
      }
      return null; // Return null for API errors
    } else {
      console.error(`An unexpected error occurred while fetching geolocation:`, error);
      return null; // Return null for other unexpected errors
    }
  }
};
