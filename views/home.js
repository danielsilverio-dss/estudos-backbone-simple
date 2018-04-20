"use strict"
application.Home = Backbone.View.extend({

    tagName: 'div',

    className: 'home',

    initialize: function () {
        ViewHelper.getTemplate('../templates/home.hbs', this, { name: 'World' }) 
    },

    render: function () {
        this.$el.html( this._template )
    },

    setTemplate: function( template ) {
        this._template = template
        this.render()
    }


})