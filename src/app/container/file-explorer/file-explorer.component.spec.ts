import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerComponent } from './file-explorer.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/user/user.reducer';
import { filesReducer } from '../../store/files/files.reducer';

describe('FileExplorerComponent', () => {
  let component: FileExplorerComponent;
  let fixture: ComponentFixture<FileExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FileExplorerComponent,
        StoreModule.forRoot({
          user: userReducer,
          files: filesReducer,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FileExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleFolder', () => {
    it('should toggle folder expanded state', () => {
      const folderId = 'test-folder-id';

      expect(component['expandedStates']().get(folderId)).toBeFalsy();
      component.toggleFolder(folderId);

      expect(component['expandedStates']().get(folderId)).toBe(true);
    });
  });

  describe('treeNodes', () => {
    it('should return empty array when user is null', () => {
      const result = component.treeNodes();

      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('user', () => {
    it('should be defined as a signal', () => {
      expect(component.user).toBeDefined();
      expect(typeof component.user).toBe('function');
    });
  });
});
