# coffee =
#   name: 'Russian'
#   level: 2
#   isRussian: -> @name is 'Russian'

class Coffee
  constructor: (@name, @level) ->    
  isRussian: -> @name is 'Russian'

coffee = new Coffee 'Luiz', 2

#

# class Coffee
#   constructor: (name, level) ->
#     @name = name
#     @level = level or 0

#   isRussian: -> @name is 'Russian'

class Coffee
  constructor: (@name, @level = 0) ->
  isRussian: -> @name is 'Russian'


# class Coffee
#   constructor: (@name, @level=0) ->

class Coffee extends Drink
  constructor: (@name, @level=0) ->
  serve: ->
    return false if @sleeve is not on
    super()

#

class DrinkLink
  watchClick: ->
    $('a').click ->
      $(@).css('color', '#F00')


# class DrinkLink
#   constructor: (@linkClicked=false) ->
#   watchClick: ->
#     $('.drink a').click (event) ->
#       $(event.target).css('color', '#F00')
#       @linkClicked = true


class DrinkLink
  constructor: (@linkClicked=false) ->
  watchClick: ->
    $('.drink a').click (event) =>
      $(event.target).css('color', '#F00')
      @linkClicked = true
