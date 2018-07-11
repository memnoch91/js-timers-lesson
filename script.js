$(function() {

var itemClass = "list_item";

var success = `<li class="success ${itemClass} ">Congrats! Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>`
var info = `<li class="info ${itemClass}">Info! Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>`
var alert = `<li class="alert ${itemClass}">Alert! Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>`
var error = `<li class="error ${itemClass}">Error! Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>`

var root = $('#root');
var notifications = [success, info, alert, error];
var test = [];
var interval = false;

function stopInterval () {
   clearInterval(interval);
   interval = false;
}

function startInterval() {
    if(!interval) {
        interval = setInterval(() => {

            test.push(notifications[Math.floor(Math.random() * notifications.length)]);

            root.append(
                () => {
                    root.html('');
                    return test;
                }
            )
            //console.log(test);
            setInterval(() => {
                test.splice(0, 1);
            }, 3000);
        }, 1000);
    }
}
root.on('mouseenter', '.list_item', stopInterval );
root.on('mouseleave', '.list_item', startInterval );

startInterval();
});


