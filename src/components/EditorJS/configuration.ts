export const configuration = {
  holder: 'editorjs',
  placeholder: 'Vamos criar um capítulo',
  tools: {
    header: {
      class: Header,
      inlineToolbar: ['marker', 'link'],
      config: {
        placeholder: 'Header'
      },
      shortcut: 'CMD+SHIFT+H'
    },
  },
  data: {},
  onReady: () => {
    console.log('Editor Ready');
  },
  onChange: (api, event) => {
    console.log(api, event)
  },
  inlineToolbar: ['link', 'marker', 'bold', 'italic']
};
