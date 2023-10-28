import { writable } from 'svelte/store';

// Create a writable store with an initial value of false (user is not signed in).
export const signedIn = writable(false);