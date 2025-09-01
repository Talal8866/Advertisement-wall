import { Component, Output, EventEmitter } from '@angular/core';
import { AdStatus } from '../../admin-panel component/admin-panel';

@Component({
  selector: 'app-ads-tabs',
  standalone: false,
  templateUrl: './ads-tabs.html',
  styleUrl: './ads-tabs.css'
})
export class AdsTabs {

  @Output() selectedTab = new EventEmitter<AdStatus>();

  activeTab: AdStatus = 'pending'

  clickOnTab(clickedTab: AdStatus) {
    this.selectedTab.emit(clickedTab);
    this.activeTab = clickedTab;
  }
}
