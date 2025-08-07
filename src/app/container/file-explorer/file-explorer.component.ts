import { CommonModule } from '@angular/common';
import { Component, inject, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserPanelComponent } from '../../components/user-panel/user-panel.component';
import { FileTreeComponent } from '../../components/file-tree/file-tree.component';
import { Store } from '@ngrx/store';
import { selectStructure } from '../../store/files/files.selectors';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { Folder } from '../../models/folder.model';
import { User, userTypeEnum } from '../../models/user.model';
import { FileItem, TreeNode } from '../../models/file.model';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule, UserPanelComponent, MatCardModule, FileTreeComponent],
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent {
  private readonly store = inject(Store);
  private readonly folders = this.store.selectSignal(selectStructure);
  public user = this.store.selectSignal(selectCurrentUser);

  private readonly expandedStates = signal<Map<string, boolean>>(new Map());
  public treeNodes = computed(() => {
    const folders = this.folders();
    const user = this.user();

    if (!user) return [];

    const filteredNodes = folders
      .map((folder) => this.filterFolderForUser(folder, user))
      .filter((f): f is Folder => !!f)
      .map((folder) => this.toTreeNode(folder));

    return filteredNodes;
  });

  private filterFolderForUser(folder: Folder, user: User): Folder | null {
    const isVisible =
      user.role === userTypeEnum.ADMIN
        ? folder.owner === userTypeEnum.ADMIN
        : folder.ownerId === user.id || folder.owner === userTypeEnum.ADMIN;

    if (!isVisible) return null;
    return folder;
  }

  private toTreeNode(folder: Folder): TreeNode {
    const children: TreeNode[] = [];
    const expandedMap = this.expandedStates();

    if (folder.subfolders?.length) {
      children.push(
        ...folder.subfolders.map((subfolder) => this.toTreeNode(subfolder))
      );
    }

    if (folder.files?.length) {
      children.push(...folder.files.map((file) => this.createFileNode(file)));
    }

    return {
      name: folder.name,
      id: folder.id,
      isFile: false,
      children: children,
      expanded: expandedMap.get(folder.id) ?? false,
    };
  }

  private createFileNode(file: FileItem): TreeNode {
    return {
      name: file.name,
      id: file.id,
      isFile: true,
      extension: file.extension,
      children: undefined,
      expanded: false,
    };
  }
}
