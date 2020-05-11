import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenFolderComponent } from './children-folder.component';

describe('ChildrenFolderComponent', () => {
  let component: ChildrenFolderComponent;
  let fixture: ComponentFixture<ChildrenFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
