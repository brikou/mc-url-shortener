import React, { useState } from 'react';
import logo from './logo.svg';
import { useCreateUrlMutation, useUrlsQuery } from './graphql/url.generated';

function ShortUrlContainer() {
  const [link, setLink] = useState('');
  const { data, refetch } = useUrlsQuery();
  const [createUrl] = useCreateUrlMutation();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.currentTarget.value);
  };

  const onSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();

    if (link) {
      await createUrl({ variables: { createUrlInput: { link } } });
      setLink('');
      await refetch();
    }
  };

  return (
    <div
      data-cy="urlContainer"
      className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
    >
      <div className="font-semibold text-xl">Short URLs</div>
      <div className="font-semibold">
        <form className="flex gap-4" onSubmit={onSubmit}>
          <input
            data-cy="messageInput"
            placeholder="https://www.example.com"
            className="p-3 w-96 border-2 rounded-full border-main-blue"
            value={link}
            onChange={onChange}
            type="url"
          />
          <button
            data-cy="submit"
            type="submit"
            className="p-3 bg-main-blue text-white rounded-full"
          >
            Shorten URL
          </button>
        </form>
      </div>
      {data?.urls.map((url) => (
        <div key={url.key}>
          <a
            href={`http://localhost:4000/urls/${url.key}`}
            target="_blank"
            rel="noreferrer"
          >
            {url.link}
          </a>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="bg-main-blue min-h-screen">
      <header className="container mx-auto py-14 flex justify-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white font-bold text-2xl">URL shortener</h1>
      </header>
      <section className="container mx-auto py-8">
        <ShortUrlContainer />
      </section>
    </div>
  );
}

export default App;
