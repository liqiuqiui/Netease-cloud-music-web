import PropTypes from "prop-types";

export const LinkToType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.exact({
    pathname: PropTypes.string,
    state: PropTypes.object,
    hash: PropTypes.string,
    search: PropTypes.string,
  }),
  PropTypes.func
])
