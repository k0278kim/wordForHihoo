type props = {
  max_n: number,
  words: string[],
  setIndexedWord: any,
}

const ResultList = ({words, setIndexedWord, max_n} : props) => {

  return (
    <div style={{
      display: 'flex',
      columnGap: 10
    }}>
      <WordList words={words.slice(0, Math.ceil(max_n / 2))} setIndexedWord={setIndexedWord} max_n={Math.ceil(max_n / 2)} index={0}></WordList>
      <WordList words={words.slice(Math.ceil(max_n / 2))} setIndexedWord={setIndexedWord} max_n={Math.ceil(max_n / 2)} index={1}></WordList>
    </div>
  )
}

type wordlistProps = {
  words: string[],
  setIndexedWord: any,
  max_n: number,
  index: number
}

const WordList = ({words, setIndexedWord, max_n, index}: wordlistProps) => {
  console.log(words);
  return <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
    <tbody>
    {
      [...Array(max_n)].map((_, i) => {
        const word = words[i] || '';
        return <tr key={i}>
          <td>
            {max_n * index + i + 1 + ". "}
            <input
              key={i}
              type={"text"}
              value={word}
              style={{
                width: "70%",
                height: "80%",
                border: "none",
                textAlign: "start",
                padding: 0,
                fontSize: "16px"
              }}
              onChange={(e) => setIndexedWord(max_n * index + i, e.target.value)}
            />
          </td>
          <td></td>
        </tr>
      })
    }
    </tbody>
  </table>
}

export default ResultList;