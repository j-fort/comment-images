const image_regex = /!\[photo\]\(([\/a-zA-Z0-9@:%\._\+~#=-]+)\)/;

function Run () {
    let comments = document.getElementById('comments-list');
    for (let comment of comments.children) {
        comment = comment.children[1].children[1];
        let text = comment.textContent; // NOTE: Alternatively querySelect class comment-text
        let match = text.match(image_regex);
        if (match) {
            text = text.split(match[0]);

            let image = document.createElement('img');
            image.src = match[1];
            
            let prev = document.createElement('span');
            prev.textContent = text[0];

            let next = document.createElement('span');
            next.textContent = text[1];

            comment.textContent = '';

            comment.append(prev, image, next);
        }
    }
}

Run();