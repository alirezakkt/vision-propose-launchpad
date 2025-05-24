
import { useState, useEffect } from 'react';

type LocationInfo = {
  country?: string;
  isIran: boolean;
  loading: boolean;
  error: string | null;
};

export const useIpLocation = (): LocationInfo => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    isIran: false,
    loading: true,
    error: null
  });

  useEffect(() => {
    const detectLocation = async () => {
      try {
        console.log('Starting IP location detection...');
        
        // First try ipapi.co
        const response = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('IP API Response:', data);
        
        if (data.error) {
          throw new Error(data.reason || 'Failed to detect location');
        }
        
        const isIranDetected = data.country_code === 'IR';
        console.log(`Location detected - Country: ${data.country_name} (${data.country_code}), Is Iran: ${isIranDetected}`);
        
        setLocationInfo({
          country: data.country_name,
          isIran: isIranDetected,
          loading: false,
          error: null
        });
        
      } catch (error) {
        console.error('Primary IP detection failed:', error);
        
        // Fallback to ipinfo.io
        try {
          console.log('Trying fallback IP service...');
          const fallbackResponse = await fetch('https://ipinfo.io/json');
          const fallbackData = await fallbackResponse.json();
          
          const isIranDetected = fallbackData.country === 'IR';
          console.log(`Fallback detection - Country: ${fallbackData.country}, Is Iran: ${isIranDetected}`);
          
          setLocationInfo({
            country: fallbackData.country,
            isIran: isIranDetected,
            loading: false,
            error: null
          });
          
        } catch (fallbackError) {
          console.error('All IP detection services failed:', fallbackError);
          
          // Default to English if all services fail
          setLocationInfo({
            isIran: false,
            loading: false,
            error: 'Location detection failed'
          });
        }
      }
    };

    detectLocation();
  }, []);

  return locationInfo;
};
