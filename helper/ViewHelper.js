"use strict"

var ViewHelper = {
    
    getTemplate: function( path, view, contextValues ) {
        $.get(path, function( data ){
            var template = Handlebars.compile( data )
            view.setTemplate( template( contextValues ) )
        }, 'html')
    }

}