import { FloatingMenu, BubbleMenu, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { app } from "../firebase";
import * as Y from "yjs";
import { FireProvider } from "y-fire";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useId } from "react";

const yProvider = (documentPath: string) => {
  const firebaseApp = app;
  const ydoc = new Y.Doc();
  return new FireProvider({ firebaseApp, ydoc, path: documentPath });
};

const Tiptap = () => {
  const provider = yProvider("data/doc");

  const extensions = [
    StarterKit.configure({ history: false }),
    Collaboration.configure({ document: provider.doc }),
    CollaborationCursor.configure({ provider, user: { name: useId() } })
  ];
  const editor = new Editor({
    extensions
  });
  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </>
  );
};

export default Tiptap;
