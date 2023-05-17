import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogEntry from './components/BlogEntry';
import BlogForm from './components/BlogForm';

const App = () => {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('blogEntries'));
    if (savedEntries) {
      setBlogEntries(savedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
  }, [blogEntries]);

  const addBlogEntry = (content) => {
    const newEntry = {
      id: Date.now(),
      title: `Blog Entry ${blogEntries.length + 1}`,
      content: content.trim(),
    };
    setBlogEntries([newEntry, ...blogEntries]);
  };

  const deleteBlogEntry = (id) => {
    const updatedEntries = blogEntries.filter((entry) => entry.id !== id);
    setBlogEntries(updatedEntries);
  };

  const totalWordCount = useMemo(() => {
    return blogEntries.reduce((count, entry) => {
      return count + entry.content.split(' ').length;
    }, 0);
  }, [blogEntries]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Entry</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/new"
            element={
              <BlogForm
                addBlogEntry={addBlogEntry}
                characterCount={blogEntries.reduce(
                  (count, entry) => count + entry.content.length,
                  0
                )}
              />
            }
          />
          <Route
            path="/entry/:id"
            element={<BlogEntry entries={blogEntries} />}
          />
          <Route
            path="/"
            element={
              <BlogList
                entries={blogEntries}
                deleteBlogEntry={deleteBlogEntry}
              />
            }
          />
        </Routes>
        <p>Total Word Count: {totalWordCount}</p>
      </div>
    </Router>
  );
};

export default App;