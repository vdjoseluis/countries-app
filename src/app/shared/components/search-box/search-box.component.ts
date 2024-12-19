import { Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
})
export default class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  public placeholder = input<string>('');
  public initialValue = input<string>('');

  public onValue = output<string>();
  public onDebounce = output<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => this.onDebounce.emit(value));
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
