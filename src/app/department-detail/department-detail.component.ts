import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: 'department-detail.component.html'
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => 
                this.departmentId = parseInt(params.get('id')))
  }

  goToDepartments() {
    this.router.navigate(['../', { id: this.departmentId }])
  }

}
