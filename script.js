//武将部分
$(function(){
    $('select[id^=hero-select_]').change(function()
    {
        // List of ids that are selected in all select elements
        var selected = new Array();
        
        // Get a list of the ids that are selected
        $('[id^=hero-select_] option:selected').each(function()
        {
            selected.push($(this).val());
        });
        
        // Walk through every select option and enable if not 
        // in the list and not already selected
        $('[id^=hero-select_] option').each(function()
        {
            if (!$(this).is(':selected') && $(this).val() != '')
            {
                var shouldDisable = false;
                for (var i = 0; i < selected.length; i++)
                {
                    if (selected[i] == $(this).val())
                        shouldDisable = true;
                }
                
                $(this).css('text-decoration', '');
                $(this).removeAttr('disabled', 'disabled');
                if (shouldDisable)
                {
                    $(this).css('text-decoration', 'line-through');
                    $(this).attr('disabled', 'disabled');
                }
            }
        });
    });
});
//战法部分
$(function(){
    $('select[id^=skill-select_]').change(function()
    {
        // List of ids that are selected in all select elements
        var selected = new Array();
        
        // Get a list of the ids that are selected
        $('[id^=skill-select_] option:selected').each(function()
        {
            selected.push($(this).val());
        });
        
        // Walk through every select option and enable if not 
        // in the list and not already selected
        $('[id^=skill-select_] option').each(function()
        {
            if (!$(this).is(':selected') && $(this).val() != '')
            {
                var shouldDisable = false;
                for (var i = 0; i < selected.length; i++)
                {
                    if (selected[i] == $(this).val())
                        shouldDisable = true;
                }
                
                $(this).css('text-decoration', '');
                $(this).removeAttr('disabled', 'disabled');
                if (shouldDisable)
                {
                    $(this).css('text-decoration', 'line-through');
                    $(this).attr('disabled', 'disabled');
                }
            }
        });
    });
});