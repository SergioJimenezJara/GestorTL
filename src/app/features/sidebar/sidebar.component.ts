import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  constructor() {}

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'User Profile', icon: 'person', route: '/user' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Help', icon: 'help_outline', route: '/help' }
  ];

  isExpanded: boolean = true;

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
