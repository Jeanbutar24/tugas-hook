import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./search";

function ContentKw(props) {
  const [search, setSearch] = useState("tesla");
  const [news, setNews] = useState({
    status: "",
    totalResults: null,
    articles: [],
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRefresh, setIsRefresh] = useState(false);

  const getNews = async () => {
    try {
      let response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=0b3f90995f054bb4933aaa00d9e4eda3`
      );
      //   console.log(response.data);
      setNews({
        ...news,
        articles: response.data.articles,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getNews();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(news.articles);
  };
  const data = news.articles;
  return (
    <div className="container bg-dark rounded">
      <form onSubmit={handleSubmit} className="mt-5">
        <Search
          placeholder="Cari berita anda"
          value={search}
          onChange={handleChange}
          className="item-center rounded mt-5 "
        />
        <button>Search</button>
      </form>

      <div className="container">
        <div className="container">
          <div className="row">
            {news.articles.map((user, index) => (
              <div className="col-md-4 my-5" key={index}>
                <div className="card">
                  <img
                    src={user.urlToImage}
                    className="card-img-top"
                    alt="No image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.title}</h5>
                    <a href={user.url}>See the detail</a>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.source.id}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.publishedAt}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentKw;
