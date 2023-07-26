import { Component, Input } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  standalone: true,
  imports: [AsyncPipe, NgIf, MatProgressSpinnerModule],
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Input() isLoading?: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() showTextOnLoading?: boolean = false;
}
