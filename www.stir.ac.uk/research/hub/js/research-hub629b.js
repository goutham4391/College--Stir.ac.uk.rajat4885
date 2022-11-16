var GLOBALS = GLOBALS || {};
var $ = $ || {};
var convodata = convodata || undefined;
var stir = stir || {};

stir.initials = function (name) {
    if ((typeof (name) == "undefined") || (name == "Unknown name")) return "";
    var nameChunk = name.split(" ");
    return nameChunk[0].charAt(0) + nameChunk[nameChunk.length - 1].charAt(0);
}

stir.hue = function (alpha) {
    if (typeof (alpha) == "undefined") return 0;
    return 360 * ((1 / 26) * (alpha.toLowerCase().charCodeAt(0) - 96)) - 0.01;
}

stir.sortByName = function (items) {
    items.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // else, the names must be equal
        return 0;
    });
    return items;
}

// the following functions depend on jQuery
if (typeof ($) === "function") {

    stir.chooseomatic = function (data, label, id) {
        var index = [];
        data.forEach(function(item) {
            index.push({ "id": item.id, "name": item.details[0].name });
        });
        index = stir.sortByName(index);
        index.forEach(function (item) {
            $("#" + id).append($('<option value="' + item.id + '">' + item.name + '</option>'));
        });

        //TODO re-order the <option> tags after new ones are appended!

        $("#" + id + " .placeholder").html("~ Choose " + label + " ~");
        $("#" + id).prop('disabled', false);
    }

    stir.renderTopAreas = function (data) {
        stir.chooseomatic(data, "an area", "areas");
    }

    stir.renderDivision = function (data) {
        stir.chooseomatic(data, "a division", "divisions");
    }

    $(document).ready(function () {

        // the following requires Handlebars
        if(typeof(Handlebars) != "undefined"){

            Handlebars.registerHelper("theConversationImageCrop", function (src, width, height) {
                return src.replace(/w=\d+/, "w="+width).replace(/h=\d+/, "h="+height).replace(/&amp;/g, "&");
            });

            Handlebars.registerHelper("pathToEntityFormatter", function (entity, id) {
                return (entity === "iot_person") ? "/people/" + id : GLOBALS['uri'] + (entity.replace("iot_","")) + '/' + id;
            });

            Handlebars.registerHelper("pictureDecider", function (person) {
                if(typeof (person) == "undefined") return '';
                var name = person.hr_first_name + " " + person.hr_last_name;
                if ((typeof (person.pictureId) != "undefined") && (person.pictureId.length > 0)) {
                    return '<img src="' + GLOBALS['uri'] + 'thumbnail/' + person.pictureId + '?bg=f6f5f4" alt="' + name + '">';
                }
                return Handlebars.templates.svginitials({ "id": person.pictureId, "hue": stir.hue(name), "name": name, "initials": stir.initials(name) });
            });

            $("[data-json-url]").each(function () {
                var that = this; // can't use arrow functions because we need to support IE
                var renderer = Handlebars.templates[$(this).data("renderer")] || new Function();
                var options = {
                    dataType: $(this).data("type") || "json",
                    url: $(this).data("json-url"),
                    callback: "callback"
                }
    
                $.ajax(options)
                    .done(function (data) { $(that).html(renderer(data)); /* console.log(data); */ })
                    .fail(function () { $(that).html("Sorry, there was an error loading the data."); })
                    .always(function () { $(that).children(".loading").remove(); });
            });

            $("[json-url],[data-json-url]").each(function () {
                $(this).append($('<div class="loading" role="alert" aria-busy="true" aria-atomic="true">Now loading…</div>'));
            });
        }
    });

}
