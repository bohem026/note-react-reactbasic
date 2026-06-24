import { useState } from 'react';

function UpdateArticle({ title, desc, diff, onSubmit }) {
  console.log('UpdateArticle render');
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [newDiff, setNewDiff] = useState(diff);
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setNewDesc(e.target.value);
  };
  const handleDiffChange = (e) => {
    setNewDiff(e.target.value);
  };
  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(newTitle, newDesc, newDiff);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" value={newTitle} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={newDesc} onChange={handleDescChange}></textarea>
        </div>
        <div>
          <label htmlFor="diff">diff</label>
          <input type="number" name="diff" id="diff" value={newDiff} onChange={handleDiffChange} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UpdateArticle;
