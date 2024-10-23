import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('tesla');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&page=${page}&from=2023-12-22&sortBy=publishedAt&apiKey=6f1ae1b1b6534f1282bbb413a5e31712`);
        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
          setTotalPages(Math.ceil(data.totalResults / 9));
        }
    };

    fetchData();
  }, [search, page]);

  const sliceText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">News App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => setSearch(search)}>Search</button>
        </div>
      </div>

      {articles.length > 0 && (
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{sliceText(article.title, 30)}</h5>
                  <p className="card-text">{sliceText(article.description, 150)}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {articles.length > 0 && (
        <div className="mt-3">
          <button className="btn btn-secondary mr-2" onClick={handlePrevPage} disabled={page === 1}>Previous</button>
          <span>{page} of {totalPages}</span>
          <button className="btn btn-secondary ml-2" onClick={handleNextPage} disabled={page === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default NewsApp;
