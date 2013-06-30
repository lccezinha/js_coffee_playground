alert('High Caffeine Level') if caffeineLevel > 5

##

# caffeineLevel > 5 ? alert('Too High') : alert('OK');
if caffeineLevel > 5 then alert('Too High') else alert('OK')


# if(!coffeeReady){
#   alert('Please wait 5 more minutes.')
# }

alert('Please wait 5 more minutes.') unless coffeeReady

# if lowLevel < newLevel && newLevel < highLevel
#   alert 'ok'
# else
#   alert 'abnormal caffeine level'

if lowLevel < newLevel < highLevel
  alert 'OK'
else
  alert 'abnormal coffeine level'


# if (newLevel === 1) {
#   message = 'Out of bed yet?';
# } else if (newLevel === 2) {
#   message = 'Good morning!';
# } else {
#   message = 'You should stop while you can';
# }

message = switch newLevel
  when 1 then 'Out of bed yet?'
  when 2 then 'Good morning!'
  else 'You should stop while you can'

# if (typeof newLevel !== "undefined" && newLevel !== null){
#   checkLevel(newLevel);
# } else {
#   resetLevel();
# }

if newLevel?
  checkLevel newLevel
else
  resetLevel()



