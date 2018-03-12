(function () {
    tinymce.PluginManager.add('lebck_bootstrap_buttons', function (editor, url) {
        editor.addButton('acc_button', {
            title: 'Accordions',
            text: 'Accordions',
            type: 'menubutton',
            menu: [
                {
                    text: 'Add Accordion Button',
                    onclick: function () {
                        var selectedText = editor.selection.getContent();

                        editor.windowManager.open({
                            title: 'Insert Accordion Button',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Target ID?'
                            }],
                            onsubmit: function (e) {
                                var html =
                                    '<button class="btn btn-primary" type="button" data-toggle="collapse" ' +
                                    'data-target="#' + e.data.title + '" aria-expanded="false" aria-controls="'
                                    + e.data.title + '">' + selectedText + '</button>';

                                editor.insertContent(html);
                            }
                        });


                    }
                },
                {
                    text: 'Add Accordion Text',
                    onclick: function () {
                        var selectedText = editor.selection.getContent();

                        editor.windowManager.open({
                            title: 'Insert Accordion Button',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'ID?'
                            }],
                            onsubmit: function (e) {
                                var html = '<div class="collapse" id="' + e.data.title + '"><p>' +
                                    selectedText + '</p></div>';
                                editor.insertContent(html);
                            }
                        });
                    }
                }
            ]
        });
    });
})();