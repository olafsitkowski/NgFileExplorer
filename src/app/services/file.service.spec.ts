import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { FileService } from './file.service';
import { deleteFile } from '../store/files/files.actions';
import { TreeNode } from '../models/file.model';

describe('FileService', () => {
  let service: FileService;
  let store: jasmine.SpyObj<Store>;

  const mockFolder: TreeNode = {
    id: 'folder-1',
    name: 'test-folder',
    isFile: false,
    children: [],
    expanded: false,
  };

  const mockFile: TreeNode = {
    id: 'file-1',
    name: 'test-file',
    isFile: true,
    extension: 'txt',
    expanded: false,
  };

  beforeEach(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      providers: [FileService, { provide: Store, useValue: storeSpy }],
    });

    service = TestBed.inject(FileService);
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addFile', () => {
    it('should dispatch addFile action', () => {
      const mockHtmlFile = new File(['content'], 'test.txt', {
        type: 'text/plain',
      });
      const owner = 'testuser';
      const ownerId = 1;

      service.addFile(mockFolder, mockHtmlFile, owner, ownerId);

      expect(store.dispatch).toHaveBeenCalled();
      expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteFile', () => {
    it('should dispatch deleteFile action', () => {
      const fileId = 'file-1';

      service.deleteFile(fileId);

      expect(store.dispatch).toHaveBeenCalledWith(
        deleteFile({ fileId: 'file-1' })
      );
    });
  });

  describe('downloadFile', () => {
    it('should create download link and trigger click', () => {
      spyOn(URL, 'createObjectURL').and.returnValue('mock-url');
      spyOn(URL, 'revokeObjectURL');

      const mockLink = {
        href: '',
        download: '',
        click: jasmine.createSpy('click'),
      };
      spyOn(document, 'createElement').and.returnValue(mockLink as any);

      service.downloadFile(mockFile);

      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(mockLink.href).toBe('mock-url');
      expect(mockLink.download).toBe('test-file.txt');
      expect(mockLink.click).toHaveBeenCalled();
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('mock-url');
    });
  });
});
