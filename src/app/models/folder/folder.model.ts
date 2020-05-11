import { EditorFile } from '../file/file.model';

export class Folder {
  constructor(public name: string, public children: Object, public files: []) {}
}
