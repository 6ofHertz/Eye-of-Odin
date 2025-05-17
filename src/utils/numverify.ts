import axios from 'axios';

const NUMVERIFY_API_BASE_URL = 'http://apilayer.net/api/validate'; // Use HTTPS if available
const NUMVERIFY_API_KEY = import.meta.env.VITE_NUMVERIFY_API_KEY;

interface NumVerifyResponse {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  carrier: string;
  line_type: string;
}

export const validatePhoneNumber = async (phoneNumber: string): Promise<NumVerifyResponse | null> => {
  if (!NUMVERIFY_API_KEY) {
    console.error("NumVerify API key is not configured.");
    return null;
  }

  try {
    const response = await axios.get<NumVerifyResponse>(NUMVERIFY_API_BASE_URL, {
      params: {
        access_key: NUMVERIFY_API_KEY,
        number: phoneNumber,
        country_code: '', // Optional: Specify country code for better accuracy
        format: 1 // Optional: Specify format
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error validating phone number ${phoneNumber}:`, error.message);
      // Handle specific NumVerify API error codes if needed
      return null;
    } else {
      console.error(`An unexpected error occurred during phone number validation:`, error);
      return null;
    }
  }
};