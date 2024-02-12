import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css',
})
export class NewNoteComponent {
  titulo?: string;
  coresFundo: boolean[] = [false, false, false]; // Um booleano para cada item

  press(index: number) {
    this.coresFundo[index] = !this.coresFundo[index];
  }
}
