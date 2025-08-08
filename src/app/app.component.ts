import { Component } from '@angular/core';
import { FileExplorerComponent } from './container/file-explorer/file-explorer.component';

@Component({
  selector: 'app-root',
  imports: [FileExplorerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgFileExplorer';
}
