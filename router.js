"use strict"

application.Router = Backbone.Router.extend({

    routes: {

        '':'home'

    },

    $container: $('#app'),

    home: function(){
        var view = new application.Home()
        this.$container.html( view.el )
    }

})


var appRouter = new application.Router()
Backbone.history.start()