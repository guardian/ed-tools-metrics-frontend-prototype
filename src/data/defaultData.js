const defaultData = {
    // Each object in a series is a week of days
    contentStartedInComposer: [
        {
            data: [
                {x: 1, y: 80},
                {x: 2, y: 90},
                {x: 3, y: 50},
                {x: 4, y: 90},
                {x: 5, y: 60},
                {x: 6, y: 50},
                {x: 7, y: 30}
            ]
        },
        {
            data: [
                {x: 1, y: 30},
                {x: 2, y: 20},
                {x: 3, y: 40},
                {x: 4, y: 50},
                {x: 5, y: 50},
                {x: 6, y: 30},
                {x: 7, y: 40}
            ]
        }
    ],

    contentStartedInInCopy: [
        {
            data: [
                {x: 1, y: 5},
                {x: 2, y: 10},
                {x: 3, y: 10},
                {x: 4, y: 30},
                {x: 5, y: 4},
                {x: 6, y: 4},
                {x: 7, y: 5}
            ]
        },
        {
            data: [
                {x: 1, y: 2},
                {x: 2, y: 5},
                {x: 3, y: 25},
                {x: 4, y: 2},
                {x: 5, y: 10},
                {x: 6, y: 23},
                {x: 7, y: 2}
            ]
        }
    ],

    // In area charts, each object in a series displayed as a different area
    contentStartedVs: [
        {
            data: [
                {x: 1, y: 90},
                {x: 2, y: 80},
                {x: 3, y: 75},
                {x: 4, y: 50},
                {x: 5, y: 60},
                {x: 6, y: 70},
                {x: 7, y: 60}
            ]
        },
        {
            data: [
                {x: 1, y: 10},
                {x: 2, y: 20},
                {x: 3, y: 25},
                {x: 4, y: 50},
                {x: 5, y: 40},
                {x: 6, y: 30},
                {x: 7, y: 40}
            ]
        }
    ],

    wordCountByDesk: [
        {
            deskName: 'Opinion',
            data: [
                {x: 1, y: 600},
                {x: 2, y: 940},
                {x: 3, y: 470},
                {x: 4, y: 530}
            ]
        },
        {
            deskName: 'News',
            data: [
                {x: 1, y: 300},
                {x: 2, y: 240},
                {x: 3, y: 370},
                {x: 4, y: 430}
            ]
        },
        {
            deskName: 'Sport',
            data: [{x: 1, y: 82}, {x: 2, y: 72}, {x: 3, y: 87}, {x: 4, y: 33}]
        }
    ]
};

export default defaultData;
