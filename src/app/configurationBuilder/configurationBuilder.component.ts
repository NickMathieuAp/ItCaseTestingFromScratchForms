import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export class SelectMultipleOptionsConfigurationBuilder {
  options = new FormControl();
  optionsList: string[] = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];
}


@Component({
  selector: 'configurationBuilder.component',
  templateUrl: './configurationBuilder.component.html',
  styleUrls: ['./configurationBuilder.component.css']
})


export class ConfigurationBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
