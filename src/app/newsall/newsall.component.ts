import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NewsService } from '../shared/news.service';
import { News } from '../shared/news';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {
  news:Observable<News[]>;
  isToggle:boolean = true;

  constructor(private title:Title, private newsService: NewsService) {}

  ngOnInit() {
    this.title.setTitle('ข่าวทั้งหมด');
    this.news = this.newsService.getNews();
  }

  toggleImage():void {
    this.isToggle = !this.isToggle;
  }

}
