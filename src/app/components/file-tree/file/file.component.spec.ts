import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComponent } from './file.component';
import { TreeNode } from '../../../models/file.model';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;

  const mockFile: TreeNode = {
    id: '1',
    name: 'test-file',
    isFile: true,
    extension: 'txt',
    children: undefined,
    expanded: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    component.file = mockFile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDownload', () => {
    it('should emit download event', () => {
      const event = new Event('download');
      spyOn(component.download, 'emit');
      component.onDownload(event);
      expect(component.download.emit).toHaveBeenCalledWith(mockFile);
    });
  });

  describe('onDelete', () => {
    it('should emit delete event', () => {
      const event = new Event('delete');
      spyOn(component.delete, 'emit');
      component.onDelete(event);
      expect(component.delete.emit).toHaveBeenCalledWith(mockFile);
    });
  });

  describe('getFullFileName', () => {
    it('should return the full file name with extension', () => {
      const fullFileName = component.getFullFileName();
      expect(fullFileName).toBe('test-file.txt');
    });
  });
});
