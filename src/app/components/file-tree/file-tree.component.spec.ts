import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTreeComponent } from './file-tree.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/user/user.reducer';
import { filesReducer } from '../../store/files/files.reducer';
import { FileService } from '../../services/file.service';
import { TreeNode } from '../../models/file.model';

describe('FileTreeComponent', () => {
  let component: FileTreeComponent;
  let fixture: ComponentFixture<FileTreeComponent>;
  let fileService: jasmine.SpyObj<FileService>;

  const mockFileNode: TreeNode = {
    id: 'file-1',
    name: 'test-file',
    isFile: true,
    extension: 'txt',
    expanded: false,
  };

  const mockFolderNode: TreeNode = {
    id: 'folder-1',
    name: 'test-folder',
    isFile: false,
    children: [],
    expanded: false,
  };

  beforeEach(async () => {
    const fileServiceSpy = jasmine.createSpyObj('FileService', [
      'downloadFile',
      'deleteFile',
      'addFile',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        FileTreeComponent,
        StoreModule.forRoot({
          user: userReducer,
          files: filesReducer,
        }),
      ],
      providers: [{ provide: FileService, useValue: fileServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FileTreeComponent);
    component = fixture.componentInstance;
    fileService = TestBed.inject(FileService) as jasmine.SpyObj<FileService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleFolder', () => {
    it('should emit folderToggle when node is not a file', () => {
      spyOn(component.folderToggle, 'emit');

      component.toggleFolder(mockFolderNode);

      expect(component.folderToggle.emit).toHaveBeenCalledWith('folder-1');
    });
  });

  describe('onAddFile', () => {
    it('should call openAddFileDialog', () => {
      spyOn(component as any, 'openAddFileDialog');

      component.onAddFile(mockFolderNode);

      expect((component as any).openAddFileDialog).toHaveBeenCalledWith(
        mockFolderNode
      );
    });
  });

  describe('onDownloadFile', () => {
    it('should call fileService.downloadFile', () => {
      component.onDownloadFile(mockFileNode);

      expect(fileService.downloadFile).toHaveBeenCalledWith(mockFileNode);
    });
  });

  describe('onDeleteFile', () => {
    it('should call confirmAndDeleteFile', () => {
      spyOn(component as any, 'confirmAndDeleteFile');

      component.onDeleteFile(mockFileNode);

      expect((component as any).confirmAndDeleteFile).toHaveBeenCalledWith(
        mockFileNode
      );
    });
  });

  describe('trackByFn', () => {
    it('should return item id', () => {
      const result = component.trackByFn(0, mockFileNode);

      expect(result).toBe('file-1');
    });
  });
});
