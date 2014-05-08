#Variables
person = "Luiz"

#Functions
greet = ->
  alert 'Hello LOL'

greet = (arg) ->
  alert "Hello #{arg}"

greet = (message, name) ->
  alert "#{message} #{name}"

greet = (name = 'Stranger') -> 
  alert name




