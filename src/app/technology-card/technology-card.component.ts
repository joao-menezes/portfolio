import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TechnologyInterface } from '../technology.interface';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})
export class TechnologyCardComponent {

  @Input() card: TechnologyInterface;
  @Output() display = new EventEmitter<boolean>();

  showTechDialog() {
    this.display.emit(true)
  }
}
