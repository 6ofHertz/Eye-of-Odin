import axios from 'axios';

const HIBP_API_BASE_URL = 'https://api.haveibeenpwned.com/breachedaccount/';
const HIBP_API_KEY = import.meta.env.VITE_HIBP_API_KEY;

export interface Breach {
  Title: string;
  Name: string;
  Domain: string;
  BreachDate: string;
  AddedDate: string;
  ModifiedDate: string;
  PwnCount: number;
  Description: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalwareInfected: boolean;
  LogoType: string;
}

export const getBreachesForAccount = async (email: string): Promise<Breach[] | null> => {
  if (!HIBP_API_KEY) {
    console.error("Have I Been Pwned API key is not configured.");
    return null;
  }

  try {
    const response = await axios.get<Breach[]>(`${HIBP_API_BASE_URL}${email}`, {
      headers: {
        'hibp-api-key': HIBP_API_KEY,
        'User-Agent': 'EyeOfOdin', // Replace with your application name
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`Error fetching breaches for ${email}: Status ${error.response.status}`);
        if (error.response.status === 404) {
          console.log(`Account ${email} not found in any breaches.`);
          return []; // Return empty array for 404 (not found)
        }
        // Handle other specific error statuses if needed (e.g., 401, 403, 429)
        console.error('Response data:', error.response.data);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(`Error fetching breaches for ${email}: No response received.`);
        console.error('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error(`Error fetching breaches for ${email}: ${error.message}`);
      }
      return null; // Return null for other errors
    } else {
      console.error(`An unexpected error occurred while fetching breaches:`, error);
      return null; // Return null for unexpected errors
    }
  }
};