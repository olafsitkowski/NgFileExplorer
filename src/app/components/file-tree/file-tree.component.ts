import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { TreeNode } from '../../models/file.model';
import { FileService } from '../../services/file.service';
import { FileComponent } from './file/file.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { AppState } from '../../models/app-state.model';

@Component({
  selector: 'app-file-tree',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FileComponent,
    FolderItemComponent,
  ],
  templateUrl: './file-tree.component.html',
  styleUrl: './file-tree.component.scss',
})
export class FileTreeComponent {
  @Input() public treeData: TreeNode[] = [];
  @Input() public level = 0;
  @Output() public folderToggle = new EventEmitter<string>();

  constructor(
    private readonly fileService: FileService,
    private readonly store: Store<AppState>
  ) {}

  public toggleFolder(node: TreeNode): void {
    if (!node.isFile) {
      this.folderToggle.emit(node.id);
    }
  }

  public onAddFile(folder: TreeNode): void {
    this.openAddFileDialog(folder);
  }

  public onDownloadFile(file: TreeNode): void {
    this.fileService.downloadFile(file);
  }

  public onDeleteFile(file: TreeNode): void {
    this.confirmAndDeleteFile(file);
  }

  public trackByFn(index: number, item: TreeNode): string {
    return item.id;
  }

  private openAddFileDialog(folder: TreeNode): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        this.store
          .select(selectCurrentUser)
          .subscribe((user) => {
            if (user) {
              this.fileService.addFile(folder, file, user.username, user.id);
            }
          })
          .unsubscribe();
      }
    };
    input.click();
  }

  private confirmAndDeleteFile(file: TreeNode): void {
    const fileName = file.extension
      ? `${file.name}.${file.extension}`
      : file.name;

    if (confirm(`Are you sure you want to delete "${fileName}"?`)) {
      this.fileService.deleteFile(file.id);
    }
  }
}
