import { Component, EventEmitter, Input, Output } from '@angular/core';

type SelectInput = {
  label: string;
  options: string[];
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent<T> {
  @Input() data: SelectInput = {
    label: '',
    options: [],
  };

  @Output() select = new EventEmitter<string>();
  @Input() value: string = '';

  onSelect(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.select.emit(target.value);
  }
}
