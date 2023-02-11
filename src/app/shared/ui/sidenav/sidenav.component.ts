import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MenuItem, MENU_CONFIG } from '../utils/menu.config';

@Component({
  selector: `app-sidenav`,
  templateUrl: `./sidenav.component.html`,
  styleUrls: [`./sidenav.component.scss`],
})
export class SidenavComponent implements OnInit {
  dataSource = new MatTreeNestedDataSource<MenuItem>();
  treeControl = new NestedTreeControl<MenuItem>((node) => node.children);

  ngOnInit(): void {
    this.dataSource.data = MENU_CONFIG;
  }

  hasChild = (_: number, node: MenuItem) =>
    !!node.children && node.children.length > 0;
}
