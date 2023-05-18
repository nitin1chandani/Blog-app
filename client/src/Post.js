import React from "react";

const post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/05/elon-musk-sam-altman.jpg?w=850&h=492&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          Elon Musk used to say he put $100M in OpenAI, but now it’s $50M: Here
          are the receipts
        </h2>
        <p className="info">
          <a href="" className="author">
            Nitin Chandani
          </a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Years of tax filings give the most complete picture yet of OpenAI’s
          early finances
        </p>
      </div>
    </div>
  );
};

export default post;
