import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'footer',
  fixed: false
};

class Footer extends Component {
  componentDidMount() {
    this.isFixed(this.props.fixed);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('footer-fixed'); }
  }

  render() {
    const {
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, 'app-footer');

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
