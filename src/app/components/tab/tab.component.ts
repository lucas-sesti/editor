import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass'],
})
export class TabComponent implements OnInit {
  @Input() public fileName: string;
  @Input() public active: boolean;

  @Output() public close: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public onClickClose() {
    this.close.emit();
  }
}
