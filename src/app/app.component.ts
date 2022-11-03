import { Component, OnInit } from '@angular/core';
import { TechnologyInterface } from './technology.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private spring_icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  private spring_name = 'Spring Boot'
  private node_icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  private node_name = "Nodejs"
  private angular_icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  private angular_name = "Angular"
  private typescript_icon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  private typescript_name = "Typescript"
  cards: TechnologyInterface[] = [];
  display: boolean = false;

  snippet = `
  public class Main {
    public static void main(String[] args) {
        System.out.println("Hel  lo World");
    }
  }  
  `


  showTechDialog() {
    this.display = true;
  }

  ngOnInit() {
    this.loadAllTechs();
  }

  loadAllTechs() {
    this.cards = [
      ...this.loadSpringBoot(),
      ...this.loadNodeJs(),
      ...this.loadAngular(),
      ...this.loadTypescript(),
    ]
  }

  loadSpringBoot() {
    return [{
      icon: this.spring_icon,
      tech_name: this.spring_name,

    }];

  }

  loadNodeJs() {
    return [{
      icon: this.node_icon,
      tech_name: this.node_name
    }];
  }

  loadAngular() {
    return [{
      icon: this.angular_icon,
      tech_name: this.angular_name
    }];
  }

  loadTypescript() {
    return [{
      icon: this.typescript_icon,
      tech_name: this.typescript_name
    }];
  }
}
