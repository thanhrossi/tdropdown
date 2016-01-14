$.fn.tDropdown = function (opt) {
        return this.each(function() {
        var opts = $.extend({
            afterSelect: null
        }, opt);
        var selectElem = $(this).children("select").first();
        //Bind event change on select tag
        selectElem.on("change", function() {
            selectElem.parents(".tDropdown").find(".show-val").children("span").html(selectElem.children(":selected").html());
            if ($.isFunction(opts.afterSelect)) {
                opts.afterSelect.call();
            }
        });
    });
};
