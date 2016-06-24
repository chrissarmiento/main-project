import React from "react";

export default class News extends React.Component {

	getNews() {
		var news = ["Test1", "test2"];
		var e = "http://content.guardianapis.com/search?api-key=test";
		news.push(e);
		return news;

	}

	render() {
		return(
			<div> 
			<h1> {getNews(http://content.guardianapis.com/search?api-key=test)}</h1>

			</div>
		);

	}

}