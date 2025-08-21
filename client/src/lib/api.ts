// API configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Get full API URL for endpoints
export const getApiUrl = (path: string) => `${API_URL}${path}`;

