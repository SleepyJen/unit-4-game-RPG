
$(document).ready(function () {
    var firstCharacter = $('#hero1');
    var secondCharacter = $('#hero2');
    var thirdCharacter = $('#heros3');
    var fightBox = $('.fightBox');
    var firstVillain = $('#vill1');
    var characters = $('.heroine');

    firstCharacter.on('click', function () {
        if (fightBox.children(secondCharacter).length === 1 || fightBox.children(secondCharacter).length === 2) {
            characters.append(secondCharacter);
            fightBox.append(firstCharacter);
        } else if (fightBox.children(thirdCharacter).length === 1 || fightBox.children(thirdCharacter).length === 2) {
            characters.append(thirdCharacter);
            fightBox.append(firstCharacter);
        } else {
            fightBox.append(firstCharacter);
        }
    });

    secondCharacter.on('click', function () {
        fightBox.append(secondCharacter);
    });

    firstVillain.on('click', function () {
        fightBox.append(firstVillain);
    });

});