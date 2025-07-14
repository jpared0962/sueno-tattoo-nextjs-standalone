import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UpdateBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ff6b6b;
  color: white;
  padding: 12px;
  text-align: center;
  font-weight: 500;
  z-index: 10000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;

const UpdateButton = styled.button`
  background: white;
  color: #ff6b6b;
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  margin-left: 12px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const CacheRefreshBanner = () => {
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  
  useEffect(() => {
    // Check if user needs to refresh due to old cached version
    const lastCacheCheck = localStorage.getItem('lastCacheCheck');
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    // Show banner if it's been more than an hour since last check
    if (!lastCacheCheck || (currentTime - parseInt(lastCacheCheck)) > oneHour) {
      setShowUpdateBanner(true);
    }
  }, []);
  
  const handleRefresh = () => {
    // Clear all caches and refresh
    localStorage.clear();
    sessionStorage.clear();
    
    if ('serviceWorker' in navigator && 'caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
    }
    
    // Hard refresh
    window.location.reload(true);
  };
  
  const handleDismiss = () => {
    localStorage.setItem('lastCacheCheck', Date.now().toString());
    setShowUpdateBanner(false);
  };
  
  if (!showUpdateBanner) return null;
  
  return (
    <UpdateBanner>
      🔄 New version available! For the best experience, please refresh the page.
      <UpdateButton onClick={handleRefresh}>
        Refresh Now
      </UpdateButton>
      <UpdateButton onClick={handleDismiss} style={{ background: 'transparent', color: 'white', border: '1px solid white' }}>
        Dismiss
      </UpdateButton>
    </UpdateBanner>
  );
};

export default CacheRefreshBanner;
