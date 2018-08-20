import { Component, OnInit } from '@angular/core';
import { RESUME } from '../resources/resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  public get sections(): any[] {
    return RESUME.sections;
  }

  ngOnInit() {
  }

}
