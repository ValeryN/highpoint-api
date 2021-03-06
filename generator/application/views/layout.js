// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
"use strict";
var inherits = require('util').inherits;
var Template = require('../core/template');

var Layout = function (opt_data, opt_ctx, opt_writer) {
  Template.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Layout, Template);


Layout.prototype.renderBlockMain = function () { // @7:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<!DOCTYPE html><html><head><meta http-equiv=\'Content-Type\' content=\'text/html; charset=utf-8\'><title>',
    d.title, // @12:12
    '</title><link media=\'all\' rel=\'stylesheet\' type=\'text/css\' href=\'',
    this.relativePath('/s/css/main.css'), // @13:62
    '\'></head><body>'
  ); // @16:5
  self.renderBlockPage(); // @16:5
  self.writer.write(
    '<script src=\'',
    this.relativePath('/s/js/main.js'), // @17:18
    '\'></script></body></html>'
  );
}; // @20:1


Layout.prototype.renderBlockPage = function () { // @23:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.renderBlockContent(); // @24:1
  self.renderBlockSidebar(); // @25:1
}; // @26:1


Layout.prototype.renderBlockContent = function () { // @29:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<div class="content"><h1>',
    d.header, // @31:7
    '</h1>'
  ); // @32:3
  self.renderBlockContentInternal(); // @32:3
  self.writer.write(
    '</div>'
  );
}; // @34:1


Layout.prototype.renderBlockSidebar = function () { // @37:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<div class=\'sidebar\'>'
  ); // @39:3
  self.renderBlockNavigationItems(d.navigation); // @39:3
  self.writer.write(
    '<div class=\'toggle\'></div></div>'
  );
}; // @42:1


Layout.prototype.renderBlockNavigationItems = function (items) { // @45:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<div class=\'navigation\'>'
  ); // @47:3

  items.forEach(function(item) {


      var url = item.getUrl();
      var childs = item.getChilds();

  self.writer.write(
    '<div class=\'item'
  ); // @52:21

  if (url && d.url == url) {

  self.writer.write(
    ' item-selected'
  ); // @52:67

  }

  self.writer.write(
    '\'>'
  ); // @53:7

  if (url && d.url != url) {

  self.writer.write(
    '<a href="',
    this.relativePath(url), // @54:18
    '">'
  ); // @55:7

  }

  self.writer.write(
    item.getNavigationTitle() // @57:7
  ); // @59:7

  if (url && d.url != url) {

  self.writer.write(
    '</a>'
  ); // @61:7

  }


  if (childs.length) {

  self.renderBlockNavigationItems(childs); // @64:9

  }

  self.writer.write(
    '</div>'
  ); // @67:3

  }, this);

  self.writer.write(
    '</div>'
  );
}; // @69:1

module.exports = Layout;
