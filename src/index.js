const SIDENAV = '.sidenav';
const SIDEBAR_MENU = '#bmc_sidebar-menu';
const TODO_INPUT = '#bmc_to-do-input';
const ADD_BUTTON = '#bmc_add-button';

const OPEN_NAV = 'open';

const EVENTS_TO_LISTEN = 'change paste keyup';
const DISABLED_CLASS = 'disabled';

// Initialize sidenav from materialize
$(document).ready(function() {
  $(SIDENAV).sidenav();
});

// Listen for "menu" text and if user clicks it open sidenav (closed by default)
$(SIDEBAR_MENU).click(function() {
  $(SIDENAV).sidenav(OPEN_NAV);
});

/**
 * Listen for user typing in input, if he deletes everything,
 * disable button, otherwise make button active
 */
$(TODO_INPUT).on(EVENTS_TO_LISTEN, function() {
  const todoText = $(this).val();

  if (todoText.length === 0) {
    $(ADD_BUTTON).addClass(DISABLED_CLASS);
  } else {
    $(ADD_BUTTON).removeClass(DISABLED_CLASS);
  }
});
