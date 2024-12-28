
// Create and append the view site overlay
// Create and append the view site overlay
function createViewOverlay() {
  // Create overlay container
  const overlayContainer = document.createElement('div');
  overlayContainer.className = 'view-site-overlay';
  overlayContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 1000;
  `;

  // Create button container for centered positioning
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'view-site-button-container';
  buttonContainer.style.cssText = `
    text-align: center;
  `;

  // Create main button
  const button = document.createElement('button');
  button.className = 'view-site-btn';
  button.style.cssText = `
    background-color: white;
    color: black;
    border: none;
    padding: 16px 32px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `;
  
  // Add hover effect
  button.onmouseenter = () => {
    button.style.transform = 'scale(1.05)';
  };
  button.onmouseleave = () => {
    button.style.transform = 'scale(1)';
  };

  // Set initial button state
  button.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5"/>
      <path d="M12 12v8"/>
      <path d="m9 16 3 3 3-3"/>
    </svg>
    View Full Site
  `;

  // Add helper text below button
  const helperText = document.createElement('div');
  helperText.style.cssText = `
    color: white;
    margin-top: 12px;
    font-size: 14px;
    opacity: 0.9;
  `;
  helperText.textContent = 'Click to expand and scroll through the full site';

  // Assemble the overlay
  buttonContainer.appendChild(button);
  buttonContainer.appendChild(helperText);
  overlayContainer.appendChild(buttonContainer);

  return { overlayContainer, button };
}

// Initialize scroll lock functionality
function initScrollLock() {
  // Get all slides
  const slides = document.querySelectorAll('.home_gallery_slide');
  
  // Process each slide
  slides.forEach(slide => {
    const { overlayContainer, button } = createViewOverlay();
    const imageWrapper = slide.querySelector('.home_gallery_image-wrapper');
    
    // Set initial styles
    imageWrapper.style.cssText = `
      height: 600px;
      overflow: hidden;
      position: relative;
      transition: height 0.3s ease;
    `;
    
    // Add overlay to slide
    imageWrapper.appendChild(overlayContainer);
    
    let isExpanded = false;
    
    // Toggle scroll lock
    button.addEventListener('click', () => {
      isExpanded = !isExpanded;
      
      if (!isExpanded) {
        // Collapse view
        imageWrapper.style.height = '600px';
        overlayContainer.style.opacity = '1';
        overlayContainer.style.pointerEvents = 'auto';
        button.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5"/>
            <path d="M12 12v8"/>
            <path d="m9 16 3 3 3-3"/>
          </svg>
          View Full Site
        `;
      } else {
        // Expand view
        imageWrapper.style.height = 'auto';
        overlayContainer.style.opacity = '0';
        overlayContainer.style.pointerEvents = 'none';
      }
    });

    // Add collapse button for expanded state
    const collapseButton = document.createElement('button');
    collapseButton.className = 'collapse-view-btn';
    collapseButton.style.cssText = `
      position: fixed;
      left: 0;
      right: 0;
      bottom: 2rem;
      background-color: black;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 16px;
      display: none;
      align-items: center;
      gap: 8px;
      z-index: 1001;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    collapseButton.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5"/>
        <path d="M12 20v-8"/>
        <path d="m9 16 3-3 3 3"/>
      </svg>
      Collapse Site
    `;

    document.body.appendChild(collapseButton);

    // Show/hide collapse button based on scroll position
    window.addEventListener('scroll', () => {
      if (isExpanded) {
        const slideRect = slide.getBoundingClientRect();
        collapseButton.style.display = slideRect.top < 0 ? 'flex' : 'none';
      } else {
        collapseButton.style.display = 'none';
      }
    });

    // Handle collapse button click
    collapseButton.addEventListener('click', () => {
      if (isExpanded) {
        slide.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          button.click(); // Collapse the view
        }, 500);
      }
    });
  });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollLock);
// forms


<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/676ee490af5bfec1dbe34450/1ig4iplu4';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->

<!-- Optional: Add this script if you want to ensure the button only shows when chat is ready -->
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function() {
    document.querySelector('button').style.display = 'block';
  };