/**
 * Utility functions for contact obfuscation
 */

/**
 * Encode a string to Base64
 */
export function encodeToB64(str: string): string {
  return btoa(str);
}

/**
 * Split Base64 string into chunks for data attributes
 * This helps defeat naive pattern matchers
 */
export function chunkB64(str: string): string[] {
  const chunks: string[] = [];
  const chunkSize = Math.ceil(str.length / (3 + Math.floor(Math.random() * 3))); // 3-5 chunks
  
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }
  
  return chunks;
}

/**
 * Join chunked Base64 back together
 */
export function joinChunks(chunks: string[]): string {
  return chunks.join('');
}

/**
 * Create a chunked Base64 string with dot separators
 */
export function createChunkedB64(str: string): string {
  const encoded = encodeToB64(str);
  const chunks = chunkB64(encoded);
  return chunks.join('.');
}