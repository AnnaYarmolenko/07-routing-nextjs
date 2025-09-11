
import css from './page.module.css';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
}

export default async function Notes({params}: Props) {
  const { slug } = await params;
  const tag = slug[0] || 'All';

  return (
     <div className={css.app}>
        <NotesClient tag={tag} />
    </div>
  )
}