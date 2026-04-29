// Remove common ad elements
const ads = document.querySelectorAll('[id*="ad"], [class*="ad"]');
ads.forEach(ad => ad.remove());