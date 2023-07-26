import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieStates } from '../../../shared/models/movie';

@Component({
  selector: 'app-change-favourite-button',
  templateUrl: './change-favourite-button.component.html',
})
export class ChangeFavouriteButtonComponent {
  readonly removeText: string = 'Remove from favorites';
  readonly addText: string = 'Add to favorites';

  @Input() data!: MovieStates | null;
  @Input() isLoading?: boolean;

  @Output() favoriteStateChange: EventEmitter<boolean> = new EventEmitter();

  handleClick() {
    this.data && this.favoriteStateChange.emit(!this.data?.favorite);
  }

  getButtonText = () => (this.data?.favorite ? this.removeText : this.addText);
}
