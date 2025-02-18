'use client';
import { useState } from 'react';
import styles from './iqtest.module.css';

export default function IQTest() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numberInput = parseInt(input);
    if (!isNaN(numberInput)) {
      setResult(`Неправильно! Я думал о числе ${numberInput + 1}`);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>О каком числе я думаю?</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            placeholder="Введите число"
          />
          <button type="submit" className={styles.button}>
            Проверить
          </button>
        </form>
        {result && <p className={styles.result}>{result}</p>}
      </main>
    </div>
  );
}