import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { map } from 'rxjs/operators/map';

@Injectable()
export class WordpressService {
	private http: Http;
	private config: Config;
	private articles: Post[];

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<Post[]> {
		return this.http.get(this.config.wordpressApiUrl)
			.map(x => x.json())
			.map(response => {
				console.log(response);
				this.articles = response.servicios.map((item: any) => this.createArticle(item));
				return this.articles;
			});
	}

	private createArticle(item): Post {
		return {
			codigo: item.codigo,
			nombre: item.nombre,
			descripcion: item.descripcion,
			valor: item.valor,
		};
	}
}