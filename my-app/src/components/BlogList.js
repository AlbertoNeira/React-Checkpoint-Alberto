import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ entries, deleteBlogEntry }) => {
  return (
    <div>
      <h2>Blog Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h3>
              <Link to={`/entry/${entry.id}`}>{entry.title}</Link>
            </h3>
            <p>{entry.content}</p>
            <p>Character count: {entry.content.length}</p>
            <button onClick={() => deleteBlogEntry(entry.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;