import { useEffect, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);
  
  useEffect(() => {
    console.log('App.js:1');
    fetchLanguages();
  }, []) 
  // useEffectの第二引数は依存する配列を定義できる。
  // 空の配列を入れるとmountingの時だけ起こるようになる,最初だけイベントを起こしたい時はこうする
  // [langs]とするとmountの時はとlangs が変更する時に起こる。
　// [langs, tab]とすると、tabが変更された時にも起こるようになる。

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    console.log(4);
    setLangs(languages);
  }

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;