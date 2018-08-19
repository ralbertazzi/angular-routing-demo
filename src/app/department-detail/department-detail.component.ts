import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: '<p>Department id {{ departmentId }}</p>'
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => 
                this.departmentId = parseInt(params.get('id')))
  }

}
