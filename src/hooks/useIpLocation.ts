
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
        // Using ipapi.co which provides free IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.reason || 'Failed to detect location');
        }
        
        setLocationInfo({
          country: data.country_name,
          isIran: data.country_code === 'IR',
          loading: false,
          error: null
        });
        
        console.log(`Detected country: ${data.country_name} (${data.country_code})`);
      } catch (error) {
        console.error('Error detecting location:', error);
        setLocationInfo({
          isIran: false, // Default to false on error
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    detectLocation();
  }, []);

  return locationInfo;
};
