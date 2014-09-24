'use strict';
$(function() {
    // Main Menu
    var mainMenu = $('.sf-menu');

    //Create the responsive menu by cloning the exisitng one.
    mainMenu.clone().removeClass().addClass('rwd-menu').prependTo('.navbar-container nav');
    // Inititalize Superfish menu
    mainMenu.superfish();
    // Toggle the responsive menu.
    $('#rwd-trigger').on('click', function(e) {
        e.preventDefault();
        $('.rwd-menu').slideToggle();
    });

    // Animations
    $('#demo-animations').find('.demo-col-btn').on('click', function() {
        var $this = $(this);
        $this.addClass('animated ' + $this.text());
    });

    // Tabs
    $('.tabs-links a').on('click', function(e) {
        e.preventDefault();

        // Get the target tab.
        var newTab = $(this).attr('href');

        // Show the targeted tab content while hiding the rest.
        $(newTab).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    //Accordions.
    $( '.accordion-element-title' ).on( 'click', function( e ) {
		e.preventDefault();

		// Get the target accordion.
		var targetAccordion = $( this ).attr( 'href' );

		// Collapse all accordion elements.
		$( '.accordion-element-title' ).removeClass( 'active' );
		$( '.accordion-element-content' ).hide();

		// Show the targeted element only.
		$( this ).addClass( 'active' );
		$( targetAccordion ).slideDown();
	});


});