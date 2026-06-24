function MyArticle({ title, desc, diff = -1, onChangeMode, onDelete }) {
  console.log('MyArticle render');
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        {diff !== -1 ? <p>{diff}</p> : <></>}
      </article>
      <button
        onClick={() => {
          onChangeMode();
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          onDelete();
        }}
      >
        삭제
      </button>
    </section>
  );
}
export default MyArticle;
