
$(document).ready(function () {
    var firstCharacter = $('#hero1');
    var secondCharacter = $('#hero2');
    var thirdCharacter = $('#hero-last');
    var fightBox = $('.fightBox');
    var firstVillain = $('#vill1');
    var characters = $('.heroine');

    firstCharacter.on('click', function () {
        if (fightBox.children(secondCharacter).length >= 1) {
            characters.append(secondCharacter);
            fightBox.prepend(firstCharacter);
        }
        if (fightBox.children(thirdCharacter).length >= 0) {
            characters.append(thirdCharacter);
            fightBox.prepend(firstCharacter);
        } else {
            fightBox.prepend(firstCharacter);
        }
    });

    secondCharacter.on('click', function () {
        if (fightBox.children(firstCharacter).length >= 1) {
            characters.append(firstCharacter);
            fightBox.prepend(secondCharacter);
        }
        if (fightBox.children(thirdCharacter).length >= 0) {
            characters.append(thirdCharacter);
            fightBox.prepend(secondCharacter);
        } else {
            fightBox.prepend(secondCharacter);
        }
    });

    thirdCharacter.on('click', function () {
        if (firstCharacter.parent(fightBox).length === 1) {
            characters.append(firstCharacter);
            fightBox.prepend(thirdCharacter);
        } else if (fightBox.children(secondCharacter).length >= 1) {
            characters.append(secondCharacter);
            fightBox.prepend(thirdCharacter);
        } else {
            fightBox.prepend(thirdCharacter);
        }
    });


    firstVillain.on('click', function () {
        fightBox.append(firstVillain);
    });

});