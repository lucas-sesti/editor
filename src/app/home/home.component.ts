import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public files;
  public fileContent;

  constructor() {}

  ngOnInit(): void {}

  public onUploadFile(event): void {
    // console.log(event);
    let files = event.target.files;

    if (files.length > 0) {
      console.log(files[0].webkitRelativePath.split('/')[0]);
      // console.log(splittedPath);
      // let fileReader: FileReader = new FileReader();
      // let self = this;
      // fileReader.onloadend = function (x) {
      //   self.fileContent = fileReader.result;
      //   console.log(fileReader.result);
      // };
      // fileReader.readAsText(file);
    }
  }
}
