import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
})
export class SearchBannerComponent {
  searchForm: FormGroup = new FormGroup({
    searchValue: new FormControl(null, Validators.required),
  });

  onSubmit() {
    console.log(this.searchForm);
  }
}
