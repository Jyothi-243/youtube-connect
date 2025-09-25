import React from "react";

//for the comments , we have to take the data , UI , and recursion concept also. //comments means array of objects, each object means one comment.
//replies are also again the list of objects. 
//we have to make the map for showing the multiple comments. 
//when the issue came , we have to make the call for how many members the issue is coming , and one or 2 members , we can manually update those if more than the 10k then we will write the script
// we have to use the recursion , to create more comments. 
const commentData = [
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [

                                ]
                            },
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [

                                ]
                            },
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    },
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [
                                            {
                                                name: "Jyothi Sai Priya",
                                                text: "Lorem ipsum dolor sit amet recursion adip",
                                                reply: [

                                                ]
                                            },
                                            {
                                                name: "Jyothi Sai Priya",
                                                text: "Lorem ipsum dolor sit amet recursion adip",
                                                reply: [

                                                ]
                                            },
                                            {
                                                name: "Jyothi Sai Priya",
                                                text: "Lorem ipsum dolor sit amet recursion adip",
                                                reply: [
                                                    {
                                                        name: "Jyothi Sai Priya",
                                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                                        reply: [
                                                            {
                                                                name: "Jyothi Sai Priya",
                                                                text: "Lorem ipsum dolor sit amet recursion adip",
                                                                reply: [
                                                                    {
                                                                        name: "Jyothi Sai Priya",
                                                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                                                        reply: [

                                                                        ]
                                                                    }
                                                                ]
                                                            }

                                                        ]
                                                    }

                                                ]
                                            }
                                        ]
                                    }

                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [

            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    },
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    },
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    }

                                ]
                            }
                        ]
                    }

                ]
            }

        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [

        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [

        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            }
        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [

                        ]
                    },
                    {
                        name: "Jyothi Sai Priya",
                        text: "Lorem ipsum dolor sit amet recursion adip",
                        reply: [
                            {
                                name: "Jyothi Sai Priya",
                                text: "Lorem ipsum dolor sit amet recursion adip",
                                reply: [
                                    {
                                        name: "Jyothi Sai Priya",
                                        text: "Lorem ipsum dolor sit amet recursion adip",
                                        reply: [

                                        ]
                                    }

                                ]
                            }

                        ]
                    }

                ]
            }

        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [

        ]
    },
    {
        name: "Jyothi Sai Priya",
        text: "Lorem ipsum dolor sit amet recursion adip",
        reply: [
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            },
            {
                name: "Jyothi Sai Priya",
                text: "Lorem ipsum dolor sit amet recursion adip",
                reply: [

                ]
            }

        ]
    },
]

//commentList component (here we have to pass the list and then it will create the comment List).//listing down the comments. 

const CommentList = ({ comments }) => {
    //Dont use Index because we have to use the unique id for this but when we dont have the unique id then we have to use the index (but in PROD , dont use).
    //these replies are just these comments only. 
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className="comment-reply">
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
            </div>
        </div>
    ))
};

const Comment = ({ data }) => {
    //extracting the data 
    const { name, text, replies } = data;
    return <div className="comment-container">
        <img className="user-icon"
            alt="user-image"
            src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg " />
        <div className="comment-section">
            <strong>{name}</strong>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsContainer = () => {

    return (
        <div className="comments-container">
            <h1>Comments: </h1>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentsContainer;