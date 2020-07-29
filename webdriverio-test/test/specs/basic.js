const assert = require('assert')



describe('expected_conditions', () => {
    it('Wait for element to be enabled / Wait for an attribute to contain certain text', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/expected_conditions.html')

        const triggerButton = $('#enabled_trigger');
        const reactionButton = $('#enabled_target');
        const reactionTextHeader = $('h3[class="popover-header"]');
        const reactionTextPopup = $('div[class="popover-body"]');


        triggerButton.click()
        reactionButton.waitForEnabled({ timeout: 5000 });
        reactionButton.click();
        var text1 = reactionTextHeader.getText();
        var text2 = reactionTextPopup.getText();
        assert.equal(text1, 'Yay! I am super active now!');
        assert.equal(text2, 'See, you just clicked me!!');
    });




    it('Wait for text/value to have specific values', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/expected_conditions.html')

        const triggerButton = $('#text_value_trigger');
        const textButton = $('#wait_for_text');
        const textPlace = $('#wait_for_value');

        triggerButton.click();

        textButton.waitUntil(function () {
            return this.getText() === 'Submit'
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        textPlace.waitUntil(function () {
            return this.getText() === 'Dennis Ritchie'
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        textButton.getText();
        textPlace.getText();

        var text1 = textButton.getText();
        var text2 = textPlace.getText();
        assert.equal(text1, 'SUBMIT');
        assert.equal(text2, 'Dennis Ritchie');
        textButton.isExist();
        browser.pause(100000);
    });
});



describe('mouse events ', () => {
    it('Drag and Drop', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html')

        const source = $('#drag_source');
        const target = $('#drop_target');

        source.dragAndDrop(target, 50, 50);
        var text = target.getText();
        assert.equal(text, 'Drop is successful!');

        console.log(target);
        browser.pause(10000);
    });


    it('Mouse Click Actions (click)', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html')

        const click_area = $('#click_area');
        click_area.click()
        const click_span = $('#click_type');
        var text = click_span.getText();
        assert.equal(text, 'Click');
    });

    it('Mouse Click Actions (right click)', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html')

        const click_area = $('#click_area');
        click_area.click({button: 'right'})
        const click_span = $('#click_type');
        var text = click_span.getText();
        assert.equal(text, 'Right-Click');
    });

    it('Mouse Hover', () => {
        browser.url('https://dineshvelhal.github.io/testautomation-playground/mouse_events.html')

    // const button = $('button[class="dropbtn]');
    // const p_text = $('#dd_java');
        const reaction_text = $('#hover_validate');
        $('button[class="dropbtn]').MoveTo();
        $('#dd_java').click();
        reactionTextPopup.getText();
        var text = reaction_text.getText();
        assert.equal(text, 'Java');
    });
}); 
