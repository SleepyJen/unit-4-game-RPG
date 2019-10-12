
$(document).ready(function () {
    var firstCharacter = $('#hero1');
    var secondCharacter = $('#hero2');
    var thirdCharacter = $('#hero-last');

    var characters = $('.heroine');
    var villains = $('.villains');
    var fightBox = $('.fightBox');
    var firstVillain = $('#vill1');
    var secondVillain = $('#vill2');
    var thirdVillain = $('#vill3');

    firstCharacter.on('click', function () {
        if (fightBox.children(secondCharacter).length >= 1) {
            characters.append(secondCharacter);
            fightBox.prepend(firstCharacter);
        }
        if (fightBox.children(thirdCharacter).length >= 1) {
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
        if (fightBox.children(firstCharacter).length >= 1) {
            characters.append(firstCharacter);
            fightBox.prepend(thirdCharacter);
        }
        if (fightBox.children(secondCharacter).length >= 1) {
            characters.append(secondCharacter);
            fightBox.prepend(thirdCharacter);
        } else {
            fightBox.prepend(thirdCharacter);
        }
    });

    //villains
    firstVillain.on('click', function () {
        if (fightBox.children(secondVillain).length >= 1) {
            villains.append(secondVillain);
            fightBox.prepend(firstVillain);
        }
        if (fightBox.children(thirdVillain).length >= 1) {
            villains.append(thirdVillain);
            fightBox.prepend(firstVillain);
        } else {
            fightBox.append(firstVillain);
        }
    });

    secondVillain.on('click', function () {
        if (fightBox.children(firstVillain).length >= 1) {
            villains.append(firstVillain);
            fightBox.prepend(secondVillain);
        }
        if (fightBox.children(thirdVillain).length >= 1) {
            villains.append(thirdVillain);
            fightBox.prepend(secondVillain);
        } else {
            fightBox.append(secondVillain);
        }
    });

    thirdVillain.on('click', function () {
        if (fightBox.children(secondVillain).length >= 1) {
            villains.append(secondVillain);
            fightBox.prepend(thirdVillain);
        }
        if (fightBox.children(secondVillain).length >= 1) {
            villains.append(secondVillain);
            fightBox.prepend(thirdVillain);
        } else {
            fightBox.append(thirdVillain);
        }
    });
});