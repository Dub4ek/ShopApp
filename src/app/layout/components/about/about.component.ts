import { Component, Optional } from '@angular/core';
import { LocalStorageService } from '../../../shared/local-storage.service';
import { ConfigOptionsService } from '../../../shared/config-options.service';
import { GeneratorService } from '../../../shared/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(
    @Optional() public localStorageService: LocalStorageService,
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() public generator: GeneratorService,
  ) { }
}
