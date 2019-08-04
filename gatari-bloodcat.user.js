// ==UserScript==
// @name bloodcat for gatari
// @description Simple Bloodcat button for gatari
// @author tryonelove
// @version 1.0
// @include http*://osu.gatari.pw/b/*
// @include http*://osu.gatari.pw/s/*
// ==/UserScript==



function addBloodcatMirror(){
    if(beatmapSetID !== null){
            $(".map-buttons").prepend(
                $("<a>").attr("href", "http://bloodcat.com/osu/s/" + beatmapSetID).addClass("map-btn fav-btn").text("Bloodcat")
            );
    }
}

$(document).ready(function(){
    addBloodcatMirror()
});
