import {Component, OnInit} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ng-content></ng-content>`
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];

  constructor() {

  }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }

  removeTab(tab: TabComponent) {
    this.tabs = this.tabs.slice(0, -1);

    if (tab.active && !this.tabs.includes(tab)) {
      this.selectTab(this.tabs[0]);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((value) => {
      value.active = false;
    });

    tab.active = true;
  }
}
