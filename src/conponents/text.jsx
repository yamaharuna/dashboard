
import React from 'react';
import ReactMarkdown from 'react-markdown'; //  <- 1. react-markdown をインポート
const TextBox = ({ text }) => {
  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#F9F9F9',
      margin: '16px auto',margin: '16px auto',
      // マークダウンの内容が見やすいように、textAlign は 'left' に変更するのがおすすめです
      textAlign: 'left'
    }}>
      {/* 2. {text} を <ReactMarkdown> コンポーネントで囲む */}
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
export default TextBox;
