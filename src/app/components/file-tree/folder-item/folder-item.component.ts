import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeNode } from '../../../models/file.model';

@Component({
  selector: 'app-folder-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss'],
})
export class FolderItemComponent {
  @Input() public folder!: TreeNode;
  @Input() public level = 0;
  @Output() public toggle = new EventEmitter<TreeNode>();
  @Output() public addFile = new EventEmitter<TreeNode>();

  public onToggle(event: Event): void {
    event.stopPropagation();
    this.toggle.emit(this.folder);
  }

  public onAddFile(event: Event): void {
    event.stopPropagation();
    this.addFile.emit(this.folder);
  }
}
