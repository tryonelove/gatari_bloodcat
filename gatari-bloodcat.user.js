// ==UserScript==
// @name bloodcat for gatari
// @description Simple Bloodcat button for gatari
// @author tryonelove
// @version 1.0
// @include http*://osu.gatari.pw/b/*
// @include http*://osu.gatari.pw/s/*
// ==/UserScript==

var mapID = null,
    mapsetID = null;

function init(){
    var temp;
    temp = $(".beatmapTab.selected").attr("href").split("&")[0].split("/");
    mapID = temp[temp.length - 1];
    temp = $(".beatmap-preview").attr("src").split("/");
    mapsetID = temp[temp.length - 1].split("l")[0];
    addBloodcatMirror();
}
function addBloodcatMirror(){
    if(mapsetID !== null){
        $(".beatmap-downlaod").first().before(
            $("<div>").addClass("beatmap-downlaod").append(
                $("<a>").attr("href", "http://bloodcat.com/osu/s/" + mapsetID).addClass("btn btn-blue").text("Bloodcat")
            )
        );
        // old mirror
        //$(".beatmap_download_link").last().after("<br>",$("<a></a>").text("Bloodcat mirror").attr("href", "http://bloodcat.com/osu/s/" + mapsetID))
    }
}
$(document).ready(function(){
    init()
});
