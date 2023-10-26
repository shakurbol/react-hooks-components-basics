import React from 'react';

// Article Component
function Article() {
  return (
    <div className="article">
      <h2>Article Title</h2>
      <p>
        This is the content of the article. It can be a long and informative text about a particular topic.
      </p>
    </div>
  );
}

// Comment Component
function Comment() {
  return (
    <div className="comment">
      <h3>Comment</h3>
      <p>
        I agree with the points made in the article. It's well-written and informative.
      </p>
    </div>
  );
}

export { Article, Comment };
