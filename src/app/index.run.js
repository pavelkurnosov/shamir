(function() {
  'use strict';

  angular
    .module('shamir2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
