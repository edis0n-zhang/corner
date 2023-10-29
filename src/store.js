import { writable } from 'svelte/store';

// Create a writable store with an initial value of false (user is not signed in).
export const signedIn = writable(false);

export const feedStore = writable([
  { user: "Tanay", content: "i wrote a sick blog post! i wrote a sick blog post! i wrote a sick blog post! i wrote a sick blog post! i wrote a sick blog post! i wrote a sick blog post!" },
  { user: "Edison", content: "I hate frontend development." },
  { user: "Leo", content: "no more css..." },
  // Add more items as required
]);