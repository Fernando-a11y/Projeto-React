import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [alphabetCount, setAlphabetCount] = useState(0);
  const [numberCount, setNumberCount] = useState(0);
  const [symbolCount, setSymbolCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Contar caracteres, letras, números, símbolos e espaços
    const count = {
      characterCount: newText.length,
      alphabetCount: countLetters(newText),
      numberCount: countNumbers(newText),
      symbolCount: countSymbols(newText),
      spaceCount: countSpaces(newText),
    };

    setCharacterCount(count.characterCount);
    setAlphabetCount(count.alphabetCount);
    setNumberCount(count.numberCount);
    setSymbolCount(count.symbolCount);
    setSpaceCount(count.spaceCount);
  };

  // Funções para contar letras, números, símbolos e espaços
  const countLetters = (text) => {
    const regex = /[a-zA-Z]/g;
    return text.match(regex) ? text.match(regex).length : 0;
  };

  const countNumbers = (text) => {
    const regex = /[0-9]/g;
    return text.match(regex) ? text.match(regex).length : 0;
  };

  const countSymbols = (text) => {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
    return text.match(regex) ? text.match(regex).length : 0;
  };

  const countSpaces = (text) => {
    const regex = /\s/g;
    return text.match(regex) ? text.match(regex).length : 0;
  };

  return (
    <div className="character-counter">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Digite seu texto aqui..."
      />

      <div className="counter-results">
        <p>Tamanho do texto: {characterCount}</p>
        <p>Letras: {alphabetCount}</p>
        <p>Números: {numberCount}</p>
        <p>Símbolos: {symbolCount}</p>
        <p>Espaços: {spaceCount}</p>
      </div>
    </div>
  );
};

export default CharacterCounter;