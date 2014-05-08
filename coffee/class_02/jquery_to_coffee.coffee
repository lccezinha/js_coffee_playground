# jQuery(function($) {
#   $('#newCoffee a').click(function() {
#     alert('New coffee added');
#   });
# });

$ ->
  $('#newCoffee a').click ->
    alert 'New coffee added'


# $('#newCoffee a').click(function() {
#   var name = prompt('Name of coffee:');
#   alert("New coffee added: " + name);
# });

$ ->
  name = prompt 'Name of coffee:'
  alert "New coffee added: #{name}"

# $('#newCoffee a').click(function() {
#   var coffee, name;
#   name = prompt('Name of coffee:');
#   coffee = $("<li>" + name + "</li>");
#   $('ul.drink').append(coffee);
# });

$ ->
  $('#newCoffee a').click ->
    name = prompt 'Name of coffee: '
    coffee = $("<li>#{name}</li>")
    $('ul.drink').append coffee

# $('.drink li a').click(function(e) {
#   e.preventDefault();
#   alert($(this).text());
# });

$('.drink li a').click (e) ->
  e.preventDefault()
  alert $(@).text()

# $('.drink li').mouseenter(function() {
#   $(this).find('span').show();
# });
# $('.drink li').mouseleave(function() {
#   $(this).find('span').hide();
# });

$('.drink li').mouseenter ->
  $(@).find('span').show
$('.drink li').mouseleave ->
  $(@).find('span').hide

# $('.drink li').hover(function() {
#   $(this).find('span').show();
# }, function() {
#   $(this).find('span').hide();
# });

$('.drink li').hover(
  ->   
    $(@).find('span').show();
  ->
    $(@).find('span').hide();  
)
