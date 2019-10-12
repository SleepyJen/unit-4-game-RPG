
$(document).ready(function () {
    var firstCharacter = $('#hero1');
    var fightBox = $('.fightBox');
    var firstVillain = $('#vill1');
    var characters = $('.heroine');

    firstCharacter.on('click', function () {
        fightBox.append(firstCharacter);
    });

    firstVillain.on('click', function () {
        fightBox.append(firstVillain);
    });

});