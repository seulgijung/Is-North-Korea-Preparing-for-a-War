var config = {
    style: 'mapbox://styles/seulgijung/clt7m6f72001n01p310begu3q',
    accessToken: 'pk.eyJ1Ijoic2V1bGdpanVuZyIsImEiOiJjbGwwd2ptczExMG1wM3NteHh3eTVsY2tjIn0.mvlTOklSTHhdZ77aHY3dEQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Is North Korea Preparing for a War?',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Seulgi Jung',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    introParagraphs: [
        "January was not a peaceful start of 2024 for the Koreas. On January 3, Kim Yo-jong, a member of the State Affairs Commission of North Korea and a sister of Kim Jong-un, supreme leader of North Korea, announced a statement densely filled with mockery and sarcasm toward the South Korean government (링크삽입). Two days later, on January 5, the North fired artillery at sea against the South militar, forcing residents to move to shelters(링삽), followed by a test-firing of the country's first solid-fuel intermediate-range ballistic missile on January14. It immediately drew condemnation from the U.S. for violation of multiple United Nations Security Council resolutions.(링크삽입)",
        "But something more menacing dropped later.",
        "On January 16, Pyongyang laid out its plan to abolish a decades-long formal agreement on peaceful reunification with the South. In a cabinet meeting of the Supreme People's Assembly, Kim Jong-un made an order  to redefine the South as the number one enemy state and specify annexation of South Korea in case of war in the constitution, state media said.",
        "Is North Korea preparing for war?",
        "Some experts say yes. According to an article for the U.S.-based website 38 North by two veteran analysts of North Korea — the former State Department official Robert L. Carlin and the nuclear scientist Siegfried S. Hecker — Mr. Kim was done with mere threats. “Kim Jong-un has made a strategic decision to go to war,” they wrote.",
        "But so far, U.S. agencies seem to view it with a more careful manner. No concrete signs have been detected that the DPRK is gearing up for combat or a major war, the New York Times reported citing interviews with American officials on the condition of anonymity. One official said in an interview with the Times that North Korea will not have been sending large numbers of arms, including sets of artillery rounds and missiles, even proved to be the newest, to Russia if it’s planning a prolonged conflict.",
        "Aerial photographs, in a UK’s unpublished report submitted to a panel of UN experts as part of an attempt to trigger an official investigation into arms deals in violation of international sanctions, captured several Russian ships loading containers at North Korea’s Najin Port, which was also confirmed by the U.S. government. The accusation has been officially denied by both North Korea and Russia.",
    ],
    chapters: [
        {
            id: 'step-one',
            alignment: 'left',
            hidden: false,
            title: 'But here is an evidence',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [125.6, 39.7],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'pinpoints',
                //     opacity: 1,
                //     duration: 2000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'step-two',
            alignment: 'left',
            hidden: false,
            title: 'Najin Turn On',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [130.10, 42.24],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'najin',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'najin',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ryonpho Turn On',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [127.09, 39.81],
                zoom: 8,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ryonpho',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ryonpho',
                    opacity: 0
                }
            ]
        },
    ],
    outroParagraphs: [
        "어쩌라고"
    ]
};
