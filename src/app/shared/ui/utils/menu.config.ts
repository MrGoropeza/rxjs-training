export interface MenuItem {
  name: string;
  routerLink?: string;
  children?: MenuItem[];
}

export const MENU_CONFIG: MenuItem[] = [];
