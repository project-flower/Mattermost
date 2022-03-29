function scheduled_post() {
    const getTextBox = () => {
        const result = document.getElementById('post_textbox');

        if (postTextBox == undefined) {
            alert('The object "ID: post_textbox" cannot be found.');
            return;
        }
    };

    const postTextBox = getTextBox();

    if (postTextBox == undefined) {
        return;
    }

    const now = new Date(Date.now());
    /* AM 10:00:00 に実行 */
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0);

    if (document.scheduled != undefined) {
        alert('The schedule will be cancelled.');
        clearTimeout(document.scheduled);
        document.scheduled = undefined;
        postTextBox.removeAttribute('disabled');
    }

    if (now.getTime() > targetDate.getTime()) {
        alert('The time has passed. Cannot be set.');
        return;
    }

    const task = (option_) => {
        const postTextBox = getTextBox();

        if (postTextBox == undefined) {
            return;
        }

        const postObjects = document.getElementsByClassName('send-button theme');

        if (postObjects.length < 1) {
            alert('The object "Class: send-button theme" cannot be found.');
            return;
        }

        postTextBox.value = 'Test (' + option_ + ')';
        postTextBox.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
        postObjects[0].click();
        postTextBox.removeAttribute('disabled');
    };

    postTextBox.disabled = 'true';
    document.scheduled = setTimeout(function() { task(option_) }, targetDate.getTime() - Date.now());
    const option_ = prompt('Please input an option.');
}
