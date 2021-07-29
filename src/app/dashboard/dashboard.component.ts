import { Component, OnInit } from '@angular/core';
import { ArticleEnhanced } from '../article-enhanced';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  articles: ArticleEnhanced[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getArticlesByArticleClass().subscribe(
      articles => {
        this.articles = articles;
        console.log('articles', articles);
      }
    );
  }
}
