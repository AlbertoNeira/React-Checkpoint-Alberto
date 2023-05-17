import React from 'react';
import { useParams } from 'react-router-dom';

const BlogEntry = ({ entries }) => {
  const { id } = useParams();
  const entry = entries.find((entry) => entry.id === parseInt(id));

  if (!entry) {
    return <div>Entry not found.</div>;
  }

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
      <p>Character count: {entry.content.length}</p>
    </div>
  );
};

export default BlogEntry