"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

export default function NotePreviewPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview id={id} onBack={() => router.back()} />
    </Modal>
  );
}
