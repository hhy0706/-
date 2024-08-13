import { cp } from 'fs/promises';

const copyDir = async (src, dist) => {
  try {
    await cp(src, dist, { recursive: true });
    console.log(`Directory ${src} copied to ${dist}`);
  } catch (err) {
    console.error(`Error while copying directory: ${err}`);
  }
};

copyDir('./packages', './docs/packages');