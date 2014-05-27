var NavigationItem = module.exports = function(data, scope) {
  /** @private {string} */
  this._name = data.name || '';

  /** @private {string} */
  this._title = data.title || '';

  /** @private {string} */
  this._header = data.header || data.title || '';

  this._navigationTitle =
    data.navigationTitle || data.header || data.title || '';

  /** @private {string} */
  this._absUrl = data.url || '';

  /** @private {boolean} */
  this._relative = false;

  /** @private {!Array.<NavigationItem>} */
  this._childs = [];

  /** @private {string} */
  this._scope = scope;

  /** @private {string} */
  this._template = data.template || '';
};


/**
 * @param {Array.<Object>} navigation
 * @param {boolean=} opt_relative
 * @param {string=} opt_scope
 * @return {!Array.<NavigationItem>}
 */
NavigationItem.createFromConfig = function(navigation, opt_relative,
    opt_scope) {
  if (navigation) {
    return navigation.map(function(data) {
      var scope = data.scope || opt_scope || '';
      var item = new NavigationItem(data, scope);
      item.setRelative(!!opt_relative);
      var childItems = NavigationItem.createFromConfig(
        data.childs, opt_relative, scope);

      if (childItems) {
        item.setChilds(childItems);
      }

      return item;
    });
  }

  return [];
};

/**
 * @param {Array.<NavigationItem>} items
 * @param {Object.<string>=} opt_routePaths
 * @return {!Object.<string>}
 */
NavigationItem.routeNameToUrl = function(items, opt_routePaths) {
  var routePaths = opt_routePaths || {};

  items.forEach(function(item) {
    var name = item.getName();
    var url = item.getUrl();
    var childs = item.getChilds();

    if (name && url) {
      var scope = item.getScope();
      var key = scope ? scope + '/' + name : name;
      routePaths[key] = url;
    }

    if (childs) {
      NavigationItem.routeNameToUrl(childs, routePaths);
    }
  });

  return routePaths;
};

/**
 * @param {boolean} relative
 */
NavigationItem.prototype.setRelative = function(relative) {
  this._relative = relative;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getName = function() {
  return this._name;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getTitle = function() {
  return this._title;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getHeader = function() {
  return this._header;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getNavigationTitle = function() {
  return this._navigationTitle;
};

/**
 * @return {Array.<NavigationItem>}
 */
NavigationItem.prototype.getChilds = function() {
  return this._childs;
};

/**
 * @param {Array.<NavigationItem>} childs
 */
NavigationItem.prototype.setChilds = function(childs) {
  this._childs = childs || [];
};

/**
 * @return {string}
 */
NavigationItem.prototype.getAbsUrl = function() {
  return this._absUrl;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getUrl = function() {
  var url = this._absUrl;

  if (url && this._relative) {
    if ('/' == this._absUrl.charAt(this._absUrl.length - 1)) {
      url += 'index';
    }

    url = url + '.html';
  }

  return url;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getScope = function() {
  return this._scope;
};

/**
 * @return {string}
 */
NavigationItem.prototype.getTemplate = function() {
  return this._template;
};
