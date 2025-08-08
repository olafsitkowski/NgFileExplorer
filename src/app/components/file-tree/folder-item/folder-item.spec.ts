import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FolderItemComponent } from './folder-item.component';
import { TreeNode } from '../../../models/file.model';

describe('FolderItemComponent', () => {
  let component: FolderItemComponent;
  let fixture: ComponentFixture<FolderItemComponent>;

  const mockFolder: TreeNode = {
    id: 'folder-1',
    name: 'test-folder',
    isFile: false,
    children: [],
    expanded: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FolderItemComponent);
    component = fixture.componentInstance;
    component.folder = mockFolder;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onToggle', () => {
    it('should emit toggle event when onToggle is called', () => {
      spyOn(component.toggle, 'emit');
      const mockEvent = new Event('click');

      component.onToggle(mockEvent);

      expect(component.toggle.emit).toHaveBeenCalledWith(mockFolder);
    });
  });

  describe('onAddFile', () => {
    it('should emit addFile event when onAddFile is called', () => {
      spyOn(component.addFile, 'emit');
      const mockEvent = new Event('click');

      component.onAddFile(mockEvent);

      expect(component.addFile.emit).toHaveBeenCalledWith(mockFolder);
    });
  });
});
