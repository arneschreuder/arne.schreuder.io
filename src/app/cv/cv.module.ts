import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';
import { PersonalComponent } from './personal/personal.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';


@NgModule({
  declarations: [
    AwardsComponent,
    CvComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalComponent,
    ProjectsComponent,
    PublicationsComponent,
    ReferencesComponent,
    SkillsComponent,
    ResearchComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    FontAwesomeModule
  ]
})
export class CvModule { }
