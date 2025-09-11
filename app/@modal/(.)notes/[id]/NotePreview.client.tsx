'use client';

import { useEffect, useState } from 'react';
import { fetchNoteById } from '@/lib/api';
import css from './NotePreview.module.css';
import { type Note } from '@/types/note';

type Props = {
  id: string;
  onBack: () => void;
};

export default function NotePreview({ id, onBack }: Props) {
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    fetchNoteById(id).then(setNote);
  }, [id]);

  if (!note) return null;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {new Date(note.createdAt).toLocaleString()}
        </p>
        <button className={css.backBtn} onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}