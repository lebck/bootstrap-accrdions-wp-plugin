(function() {
  //Accordion-Buttons
  tinymce.PluginManager.add('lebck_bootstrap_buttons', function(editor, url) {
    editor.addButton('acc_button', {
      title: 'Add Accordion',
      text: 'Add Accordion',
      onclick: function() {
        // Create unique ID
        var id = Date.now();
        var html =
          `<button class="btn btn-hfb-accordion" type="button" data-toggle="collapse" data-target="#${id}" aria-expanded="false" aria-controls="1">`+
            '<img src="/wp-content/themes/bootstrap-basic-theme/img/icons/icon-chevron.png" class="icon-chevron">'+
            'Accordion Title'+
          '</button>' +
          `<div id="${id}" class="collapse">`+
            '<div class="hfb-accordion-content">' +
              '<p>Accordion Text<p>' +
            '</div>' +
          '</div>'

        // Insert html at the bottom of editor content
        editor.dom.add(editor.getBody(), 'div',{class: 'hfb-accordion'}, html);

      }
    });
  })
})();
