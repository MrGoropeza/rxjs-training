export interface MenuItem {
  name: string;
  routerLink?: string;
  children?: MenuItem[];
}

export const MENU_CONFIG: MenuItem[] = [
  {
    name: "Music Player",
    routerLink: "music-player",
  },
  {
    name: "Operators",
    routerLink: "operators",
    children: [
      {
        name: "From",
        routerLink: "operators/from",
      },
    ],
  },
];
