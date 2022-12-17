export default [
    {
        id: 'home',
        name: "首页",
        path: "/home",
    },
    {
        id: 'bulkWine',
        name: '原酒贸易',
        path: '/bulkWine',
        children: [
            {
                id: 'gaoShengRowWine',
                name: '高升原酒网',
                path: '/bulkWine/gaoShengRowWine',
            }
        ]
    },
    {
        id: 'RD&Production',
        name: '研发生产',
        path: '/research',
        children: [
            {
                id: 'bondedInArea',
                name: '保税区瓶装定制',
                path: '/research/bondedInArea',
            },
            {
                id: 'bondedOutArea',
                name: '保税外瓶装定制',
                path: '/research/bondedOutArea',
            },
        ]
    },
    {
        id: 'researchCase',
        name: '研发案例',
        path: '/case',
        children: [
            {
                id: 'gaoSheng',
                name: '高升',
                path: '/case/gaoSheng',
            },
            {
                id: 'lightPrestige',
                name: '轻威',
                path: '/case/lightPrestige',
            },
            {
                id: 'grainSilver',
                name: '纹银百两',
                path: '/case/grainSilver',
            },
            {
                id: 'songBird',
                name: '歌雀',
                path: '/case/songBird',
            },
            {
                id: 'moreBrands',
                name: '更多品牌',
                path: '/case/other',
            },
        ]
    },
    {
        id: 'contactUs',
        name: '联系我们',
        path: '/contact',
    }
    
]