require.config({
    paths: {
        'vs': 'node_modules/monaco-editor/min/vs'
    }
});
require(['vs/editor/editor.main'], function () {
    monacoEditor = monaco.editor.create(document.getElementById('inputText'), {
        value: "Hello Editer!",
        language: 'html',
        wrappingColumn: 0,
        wrappingIndent: "indent"
    });
});