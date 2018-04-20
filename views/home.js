"use strict"
application.Home = Backbone.View.extend({

    tagName: 'div',

    className: 'home',

    initialize: function () {
        this.render()
    },

    render: function () {

        alert(this.tagName)
    }
})