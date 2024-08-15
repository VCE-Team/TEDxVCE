jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({
            until: new Date(2024, 7, 31, 9)
        }); // year, month, date, hour
    });
});
