const { default: Axios } = require("axios");

function sendMessage(chat_id, text, parse_mode = null, disable_web_page_preview = null) {
    let request = `${process.env.REQUEST_URL}sendMessage?chat_id=${chat_id}&text=${text}`;

    if (parse_mode) {
        request = `${request}&parse_mode=${parse_mode}`;
    }

    if (disable_web_page_preview) {
        request = `${request}&disable_web_page_preview=${disable_web_page_preview}`;
    }

    Axios.post((request), {})
        .then((response) => {
            return response.data.ok;
        })
        .catch((err) => {
            return new Error(err);
        });
}

function deleteMessage(chat_id, message_id) {
    const delete_request = `${process.env.REQUEST_URL}deleteMessage?chat_id=${chat_id}&message_id=${message_id}`;

    let ok;
    let error;

    Axios.post((delete_request), {})
        .then((response) => {
            ok = response.data.ok;
            // return response.data.ok;
        })
        .catch((err) => {
            error = err;
        });
    return {
        ok,
        error
    }
}

module.exports = {
    sendMessage,
    deleteMessage,
}