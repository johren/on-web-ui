'use strict';

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import mixin from 'react-mixin';
import PageHelpers from 'common-web-ui/mixins/PageHelpers';
/* eslint-enable no-unused-vars */

import {} from 'material-ui';
import SkusGrid from './SkusGrid';

@mixin.decorate(PageHelpers)
export default class Skus extends Component {

  render() {
    return (
      <div className="Skus">
        {this.renderBreadcrumbs({href: 'dash', label: 'Dashboard'}, 'Skus')}
        <SkusGrid />
      </div>
    );

  }

}