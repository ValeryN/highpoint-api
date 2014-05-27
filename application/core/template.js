var OjsterTemplate = require('ojster').Template;
var inherits = require('util').inherits;
var path = require('path');


var Template = module.exports = function(data, ctx, writer) {
  OjsterTemplate.call(this, data, ctx, writer);

  /**
   * @private {string}
   */
  this._pageAbsPath = '';

  /**
   * @private {Object.<string>}
   */
  this._routePaths = null;

  /**
   * @private {Object.<string>}
   */
  this._cssNameMapping = null;

  /**
   * 'whole' or 'parts'
   * @private {string}
   */
  this._mappingStyle = 'parts';
};
inherits(Template, OjsterTemplate);


/** @inheritDoc */
Template.prototype.getCssName = function(name, modifiers) {
  var cssName = OjsterTemplate.prototype.getCssName.call(this, name, modifiers);

  if (this._cssNameMapping) {
    if ('whole' == this._mappingStyle) {
      return this._getCssNameMapping(cssName);
    } else {
      return this._renameCssNameByParts(cssName);
    }
  }

  return cssName;
};

/**
 * @param {string} cssName
 * @return {string}
 * @private
 */
Template.prototype._getCssNameMapping = function(cssName) {
  return this._cssNameMapping[cssName] || cssName;
};

/**
 * @param {string} cssName
 * @return {string}
 * @private
 */
Template.prototype._renameCssNameByParts = function(cssName) {
  var parts = cssName.split('-');
  var mapped = [];

  for (var i = 0; i < parts.length; i++) {
    mapped.push(this._getCssNameMapping(parts[i]));
  }

  return mapped.join('-');
};

/**
 * @return {string}
 */
Template.prototype.getMappingStyle = function() {
  return this._mappingStyle;
};

/**
 * @param {string} style 'whole' or 'parts'
 */
Template.prototype.setMappingStyle = function(style) {
  this._mappingStyle = style;
};

/**
 * @return {Object.<string>}
 */
Template.prototype.getCssNameMapping = function() {
  return this._cssNameMapping;
};

/**
 * @param {Object.<string>} map
 */
Template.prototype.setCssNameMapping = function(map) {
  this._cssNameMapping = map;
};

/**
 * @param {string} absPath
 */
Template.prototype.setPageAbsPath = function(absPath) {
  this._pageAbsPath = absPath;
};

/**
 * @param {string} absPath
 * @return {string}
 */
Template.prototype.relativePath = function(absPath) {
  if (this._pageAbsPath) {
    var relative = path.relative(
      path.dirname(this._pageAbsPath), path.dirname(absPath));
    relative += relative ? '/' : './';

    return relative + path.basename(absPath);
  }

  return absPath;
};

/**
 * @param {Object.<string>} routePaths
 */
Template.prototype.setRoutePaths = function(routePaths) {
  this._routePaths = routePaths;
};

/**
 * @param {string} routeName
 * @return {string}
 */
Template.prototype.routePath = function(routeName) {
  var absPath = this._routePaths && this._routePaths[routeName] ?
    this._routePaths[routeName] : '';

  if (absPath) {
    return this.relativePath(absPath);
  }

  return absPath;
};
