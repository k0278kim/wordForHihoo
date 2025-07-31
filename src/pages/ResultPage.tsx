import ResultList from "../widgets/ResultList";
import {useState} from "react";

type props = {
  words: string[],
  setIndexedWord: any,
  max_n: number
}

const ResultPage = ({ words, setIndexedWord, max_n }: props) => {
  return <div
    className={"printPage"}
    style={{
      width: '210mm',
      height: '297mm',
      border: '1px solid #ccc',
      margin: '20px auto',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      padding: '10mm',
    }}
  >
    <ResultList max_n={max_n} words={words} setIndexedWord={setIndexedWord}/>
  </div>
}

export default ResultPage;