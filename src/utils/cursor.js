/**
 * Prince Kumar Portfolio - Custom Cursor Logic
 * Powered by Vanilla JS for requestAnimationFrame performance.
 */

export const initCustomCursor = () => {
    const cursor = document.getElementById('custom-cursor');
    
    // Track mouse position with smoothing
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.15; // Lower = smoother/slower follow

    const updatePosition = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const animateCursor = () => {
        // Linear interpolation for smooth "lag" effect
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        cursorX = cursorX + (distX * speed);
        cursorY = cursorY + (distY * speed);

        if (cursor) {
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
        
        requestAnimationFrame(animateCursor);
    };

    // Interaction Listeners
    const handleMouseEnter = () => {
        cursor.classList.add('cursor-active');
        cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
        cursor.style.backgroundColor = 'rgba(6, 182, 212, 0.15)';
        cursor.style.borderColor = 'rgba(6, 182, 212, 1)';
    };

    const handleMouseLeave = () => {
        cursor.classList.remove('cursor-active');
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.borderColor = '#06b6d4';
    };

    // Initialize listeners
    window.addEventListener('mousemove', updatePosition);
    
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .glass-card, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    requestAnimationFrame(animateCursor);
};