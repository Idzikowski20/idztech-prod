import { SimpleEditor } from './tiptap-templates/simple/simple-editor';
import * as React from 'react';

interface TipTapEditorProps {
  value: any;
  onChange: any;
  isToolbarFixed?: boolean;
  placeholder?: string;
  className?: string;
}

export const TipTapEditor = React.forwardRef<HTMLDivElement, TipTapEditorProps>((props, ref) => {
  return <SimpleEditor {...props} ref={ref} />;
});

TipTapEditor.displayName = 'TipTapEditor';

export default TipTapEditor; 