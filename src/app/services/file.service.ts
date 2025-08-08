import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileItem, TreeNode } from '../models/file.model';
import { addFile, deleteFile } from '../store/files/files.actions';
import { AppState } from '../models/app-state.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private readonly store: Store<AppState>) {}

  public addFile(
    folder: TreeNode,
    file: File,
    owner: string,
    ownerId: number
  ): void {
    const [name, ...ext] = file.name.split('.');

    const newFile: FileItem = {
      id: this.generateId(),
      name,
      extension: ext.pop() || '',
      owner,
      ownerId,
    };

    this.store.dispatch(addFile({ folderId: folder.id, file: newFile }));
  }

  public deleteFile(fileId: string): void {
    this.store.dispatch(deleteFile({ fileId }));
  }

  public downloadFile(file: TreeNode): void {
    const fileName = file.extension
      ? `${file.name}.${file.extension}`
      : file.name;
    const content = file.name;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
}
