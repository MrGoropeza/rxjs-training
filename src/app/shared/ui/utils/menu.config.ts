export interface MenuItem {
  name: string;
  routerLink?: string;
  children?: MenuItem[];
}

export const MENU_CONFIG: MenuItem[] = [
  {
    name: `Observables`,
    routerLink: ``,
    children: [
      {
        name: `Observer`,
        routerLink: `observer`,
      },
    ],
  },
];
