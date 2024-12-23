import jsPsychPreload from '@jspsych/plugin-preload';

import cat1 from './assets/cat/1.jpg';
import cat2 from './assets/cat/2.jpg';
import cat3 from './assets/cat/3.jpg';
import cat4 from './assets/cat/4.jpg';
import cat5 from './assets/cat/5.jpg';

// Reference these files in a new array
const catImages = [cat1, cat2, cat3, cat4, cat5];

// Create arrays of hot dog / not hot dog images
const numFiles = 5;
const hotDogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.googleapis.com/roar-hot-dog-images/hotdog/${idx}.jpg`,
);

const notHotDogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.googleapis.com/roar-hot-dog-images/nothotdog/${idx}.jpg`,
);

const dogFiles = Array.from(Array(numFiles), (_, i) => i + 1).map(
  (idx) => `https://storage.cloud.google.com/roarapplication/dog/${idx}.jpg`,
);

const allFiles = hotDogFiles.concat(notHotDogFiles);
export const allTargets = allFiles.map((url) => ({
  target: url,
  isHotDog: !url.includes('nothotdog'),
}));

/* preload images */
export const preloadImages = {
  type: jsPsychPreload,
  images: allFiles,
};

const block2Files = catImages.concat(dogFiles);
export const block2Targets = block2Files.map((url) => ({
  target: url,
  isDog: url.includes('dog'),
}));

// Preload the cat/dog images
export const preloadBlock2Images = {
  type: jsPsychPreload,
  images: block2Files,
};
