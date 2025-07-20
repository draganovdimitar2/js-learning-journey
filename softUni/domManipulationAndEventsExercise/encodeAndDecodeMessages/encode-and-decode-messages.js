// In this problem, you should create a JS functionality that encodes and decodes some messages which travel to 
// the network.
// This program should contain two functionalities.
// The first one is to encode the given message and send it to the receiver. 
// The second one is to decode the received message and read it (display it).
// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
// •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message
// •	Clear the sender textarea and add the encoded message to the receiver textarea
// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable


document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textareaSendEl = document.querySelector('#encode textarea');
    const textareaDecodeEL = document.querySelector('#decode textarea');
    const sendButtonEl = document.querySelector('#encode button');
    const decodeButtonEl = document.querySelector('#decode button');

    sendButtonEl.addEventListener('click', handleSendMessage);
    decodeButtonEl.addEventListener('click', handleDecodeMessage);


    function handleSendMessage(e) {
        e.preventDefault();
        textareaDecodeEL.value = '';
        const textToSend = textareaSendEl.value;
        for (const chr of textToSend) {
            const asciiCode = chr.charCodeAt(0) + 1;
            const encodeChr = String.fromCharCode(asciiCode);
            textareaDecodeEL.value += encodeChr;
        };
        textareaSendEl.value = '';
    };

    function handleDecodeMessage(e) {
        e.preventDefault();
        const encodedMessage = textareaDecodeEL.value;
        textareaDecodeEL.value = '';

        for (const chr of encodedMessage) {
            const asciiCode = chr.charCodeAt(0) - 1;
            const decodeChr = String.fromCharCode(asciiCode);
            textareaDecodeEL.value += decodeChr;
        };
    };
};