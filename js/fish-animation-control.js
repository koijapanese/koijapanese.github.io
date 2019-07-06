// JavaScript Document
    $(function() {
        $('#fishHolder').fishAnimation();
        $(window).resize(function() {
            resizeFunc();
        });
        resizeFunc();
        buildSettings();
    });

    function buildSettings() {
        $("#numberFish").slider({
            range: "max",
            max: 12,
            min: 7,
            value: 10,
            slide: function(event, ui) {
                $("span#numberFishNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'number', ui.value);
            }
        });
        $("#swimspeed").slider({
            range: "max",
            max: 30,
            min: 1,
            value: 5,
            slide: function(event, ui) {
                $("span#swimspeedNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'swimspeed', ui.value);
            }
        });
        $("#downspeed").slider({
            range: "max",
            max: 1,
            min: .9,
            value: .98,
            step: 0.01,
            slide: function(event, ui) {
                $("span#downspeedNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'downspeed', ui.value);
            }
        });
        $("#rounder").slider({
            range: "max",
            max: 50,
            min: 5,
            value: 10,
            slide: function(event, ui) {
                $("span#rounderNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'rounder', ui.value);
            }
        });
        $("#turning").slider({
            range: "max",
            max: 15,
            min: 0,
            value: 3,
            slide: function(event, ui) {
                $("span#turningNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'turning', ui.value);
            }
        });
        $("#scaleRange").slider({
            range: "max",
            max: 5,
            min: 1,
            value: 3,
            step: 0.1,
            slide: function(event, ui) {
                $("span#scaleRangeNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'scaleRange', ui.value);
            }
        });
        $("#swimTimer").slider({
            range: "max",
            max: 300,
            min: 10,
            value: 50,
            slide: function(event, ui) {
                $("span#swimTimerNum").html(ui.value);
                $('#fishHolder').fishAnimation('update', 'swimTimer', ui.value);
            }
        });
        $('#colour').colorPicker({
            renderCallback: function($elm) {
                $('#colour').val(this.color.colors.HEX);
                $('#fishHolder').fishAnimation('update', 'colour', '#' + this.color.colors.HEX);
            }
        });
        $('#reset').click(function() {
            $("#swimspeed").slider("value", 5);
            $("#swimspeedNum").html(5);
            $("#downspeed").slider("value", 0.98);
            $("#downspeedNum").html(0.98);
            $("#rounder").slider("value", 10);
            $("#rounderNum").html(10);
            $("#turning").slider("value", 3);
            $("#turningNum").html(3);
            $("#numberFish").slider("value", 9);
            $("#numberFishNum").html(9);
            $("#scaleRange").slider("value", 3);
            $("#scaleRangeNum").html(3);
            $("#swimTimer").slider("value", 50);
            $("#swimTimerNum").html(50);
            $('#fishHolder').fishAnimation();
        });
    }

    function resizeFunc() {
        windowW = $(window).width();
        windowH = $(window).height();
        var gameCanvas = document.getElementById("fishHolder");
        gameCanvas.width = windowW;
        gameCanvas.height = windowH;
        $('#mainHolder').css('width', windowW);
        $('#mainHolder').css('height', windowH);
        $('#fishHolder').fishAnimation('update', 'canvasW', windowW);
        $('#fishHolder').fishAnimation('update', 'canvasH', windowH);
    }

