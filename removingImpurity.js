function addComment(userId, comment) {
    const record = {
        id: uniqueID(),
        userId,
        text: comment
    };


    const elem = buildCommentElement(record);
    // Impurity
    commentsList.appendChild(elem);
}

addComment(42, "This is my comment!");


// Change this to 


function newComment(userId, commentId, comment) {
    const record = {
        id: commentId,
        userId,
        text: comment
    };


    return buildCommentElement(record);
}

const commentId = uniqueID();
const elem = newComment(42, commentId, "Comment");

commentsList.appendChild(elem);