import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TabModel } from 'src/app/models/tab/tab.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { EditorFile } from 'src/app/models/file/file.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  animations: [
    trigger('slideInOut', [
      state('out', style({})),
      state('in', style({})),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  public tabs: TabModel[] = [];
  public tabActive: TabModel;

  public files;
  public openedProject: boolean = false;

  public openedFile: EditorFile;

  public toggledMenu: string = 'in';
  public itemsTop: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public openTab(tab: TabModel): void {
    this.tabActive = tab;
  }

  public onCloseTab(tab: TabModel): void {
    this.tabs = this.tabs.filter((tabF) => tabF != tab);
  }

  public onOpenExplorer(): void {
    this.toggledMenu = this.toggledMenu === 'out' ? 'in' : 'out';
    this.itemsTop = !this.itemsTop;
  }

  public onUploadFile(event): void {
    const files = event.target.files;
    this.files = files;

    if (files.length > 0) {
      this.openedProject = true;

      for (let i = 0; i < files.length; i++) {
        this.files[i].id = i;
      }
    }
    console.log(this.files);
  }

  public onClickFile(file) {
    let fileReader: FileReader = new FileReader();
    let self = this;
    let addTab = true;
    const tab = {
      file: file,
    };

    this.tabs.map((tab) => {
      if (tab.file.id == file.id) {
        addTab = false;
      }
    });

    if (addTab) {
      this.tabs.push(tab);
    }

    this.tabActive = tab;

    fileReader.onloadend = function (x) {
      const lineCount = fileReader.result.toString().split(/\r\n|\r|\n/).length;

      console.log(fileReader.result);

      self.openedFile = new EditorFile(lineCount, file, fileReader.result);
    };
    fileReader.readAsText(file);
  }
}
