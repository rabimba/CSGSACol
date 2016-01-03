$(function(){
	
// 	var timeline = new VMM.Timeline();
// 	timeline.init("data.json");
//  var timeline_config = {
//             start_zoom_adjust:  '10',                            //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
$(document).ready(function() {
                createStoryJS({
                    type:       'timeline',
                    source:     'data.json',
                    embed_id:   'timeline',
					start_zoom_adjust:	'10',
					start_at_end:	'true'
                });
            });
        }
});
