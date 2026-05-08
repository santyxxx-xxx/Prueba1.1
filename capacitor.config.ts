import type { CapacitorConfig } from '@capacitor/cli';

const config = {
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#ffffff",
      showSpinner: false,
    },
  },
};

export default config;

