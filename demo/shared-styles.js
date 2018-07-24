const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .red-100 {
        background: var(--google-red-100);
      }

      .yellow-100 {
        background: var(--google-yellow-100);
      }

      .blue-100 {
        background: var(--google-blue-100);
      }

      .green-100 {
        background: var(--google-green-100);
      }

      .red-300 {
        background: var(--google-red-300);
      }

      .yellow-300 {
        background: var(--google-yellow-300);
      }

      .blue-300 {
        background: var(--google-blue-300);
      }

      .green-300 {
        background: var(--google-green-300);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;