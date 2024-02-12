import { Component } from '@angular/core';
import { TopbarComponent } from '../../core/components/topbar/topbar.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NewNotesHeaderComponent } from './components/new-notes-header/new-notes-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewNoteComponent,NewNotesHeaderComponent,TopbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
