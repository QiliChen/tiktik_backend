const post= {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'string',
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user' }],
                },
            ],
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
    ],
};

export default post;