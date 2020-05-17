import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Folder } from 'src/app/models/folder/folder.model';
import { EditorFile } from 'src/app/models/file/file.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.sass'],
})
export class FolderComponent implements OnInit {
  public folderKeys: string[] = [];
  public toggled: boolean = false;

  @Input() folder: Folder;
  @Input() isRoot: boolean = false;
  @Input() openedFile: EditorFile;

  @Output() fileClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.folderKeys = Object.keys(this.folder.children);
    this.folderKeys.sort((a, b) => ('' + a).localeCompare(b));
  }

  public onClickFile(file) {
    this.fileClick.emit(file);
  }
}
