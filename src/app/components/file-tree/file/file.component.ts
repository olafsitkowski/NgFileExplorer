import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeNode } from '../../../models/file.model';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() public file!: TreeNode;
  @Input() public level = 0;
  @Output() public download = new EventEmitter<TreeNode>();
  @Output() public delete = new EventEmitter<TreeNode>();

  public onDownload(event: Event): void {
    event.stopPropagation();
    this.download.emit(this.file);
  }

  public onDelete(event: Event): void {
    event.stopPropagation();
    this.delete.emit(this.file);
  }

  public getFullFileName(): string {
    return this.file.extension
      ? `${this.file.name}.${this.file.extension}`
      : this.file.name;
  }
}
