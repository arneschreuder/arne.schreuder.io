import { Component, OnInit } from '@angular/core';
import { faGlobe, faCar, faComment, faIdCard, faPhone, faEnvelope, faFingerprint, faLanguage, faGlobeAfrica, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  faGlobe = faGlobe;
  faCar = faCar;
  faComment = faComment;
  faIdCard = faIdCard;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFingerprint = faFingerprint;
  faLanguage = faLanguage;
  faGlobeAfrica = faGlobeAfrica;
  faUser = faUser;
  faGithub = faGithub;
  faGitlab = faGitlab;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
