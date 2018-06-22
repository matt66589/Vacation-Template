(function(){
    $(document).ready(main);

    function main()
    {
        // var for the title of page1 on the first page
        var firstPageTitle = document.getElementById('firstPageTitle');
        
        // immediate sizing of div objects right here
        var initWidth = $(window).width();
        var initHeight = $(window).height();

        
        $('#page1').css('width', initWidth + 'px');
        $('#page1').css('height', initHeight + 'px');

        $('#buttonTopSpace').css('height', $('#page1').height()/2 - $('.nav').height() - ($('#exploreButton').height()/2) + 'px');
        //$('#buttonContainer').css('height', (initHeight - $('.nav').height()) + 'px');
        //$('#buttonContainer').css('padding-top', ($('#buttonContainer').height()/2 - $('#exploreButton').height()) + 'px');

        $('#page2').css('width', initWidth + 'px');
        $('#page2').css('height', initHeight + 'px');

        console.log('#page1 set to ' + initWidth + 'px ' + initHeight + 'px.');


        //check the shade leron website for the scrolling function thing
        $('#exploreButton').click(function(){
            $('html, body').animate({ scrollTop : $('#page2').offset().top }, 750);
        });

        // Resize function for responsiveness
        
        $(window).resize(function(){
            // c stands for current
            var cWidth = $(window).width();
            var cHeight = $(window).height();

            $('#page1').css('width', cWidth + 'px');
            $('#page1').css('height', cHeight + 'px');

            //$('#buttonContainer').css('height', (initHeight - $('.nav').height()) + 'px');
            //$('#buttonContainer').css('padding-top', ($('#buttonContainer').height()/2 - $('#exploreButton').height()) + 'px');

            $('#buttonTopSpace').css('height', $('#page1').height()/2 - $('.nav').height() - ($('#exploreButton').height()/2) + 'px');

            $('#page2').css('width', cWidth + 'px');
            $('#page2').css('height', cHeight + 'px');

            console.log('#page1 resolution set to ' + cWidth + 'px' + ' ' + cHeight + 'px');
        });
    }
})();