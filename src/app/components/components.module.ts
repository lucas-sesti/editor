import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { ChildrenFolderComponent } from './children-folder/children-folder.component';

@NgModule({
  declarations: [TabComponent, FolderComponent, FileComponent, ChildrenFolderComponent],
  imports: [CommonModule],
  exports: [TabComponent, FolderComponent, ChildrenFolderComponent],
})
export class ComponentsModule {}
