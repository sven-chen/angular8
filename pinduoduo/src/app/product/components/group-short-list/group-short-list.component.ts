import { GroupOrder } from './../../domain/index';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GroupShortListComponent implements OnInit {
  @Input() groupOrders:GroupOrder[] =[]
  @Input() row = 2;
  constructor() { }

  ngOnInit() {
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy:'zhangsan',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber:2
      },
      {
        id: 2,
        productId: 2,
        startBy:'lisi',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(),
        remainingNumber:3
      }

    ]
  }

}
