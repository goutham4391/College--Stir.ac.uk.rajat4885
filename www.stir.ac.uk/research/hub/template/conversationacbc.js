(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['conversation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"cell large-4 medium-6 small-12 c-news-events__article u-white\" aria-labelledby=\"rh-convo-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":2,"column":105},"end":{"line":2,"column":115}}}) : helper)))
    + "\">\n    <img class=\"show-for-medium\" src=\""
    + alias4((lookupProperty(helpers,"theConversationImageCrop")||(depth0 && lookupProperty(depth0,"theConversationImageCrop"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"image") : depth0),760,470,{"name":"theConversationImageCrop","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":80}}}))
    + " \" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":3,"column":88},"end":{"line":3,"column":95}}}) : helper)))
    + "\">\n    <!-- <time class=\"c-news-events__time u-white\"></time> -->\n    <h3 class=\"c-news-events__title\"><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":54}}}) : helper)))
    + "\" class=\"c-link u-white\" id=\"rh-convo-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":92},"end":{"line":5,"column":102}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":104},"end":{"line":5,"column":113}}}) : helper)))
    + "</a></h3>\n    <!-- <p class=\"c-news-events__summary\"></p> -->\n</article>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"articles") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();