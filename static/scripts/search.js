(function (global) {
    /*************** SEARCH - AUTOCOMPLETE ***************/
    var $searchContainer = $('#search-container');
    var $searchInput = $searchContainer.find('input');

    var KEY_CODE_ENTER = 13;

    var searchUrl = '/__search.json',
        curSuggestion = null,
        searchJson = null;

    /**
     * Initialize searcher.
     * @param {Array} dataList Raw data list.
     */
    function initSearcher(dataList) {
        var names = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: dataList,
            identify: function (obj) {
                return obj.path;
            }
        }),
            comments = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('comment'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: dataList,
                identify: function (obj) {
                    return obj.path;
                }
            });
        $searchInput.bind('typeahead:render', function(e, suggestion) {
            // console.log('Selection: ' + suggestion);
            curSuggestion = suggestion;
        });
        $searchInput.on({
            keyup: function(event) {
                if (event.keyCode === KEY_CODE_ENTER) {
                    if($searchInput.val() && curSuggestion) {
                        location.href = curSuggestion.path;
                    }
                    return;
                }
            }
        });
        $searchInput.typeahead({
            highlight: true,
            classNames: {
            }
        }, {
                name: 'name',
                display: 'name',
                source: names,
                templates: {
                    header: '<h3 class="league-name">API Name</h3>',
                    suggestion: Handlebars.compile('<li><a href="{{path}}">{{name}}<li>')
                },
            }, {
                name: 'comment',
                display: 'comment',
                source: comments,
                templates: {
                    header: '<h3 class="league-name">API Comment</h3>',
                    suggestion: Handlebars.compile('<li><a href="{{path}}">{{comment}}<li>')
                }
            });
    }

    function init() {
        $.get(searchUrl, function (res) {
            searchJson = res;
            // nedb = generateDB(res);
            initSearcher(searchJson);
        });
    }
    init();
})(typeof self != 'undefined' ? self : global);