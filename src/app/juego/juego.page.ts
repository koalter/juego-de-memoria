import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  first: any = undefined;
  second: any = undefined;
  cards: any[] = [];

  get difficulty() {
    return parseInt(this.route.snapshot.paramMap.get('difficulty')!);
  }

  get placeholder() {
    return `assets/cards/back.jpg`;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let length: number = 0;
    let dir: string = '';
    switch (this.difficulty) {
      case 0:
        length = 3;
        dir = 'animals';
        break;
      case 1:
        length = 5;
        dir = 'tools';
        break;
      case 2:
        length = 8;
        dir = 'fruits';
        break;
    }

    for (let i = 0; i < length; i++) {
      this.cards.push({ src: `../assets/cards/${dir}/${i}.jpg`, visible: false, matched: false });
      this.cards.push({ src: `../assets/cards/${dir}/${i}.jpg`, visible: false, matched: false });
    }
  }

  action(item: any) {
    if (!item.visible) {
      if (!this.first) {
        this.first = item;
        this.first.visible = true;
      } else if (!this.second) {
        this.second = item;
        this.second.visible = true;

        if (this.first.src === this.second.src) {
          this.first.matched = true;
          this.second.matched = true;
          this.first = undefined;
          this.second = undefined;
        } else {
          setTimeout(() => {
            this.first.visible = false;
            this.second.visible = false;
            this.first = undefined;
            this.second = undefined;
          }, 600);
        }
      }
    }
  }

}
