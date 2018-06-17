import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div>
      <div (click)="selectTab()" class="tabs__title" [class.tabs__title--active]="active">
        <ng-content select="tab-title"></ng-content>
      </div>
      <div [hidden]="!active">
        <ng-content select="tab-content"></ng-content>
      </div>
    </div>`
})
export class TabComponent implements OnInit, OnDestroy {
  @Input() tab: number;

  active: boolean;

  constructor(private tabs: TabsComponent) {
    this.tabs.addTab(this);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tabs.removeTab(this);
  }

  selectTab() {
    this.tabs.selectTab(this);
  }

}
