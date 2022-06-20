import React, { useState, useEffect } from "react";
import Search from "./search";

const Content = () => {
  const [news, setNews] = useState({
    status: "",
    totalResults: null,
    articles: [],
    value: "",
  });
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);

  // const keyAPI = `https://newsapi.org/v2/everything?q=${news.value}&apiKey=0b3f90995f054bb4933aaa00d9e4eda3`;
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://newsapi.org/v2/everything?q=tesla&apiKey=0b3f90995f054bb4933aaa00d9e4eda3`
      )
        .then((response) => response.json())
        .then((res) => {
          setNews({
            totalResults: res.totalResults,
            status: res.status,
            articles: res.articles,
            value: "",
          });
        });
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setNews({
      ...news,
      value: e.target.value,
    });
  };

  const handleSearch = (e) => {
    setNews({
      ...news,
      value: e.target.value,
    });
    console.log(news.value);
    console.log(news.articles);
  };

  const handleRefresh = () => {
    setNews({
      ...news,
      value: "",
    });
  };
  return (
    <div className="content">
      <Search
        placeholder="Cari berita anda"
        value={news.value}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleRefresh}> Refresh</button>
    </div>
  );
};
export default Content;
// ini salah
