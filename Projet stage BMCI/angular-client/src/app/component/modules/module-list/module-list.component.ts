import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleDTO } from 'src/app/models/module-dto';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  @Input() modules: ModuleDTO[] = [];

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.fetchModules();
  }

  fetchModules(): void {
    this.moduleService.getAllModules().subscribe(
      (modules: ModuleDTO[]) => {
        this.modules = modules;
      },
      (error) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

}
