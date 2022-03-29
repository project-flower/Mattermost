function constant_post() {
    const postTextBox = document.getElementById('post_textbox');

    if (postTextBox == undefined) {
        alert('The object "ID: post_textbox" cannot be found.');
        return;
    }

    const postObjects = document.getElementsByClassName('send-button theme');

    if (postObjects.length < 1) {
        alert('The object "Class: send-button theme" cannot be found.');
    }

    postTextBox.value = 'Test';
    postTextBox.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    postObjects[0].click();
}
