$(function () {

    var cards = ["1.png", "2.png", "4.png", "10.png", "8.png", "1.png", "2.png", "5.png", "7.png", "11.png", "3.png", "6.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "10.png", "11.png"];
    var counter = 0;
    var oneVisible = false;
    var visibleNumber;
    var disable = false;
    var pairsLeft = 10;

    console.log(cards);

    function cardUp(number) {

        var opacityValue = $('#sc' + number).css('opacity');

        if (opacityValue != 0 && disable == false) {

            disable = true;

            var picture = 'url(./images/' + cards[number] + ")";

            $('#sc' + number).css('background-image', picture);
            $('#sc' + number).addClass('single-card-active');
            $('#sc' + number).removeClass('single-card');

            if (oneVisible == false) {
                //firs card
                oneVisible = true;
                visibleNumber = number;
                disable = false;
            } else {
                //second card

                if (cards[visibleNumber] == cards[number]) {
                    // console.log("para")
                    setTimeout(function () {
                        hideCards(number, visibleNumber)
                    }, 750);

                } else {
                    // console.log("pudło");
                    setTimeout(function () {
                        restoreCards(number, visibleNumber)
                    }, 1000);

                }

                counter++;
                $('.score').html('Turn counter:' + counter);
                oneVisible = false;
            }

        }
    }

    function hideCards(index1, index2) {
        $('#sc' + index1).css('opacity', '0');
        $('#sc' + index2).css('opacity', '0');
        pairsLeft--;

        if(pairsLeft == 0){
            $('.board-game').html('<h1> Victory! <br> Done in '+counter + 'turns</h1>');
        }

        disable = false;
    }

    function restoreCards(index1, index2){
        $('#sc' + index1).css('background-image', 'url(./images/9.png)');
        $('#sc' + index2).css('background-image', 'url(./images/9.png)');
        $('#sc' + index1).addClass('single-card');
        $('#sc' + index2).addClass('single-card');
        $('#sc' + index1).removeClass('single-card-active');
        $('#sc' + index2).removeClass('single-card-active');

        disable = false;
    }

    var sc0 = $('#sc0');
    var sc1 = $('#sc1');
    var sc2 = $('#sc2');
    var sc3 = $('#sc3');
    var sc4 = $('#sc4');

    var sc5 = $('#sc5');
    var sc6 = $('#sc6');
    var sc7 = $('#sc7');
    var sc8 = $('#sc8');
    var sc9 = $('#sc9');

    var sc10 = $('#sc10');
    var sc11 = $('#sc11');
    var sc12 = $('#sc12');
    var sc13 = $('#sc13');
    var sc14 = $('#sc14');

    var sc15 = $('#sc15');
    var sc16 = $('#sc16');
    var sc17 = $('#sc17');
    var sc18 = $('#sc18');
    var sc19 = $('#sc19');

    sc0.on('click', function () {
        cardUp(0)
    });
    sc1.on('click', function () {
        cardUp(1)
    });
    sc2.on('click', function () {
        cardUp(2)
    });
    sc3.on('click', function () {
        cardUp(3)
    });
    sc4.on('click', function () {
        cardUp(4)
    });
    sc5.on('click', function () {
        cardUp(5)
    });
    sc6.on('click', function () {
        cardUp(6)
    });
    sc7.on('click', function () {
        cardUp(7)
    });
    sc8.on('click', function () {
        cardUp(8)
    });
    sc9.on('click', function () {
        cardUp(9)
    });
    sc10.on('click', function () {
        cardUp(10)
    });
    sc11.on('click', function () {
        cardUp(11)
    });
    sc12.on('click', function () {
        cardUp(12)
    });
    sc13.on('click', function () {
        cardUp(13)
    });
    sc14.on('click', function () {
        cardUp(14)
    });
    sc15.on('click', function () {
        cardUp(15)
    });
    sc16.on('click', function () {
        cardUp(16)
    });
    sc17.on('click', function () {
        cardUp(17)
    });
    sc18.on('click', function () {
        cardUp(18)
    });
    sc19.on('click', function () {
        cardUp(19)
    });


});