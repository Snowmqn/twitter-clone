$(document).ready( () => {
    $("time.timeago").timeago();
    //* Initially, the Tweet button and the character count button should be hidden (CSS).
    $('#tweet-submit').hide()
    $('#char-count').hide()
    $('.tweet').find('.tweet-actions').hide()
    $('.tweet').find('.reply').hide()
    $('.tweet').find('.stats').hide()
  
    //* When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons
    //should be revealed.  
    $('.tweet-compose').click(() => {
        $('.tweet-compose').height('1em')
        $('#tweet-submit').show()
        $('#char-count').show()
    })
    
    //* As the user types, the character count should decrease.
    $('.tweet-compose').keyup(() => {
        var update = 140 - $('.tweet-compose').val().length;
        $('#char-count').html(update)
        //* When there are 10 or less characters, the character counter should turn red.
        if(update <= 10) {
            $('#char-count').css('color', 'red');
        }
        //If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are 
        //<= 140 chars).
        if (update < 0) {
            $('#tweet-submit').prop('disabled', true);
        }
        if ($('#tweet-submit').prop('disabled') && update >= 0) {
            $('#tweet-submit').prop('disabled', false);
        }
    })
    //When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added
    //to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.
    $('#tweet-submit').on('click', () => {
        if ($('.tweet-compose').val().length > 0) {
            var tweetText = $('.tweet-compose').val()
            var userImage = $('.content > .avatar').prop('src')
            var userName = '@Snowmqn';
            var fullName = 'My Name';
            var timeStamp = new Date().toISOString();
            $('#stream').prepend(
                '<div class="tweet">' +
                    '<div class="content">' +
                        '<img class="avatar" src="' + userImage + '"/>' +
                        '<strong class="fullname">' + fullName + '</strong>' +
                        '<span class="username">' + userName + ' </span>' +
                        '<p class="tweet-text">' + tweetText + '</p>' +
                        '<div class="tweet-actions">' +
                            '<ul>' +
                                '<li><span class="icon action-reply"></span> Reply</li>' +
                                '<li><span class="icon action-retweet"></span> Retweet</li>' +
                                '<li><span class="icon action-favorite"></span> Favorite</li>' +
                                '<li><span class="icon action-more"></span> More</li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="stats">' +
                            '<div class="retweets">' +
                                '<p class="num-retweets">30</p>' +
                                '<p>RETWEETS</p>' +
                            '</div>' +
                            '<div class="favorites">' +
                                '<p class="num-favorites">6</p>' +
                                '<p>FAVORITES</p>' +
                            '</div>' +
                            '<div class="users-interact">' +
                                '<div>' +
                                    '<img src="img/jennyshen.jpg" />' +
                                    '<img src="img/damenleeturks.jpg" />' +
                                '</div>' +
                            '</div>' +
                            '<div class="time">' +
                                '<time class="timeago" datetime="'+ timeStamp +'"></time>' +                                
                            '</div>' +
                        '</div>' +
                        '<div class="reply">' +
                            '<img class="avatar" src="img/alagoon.jpg" />' +
                            '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            )
        }
        // $("time.timeago").timeago();

   })
   
   //* The tweet actions (Reply, Retweet, etc) should only  show up when you hover over that individual tweet. Otherwise, 
   //they should be hidden.
   
   $('.tweet').hover(function() {
       $(this).find('.tweet-actions').show();
   }, function() {
       $(this).find('.tweet-actions').hide();
   })
   //* The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the 
   //tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.compose
   $('.tweet').click(function() {
       $(this).find('.reply').show('slow')
       $(this).find('.stats').show('slow')
   })
   //* Make timestamps similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery "timeago" plugin to make them automatic.
   
})