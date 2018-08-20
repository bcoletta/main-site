import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  public get title(): string {
    return this.data.title;
  }

  public get items(): any[] {
    return this.data.items;
  }

  ngOnInit() {
  }

}
