/**
 * Utility functions for the Astro project
 */

/**
 * Generates a random light background color in hexadecimal format
 * @returns {string} A hexadecimal color string (e.g., "#b4e2c9")
 */
export function getRandomLightColor(): string {
    // Generate higher values for RGB to ensure light colors (180-240 range)
    const r: number = Math.floor(Math.random() * 60) + 180;
    const g: number = Math.floor(Math.random() * 60) + 180;
    const b: number = Math.floor(Math.random() * 60) + 180;
    
    // Ensure each hex value is two digits by padding with a leading zero if needed
    const rHex: string = r.toString(16).padStart(2, '0');
    const gHex: string = g.toString(16).padStart(2, '0');
    const bHex: string = b.toString(16).padStart(2, '0');
    
    // Convert to hex and return
    return `#${rHex}${gHex}${bHex}`;
}

/**
 * Color interface for RGB values
 */
export interface RGB {
    r: number;
    g: number;
    b: number;
}

/**
 * Converts a hexadecimal color to RGB values
 * @param {string} hex - The hexadecimal color string
 * @returns {RGB} An object containing r, g, b values
 */
export function hexToRgb(hex: string): RGB {
    // Remove the # if present
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    
    // Parse the hex values
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    
    return { r, g, b };
}

/**
 * Converts RGB values to a hexadecimal color string
 * @param {RGB} rgb - The RGB values
 * @returns {string} A hexadecimal color string
 */
export function rgbToHex(rgb: RGB): string {
    const { r, g, b } = rgb;
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}