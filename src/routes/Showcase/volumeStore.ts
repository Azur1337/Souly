// volumeStore.ts
import { writable } from 'svelte/store';

// Create a writable store to hold the volume value
export const volumeStore = writable(0.5);
