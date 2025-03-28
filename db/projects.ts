// IMPORTS
import {
  PROJECT_OVERVIEW_TITLE,
  CORE_DEPENDENCIES_TITLE,
  STYLING_TITLE,
  TOOLS_TITLE,
  FEATURES_TITLE,
} from "@/lib/constants";

export const projectsData = [
  {
    id: 1,
    title: "Incidentor",
    slug: "incidentor",
    imgUrl: "/images/projects/incidentor/incidentor.png",
    description:
      "Incident management portal application for municipality of Tehran.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "Uses material-react-table to handle data fetching and management from the backend.",
          "Uses Material UI (@mui/material) for the user interface with built-in dark/light theme support.",
          "Uses recharts for interactive data visualization and charts.",
        ],
        image: "/images/projects/incidentor/5.jpg",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "React 19 as the primary frontend framework.",
          "Redux Toolkit (@reduxjs/toolkit) for global state management.",
          "React Hook Form (react-hook-form) for form handling and validation.",
          "React Router DOM (react-router-dom) for navigation and routing.",
          "Day.js (dayjs) and Date-Fns (date-fns) for date and time manipulation.",
          "Moment-Jalaali (moment-jalaali) for Persian calendar support.",
        ],
        image: "/images/projects/incidentor/1.jpg",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "Material UI (@mui/material, @mui/icons-material, @mui/lab) for a modern UI experience.",
          "Emotion (@emotion/react, @emotion/styled) for CSS-in-JS styling.",
          "Stylis & stylis-plugin-rtl for right-to-left (RTL) support.",
          "Tailwind CSS (tailwindcss) for additional styling flexibility.",
        ],
        image: "/images/projects/incidentor/3.jpg",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "Vite (vite) as the build tool for fast development.",
          "TypeScript (typescript) for type safety.",
          "ESLint (eslint, typescript-eslint) for code linting and best practices.",
          "SASS Embedded (sass-embedded) for advanced styling options.",
          "PostCSS (postcss, autoprefixer) for CSS processing and optimization.",
          "Concurrently (concurrently) for running multiple scripts in parallel.",
        ],
        image: "/images/projects/incidentor/2.jpg",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "React Select (react-select) for customizable dropdowns.",
          "React Viewer (react-viewer) for image previews.",
          "React Spinners (react-spinners) for loading indicators.",
          "React Hot Toast (react-hot-toast) for notifications and alerts.",
          "React Virtual (@tanstack/react-virtual) for efficient rendering of large lists.",
          "Lodash Merge (lodash.merge) for deep object merging.",
          "Async Mutex (async-mutex) for handling async locking mechanisms.",
          "TSParticles (@tsparticles/react) for interactive particle animations.",
        ],
        image: "/images/projects/incidentor/6.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Retirement",
    slug: "retirement",
    imgUrl: "/images/projects/retirement/retirement.png",
    description:
      "Retirement management portal application for municipality of Tehran.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "Uses material-react-table for handling data and tables efficiently.",
          "Material UI (@mui/material) for UI components with built-in dark/light themes.",
          "PDF handling with pdf-lib, react-to-pdf, and file-saver for generating and downloading PDFs.",
          "Jalaali & Persian support with moment-jalaali, jalaali-react-date-picker, and persian-number.",
        ],
        image: "/images/projects/retirement/1.png",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "React 18 as the primary frontend framework.",
          "Redux Toolkit (@reduxjs/toolkit) for state management.",
          "React Router DOM (react-router-dom) for navigation and routing.",
          "React Hook Form (react-hook-form) for handling forms.",
          "JWT Decode (jwt-decode) for decoding and managing authentication tokens.",
          "Idle Timer (react-idle-timer) for detecting user inactivity.",
        ],
        image: "/images/projects/retirement/5.png",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "Material UI (@mui/material, @mui/icons-material, @mui/lab) for a modern UI experience.",
          "Emotion (@emotion/react, @emotion/styled) for CSS-in-JS styling.",
          "Stylis & stylis-plugin-rtl for right-to-left (RTL) support.",
          "Tailwind CSS (tailwindcss) for additional styling flexibility.",
          "React Spring (@react-spring/web) for animations and transitions.",
          "Swiper (swiper) for interactive carousels and sliders.",
          "React Loading Skeleton (react-loading-skeleton) for placeholder loading effects.",
        ],
        image: "/images/projects/retirement/11.png",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "Vite (vite) as the build tool for fast development.",
          "TypeScript (typescript) for type safety.",
          "ESLint (eslint, typescript-eslint) for code linting and best practices.",
          "SASS Embedded (sass-embedded) for advanced styling options.",
          "PostCSS (postcss, autoprefixer) for CSS processing and optimization.",
          "Vite Plugin Single File (vite-plugin-singlefile) for bundling into a single HTML file.",
          "Vite Plugin Basic SSL (@vitejs/plugin-basic-ssl) for local HTTPS support.",
        ],
        image: "/images/projects/retirement/3.png",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "Vite (vite) as the build tool for fast development.",
          "TypeScript (typescript) for type safety.",
          "ESLint (eslint, typescript-eslint) for code linting and best practices.",
          "SASS Embedded (sass-embedded) for advanced styling options.",
          "PostCSS (postcss, autoprefixer) for CSS processing and optimization.",
          "Concurrently (concurrently) for running multiple scripts in parallel.",
        ],
        image: "/images/projects/retirement/10.png",
      },
    ],
  },
  {
    id: 3,
    title: "Post-Ir",
    slug: "post-ir",
    imgUrl: "/images/projects/post/post.png",
    description:
      "Mobile app for the official post company of Iran(post.ir) which is a feature-rich cargo management app.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "React Native & Expo based mobile application.",
          "Uses expo-router for simplified navigation.",
          "Material Top Tabs (@react-navigation/material-top-tabs) for tab-based navigation.",
          "State management with zustand for lightweight and scalable state handling.",
          "Axios for API calls and data fetching.",
          "Barcode generation & scanning with expo-barcode-generator and expo-camera.",
        ],
        image: "/images/projects/post/2.jpg",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "React 18 & React Native 0.76 as the primary framework.",
          "React Hook Form (react-hook-form) for form validation and handling.",
          "NativeWind (nativewind) for Tailwind CSS support in React Native.",
          "Styled Components (styled-components) for component-level styling.",
          "Zustand (zustand) for state management.",
        ],
        image: "/images/projects/post/5.jpg",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "React Native Gesture Handler (react-native-gesture-handler) for smooth touch gestures.",
          "React Native Reanimated (react-native-reanimated) for fluid animations.",
          "React Native SVG (react-native-svg) for vector graphics.",
          "React Native Shadow (react-native-shadow-2) for enhanced shadow effects.",
          "React Native Tab View (react-native-tab-view) for smooth tab navigation.",
          "React Native Pager View (react-native-pager-view) for horizontal pagination.",
          "React Native Flash Message (react-native-flash-message) for notifications and alerts.",
          "React Native OTP Entry (react-native-otp-entry) for handling OTP inputs.",
          "React Native Table Component (react-native-table-component) for displaying tabular data.",
          "rn-tourguide for interactive onboarding and user guidance.",
        ],
        image: "/images/projects/post/16.jpg",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "TypeScript (typescript) for type safety.",
          "ESLint (eslint, eslint-config-expo) for code linting and best practices.",
          "Jest & React Test Renderer (jest, react-test-renderer) for testing.",
          "Tailwind CSS (tailwindcss) for utility-first styling.",
        ],
        image: "/images/projects/post/8.jpg",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "Expo Camera (expo-camera) for image and video capturing.",
          "Expo Image Picker (expo-image-picker) for selecting images from the gallery.",
          "Expo Location (expo-location) for geolocation tracking.",
          "Expo Secure Store (expo-secure-store) for securely storing sensitive data.",
          "Expo Clipboard (expo-clipboard) for copying and pasting data.",
          "Expo Web Browser (expo-web-browser) for opening web pages within the app.",
          "Expo Updates (expo-updates) for managing over-the-air updates.",
          "Expo Status Bar (expo-status-bar) for status bar customization.",
          "Expo System UI (expo-system-ui) for modifying system-level UI settings.",
        ],
        image: "/images/projects/post/19.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Zar Iran",
    slug: "zar-iran",
    imgUrl: "/images/projects/zariran/zariran.png",
    description:
      "Gold business application for a retail store selling gold and precious metals.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "React Native & Expo based mobile application.",
          "Uses expo-router for simplified navigation.",
          "State management with zustand for lightweight and scalable state handling.",
          "React Hook Form (react-hook-form) for form validation and handling.",
        ],
        image: "/images/projects/zariran/1.png",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "React 18 & React Native 0.76 as the primary framework.",
          "React Navigation (@react-navigation/native & @react-navigation/native-stack) for app navigation.",
          "Expo Secure Store (expo-secure-store) for securely storing sensitive data.",
          "React Native UUID (react-native-uuid) for generating unique identifiers.",
        ],
        image: "/images/projects/zariran/3.png",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "React Native Gesture Handler (react-native-gesture-handler) for smooth touch gestures.",
          "React Native Reanimated (react-native-reanimated) for fluid animations.",
          "React Native SVG (react-native-svg) for vector graphics.",
          "React Native Linear Gradient (react-native-linear-gradient) for gradient backgrounds.",
          "React Native Animated Spinkit (react-native-animated-spinkit) for animated loading indicators.",
          "React Native Flash Message (react-native-flash-message) for displaying notifications.",
          "React Native OTP Entry (react-native-otp-entry) for handling OTP inputs.",
        ],
        image: "/images/projects/zariran/5.png",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "TypeScript (typescript) for type safety.",
          "ESLint (eslint, eslint-config-expo) for code linting and best practices.",
          "Jest & React Test Renderer (jest, react-test-renderer) for testing.",
          "Tailwind CSS (tailwindcss) for utility-first styling.",
        ],
        image: "/images/projects/zariran/7.png",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "Expo Font (expo-font) for custom fonts.",
          "Expo Web Browser (expo-web-browser) for opening web pages within the app.",
          "Expo Status Bar (expo-status-bar) for status bar customization.",
          "Expo System UI (expo-system-ui) for modifying system-level UI settings.",
          "Expo Splash Screen (expo-splash-screen) for managing the app's splash screen.",
          "Expo Updates (expo-updates) for over-the-air updates.",
        ],
        image: "/images/projects/zariran/9.png",
      },
    ],
  },
  {
    id: 5,
    title: "IKeeper",
    slug: "ikeeper",
    imgUrl: "/images/projects/ikeeper/ikeeper.png",
    description: "A cloud crypto mining telegram mini game bot.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "A React-based Telegram Mini Game with integration into the TON blockchain.",
          "Utilizes @ton/core and @tonconnect/sdk for blockchain interactions.",
          "Leverages Zustand (zustand) for efficient state management.",
          "Styled with Tailwind CSS (tailwindcss & tailwind-scrollbar) for a sleek UI.",
        ],
        image: "/images/projects/ikeeper/1.png",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "Uses TON blockchain (@ton/core) for smart contract interactions.",
          "Implements TON Connect (@tonconnect/sdk, @tonconnect/ui-react) for wallet authentication.",
          "React Hook Form (react-hook-form) for form handling and validation.",
          "React Router DOM (react-router-dom) for navigation and routing.",
          "Axios (axios) for handling HTTP requests.",
          "Ngrok (ngrok) for tunneling and local development testing.",
        ],
        image: "/images/projects/ikeeper/4.png",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "Confetti Effects (react-canvas-confetti, react-confetti, react-confetti-explosion) for visual celebrations.",
          "React Icons (react-icons) for UI elements.",
          "React Spinners (react-spinners) for animated loading indicators.",
          "React Hot Toast (react-hot-toast) for notifications.",
        ],
        image: "/images/projects/ikeeper/7.png",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "Uses Vite (vite) for fast bundling and development.",
          "ESLint (eslint, eslint-plugin-react, eslint-plugin-react-hooks) for code quality.",
          "Autoprefixer & PostCSS (autoprefixer, postcss) for CSS optimization.",
        ],
        image: "/images/projects/ikeeper/12.png",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "React Router DOM (react-router-dom) for seamless navigation.",
          "React Spinners (react-spinners) for loading indicators.",
          "React Hot Toast (react-hot-toast) for notifications and alerts.",
        ],
        image: "/images/projects/ikeeper/0.png",
      },
    ],
  },
  {
    id: 6,
    title: "Mario Kombat",
    slug: "mario-kombat",
    imgUrl: "/images/projects/mario/mario.png",
    description: "A tap-to-earn telegram mini game inspired by Hamster Kombat.",
    explanations: [
      {
        title: PROJECT_OVERVIEW_TITLE,
        desc: [
          "A React-based Telegram Mini Game with integration into the TON blockchain.",
          "Utilizes @ton/core and @tonconnect/sdk for blockchain interactions.",
          "Leverages Zustand (zustand) for efficient state management.",
          "Styled with Tailwind CSS (tailwindcss & tailwind-scrollbar) for a sleek UI.",
        ],
        image: "/images/projects/mario/1.png",
      },
      {
        title: CORE_DEPENDENCIES_TITLE,
        desc: [
          "Uses TON blockchain (@ton/core) for smart contract interactions.",
          "Implements TON Connect (@tonconnect/sdk, @tonconnect/ui-react) for wallet authentication.",
          "React Hook Form (react-hook-form) for form handling and validation.",
          "React Router DOM (react-router-dom) for navigation and routing.",
          "Axios (axios) for handling HTTP requests.",
          "Ngrok (ngrok) for tunneling and local development testing.",
        ],
        image: "/images/projects/mario/3.png",
      },
      {
        title: STYLING_TITLE,
        desc: [
          "Confetti Effects (react-canvas-confetti, react-confetti, react-confetti-explosion) for visual celebrations.",
          "React Icons (react-icons) for UI elements.",
          "React Spinners (react-spinners) for animated loading indicators.",
          "React Hot Toast (react-hot-toast) for notifications.",
        ],
        image: "/images/projects/mario/2.png",
      },
      {
        title: TOOLS_TITLE,
        desc: [
          "Uses Vite (vite) for fast bundling and development.",
          "ESLint (eslint, eslint-plugin-react, eslint-plugin-react-hooks) for code quality.",
          "Autoprefixer & PostCSS (autoprefixer, postcss) for CSS optimization.",
        ],
        image: "/images/projects/mario/12.png",
      },
      {
        title: FEATURES_TITLE,
        desc: [
          "React Router DOM (react-router-dom) for seamless navigation.",
          "React Spinners (react-spinners) for loading indicators.",
          "React Hot Toast (react-hot-toast) for notifications and alerts.",
        ],
        image: "/images/projects/mario/14.png",
      },
    ],
  },
];
