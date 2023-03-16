import { themes } from './TLTheme/initThemes';

export const AppSettings = {
  activeLayout: 'layout1', // layout1, layout2
  activeTheme: 'whiteBrown', // View all valid theme colors inside MatxTheme/themeColors.js
  perfectScrollbar: false,

  themes: themes,
  layout1Settings: {
    leftSidebar: {
      show: true,
      mode: 'full', // full, close, compact, mobile,
      theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
      bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg',
    },
    topbar: {
      show: true,
      fixed: true,
      theme: 'whiteBlue', // View all valid theme colors inside MatxTheme/themeColors.js
    },
  }, // open Layout1/Layout1Settings.js
  secondarySidebar: {
    show: true,
    open: false,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
  },
  // Footer options
  footer: {
    show: true,
    fixed: false,
    theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
  },
};
