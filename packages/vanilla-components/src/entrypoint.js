// NOTE(johan): This is a custom loader which will inject script tags for both the ES Modules and non-ES Modules
// builds. We use this instead of dist/widget-components.js as that is deprecated and actually doesn't work because of
// its name causing lazy loaded scripts to be loaded from the wrong path in /dist
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];

  var parts = scriptElm.src.split('/');
  parts.pop();
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/widget-components.esm.js';
  scriptElm.setAttribute('data-stencil-namespace', 'widget-components');
  doc.head.appendChild(scriptElm);
  
  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/widget-components.js';
  scriptElm.setAttribute('data-stencil-namespace', 'widget-components');
  doc.head.appendChild(scriptElm)
})(document);

