import React, {useState} from 'react';

const BlogForm = ({ addBlogEntry, characterCount }) => {
    const [content, setContent] = useState('');
  
    const handleInputChange = (e) => {
      setContent(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (content.trim() !== ''){
            addBlogEntry(content);
            setContent('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={handleInputChange}
            placeholder="Write your blog entry..."
            rows="5"
          />
          <p>Total characters: {characterCount}</p>
          <button type="submit">Add Entry</button>
        </form>
      );

    
}

export default BlogForm;