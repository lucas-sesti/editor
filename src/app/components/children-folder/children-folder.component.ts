import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Folder } from 'src/app/models/folder/folder.model';
import { EditorFile } from 'src/app/models/file/file.model';

@Component({
  selector: 'app-children-folder',
  templateUrl: './children-folder.component.html',
  styleUrls: ['./children-folder.component.sass'],
})
export class ChildrenFolderComponent implements OnInit {
  public folderKeys: string[] = [];
  public fileKeys: string[] = [];
  public toggled: boolean = false;

  @Input() folder: Folder;
  @Input() openedFile: EditorFile;

  @Output() fileClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.folderKeys = Object.keys(this.folder.children);
    this.fileKeys = Object.keys(this.folder.files);

    this.folderKeys.sort((a, b) => ('' + a).localeCompare(b));
  }

  public onClickFile(file) {
    this.fileClick.emit(file);
  }
}
