import axios from 'axios';

const GOOGLE_SEARCH_API_BASE_URL = 'https://www.googleapis.com/customsearch/v1';
const GOOGLE_SEARCH_API_KEY = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY; // We will configure this in the next step
const GOOGLE_SEARCH_ENGINE_ID = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID; // We will configure this in the next step

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export const searchWeb = async (query: string): Promise<SearchResult[] | null> => {
  if (!GOOGLE_SEARCH_API_KEY || !GOOGLE_SEARCH_ENGINE_ID) {
    console.error("Google Custom Search API key or Search Engine ID is not configured.");
    return null;
  }

  try {
    const response = await axios.get<{ items?: SearchResult[] }>(GOOGLE_SEARCH_API_BASE_URL, {
      params: {
        key: GOOGLE_SEARCH_API_KEY,
        cx: GOOGLE_SEARCH_ENGINE_ID,
        q: query,
      },
    });
    return response.data.items || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error searching web for "${query}":`, error.message);
      // Handle specific Google API error codes if needed
      return null;
    } else {
      console.error(`An unexpected error occurred during web search:`, error);
      return null;
    }
  }
};