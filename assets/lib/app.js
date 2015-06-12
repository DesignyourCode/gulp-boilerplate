(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
    //Your code goes here - Please ensure it is commented properly
    
    //Tracking looks like this - update accordingly
    ga('send', 'event', 'category', 'action');
    ga('send', 'event', 'category', 'action', 'label');
    ga('send', 'event', 'category', 'action', 'label', value);  // value is a number.
});