var config = {
    style: 'mapbox://styles/seulgijung/clt7m6f72001n01p310begu3q',
    accessToken: 'pk.eyJ1Ijoic2V1bGdpanVuZyIsImEiOiJjbGwwd2ptczExMG1wM3NteHh3eTVsY2tjIn0.mvlTOklSTHhdZ77aHY3dEQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    // theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Is North Korea Preparing for a War?',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Seulgi Jung',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    introParagraphs: [
        "January was not a peaceful start of 2024 for the two Koreas. On January 3, Kim Yo-jong, a member of the North Korean State Affairs Commission and  sister to Kim Jong-un, supreme leader of North Korea, announced a statement densely filled with mockery and sarcasm toward the South Korean government. Two days later, the North fired 200 rounds of artillery into the sea near two South Korean islands, forcing residents to flee to bomb shelters. Just nine days later, the North fired its first test of a  solid-fuel intermediate-range ballistic missile, drawing immediate condemnation from the U.S. for violating multiple U.N. Security Council resolutions.",
        "Despite all that, the biggest bombshell was yet to come.",
        "On January 16, Pyongyang announced plans to abolish a decades-long formal agreement on peaceful reunification with the South. In a cabinet meeting of the Supreme People's Assembly, Kim Jong-un called for a constitutional amendment to define South Korea as the North’s number one enemy and to specify annexation of South Korea in case of war.",
        "Is North Korea preparing for such a war?",
        "Some experts say yes. According to two veteran analysts of North Korea,e former State Department official Robert L. Carlin and nuclear scientist Siegfried S. Hecker, Mr. Kim’s provocations are no mere threats. “Kim Jong-un has made a strategic decision to go to war,” they say.",
    ],
    chapters: [
        {
            id: 'step-one',
            alignment: 'left',
            hidden: false,
            // title: 'But here is an evidence',
            // image: './images/najin.avif',
            description: "So far, U.S. agencies are taking a more measured view. The New York Times, citing interviews with anonymous American officials, reports that no concrete signs have been detected that the DPRK is gearing up for combat or a major war. One official cited by the Times said North Korea would not be making large arms shipments to Russia, including new sets of artillery rounds and missiles, if it were planning a prolonged conflict.",
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
            // title: 'Najin Turn On',
            image: './images/najin.avif',
            description: "Despite denials from both Russia and North Korea, an unpublished UK report submitted to the UN offers photographic evidence of the arms packages leaving the North. Aerial photos show Russian ships loading containers at North Korea's Najin Port, a claim confirmed by the US government. Such arms shipments to Russia violate international sanctions.",
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
            id: 'step-three',
            alignment: 'left',
            hidden: false,
            // title: 'Ryonpho Turn On',
            image: './images/ryonpho_mar2021.png',
            description: 'Those aren’t the only aerial photographs to suggest the North might not be pursuing war. Suh Jae-jung, a professor in the Department of Politics and International Studies at International Christian University, says that the North has transformed  an air base in Ryopho into a greenhouse site. “A leader planning for a major military operation would not have chosen such transition,” he added. “The North’s hostile gesture may come out of escalating tension and we should be wary of blowing it out of proportion.',
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
        {
            id: 'step-four',
            alignment: 'centered',
            hidden: false,
            // title: 'Ryonpho Turn On',
            image: './images/ryonpho_timestamped.gif',
            // description: '',
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
        }
    ],
    outroParagraphs: [
        "So perhaps full-scale war is not imminent. Surely, Pyongyang’s recent hardline posturing  is consistent  with a long held pattern of provocations. Still, South Korea is well advised to remain alert and even expect minor skirmishes ahead, possibly in the Demilitarized Zone or the buffer zone in the West sea. U.S. officials warn that Mr. Kim could conduct some form of lethal military action against South Korea in the coming months after shifting to a policy of open hostility, and it would be more dreadful than the 2010 shelling against Yeonpyeong Island, which left four dead and scores more people injured.",
        "Peace activists argue that in order to draw North Korea back to talks, the first step is a halt to all military exercises that strain relations, such as the ROK-US joint military drills. Jonghun Kapsong Kim, director at the Korean American Peace Fund, said it’s absurd to demand the North cease all military operations that pose a threat to the Korean peninsula at the same time as the R.O.K carries out some of the world’s largest joint military drills with the with the U.S. multiple times every year.",
        "The current trend towards escalation includes ongoing verbal provocation in the South as well, namely from the government of Yoon Suk-yeol, South Korea’s conservative president. McCarthyism remains rampant as a powerful political weapon dating back to the Korean War, and the nation’s conservative party has traditionally benefited from security issues with the DPRK, especially around election season. South Korea expects to hold National Assembly elections in April.",
        "Since Mr. Yoon took office in 2022, diplomatic policy on the DPRK has grown extremely belligerent, aligning with the US’s “no-tolerance” policy that emphasizes  sanctions and isolation. Last October, Defense Minister Shin Won-sik made headlines announcing a new offensive military posture if the North provokes “PISU: Punish Immediately, Strongly, and Until the end (즉각, 강력히, 끝까지 응징).",
        "For many Koreans all the posturing obscures tragedy. “When my husband died, I wondered if our military should have responded more strongly,” Kang Sung-ae, whose husband died in the bombardment of Yeonpyeong Island, said in an interview with Seoul News 2 years after the incident. “But politicians seem to be all similar. It seems like they only listen to us during election season and that’s it once they get elected.” Mr. Kim was working on the construction of a new residence for the Yeonpyeong Island Marine Corps unit on the day when artillery shells rained down.",
        "The interview ends with quotes of hers: Ms. Kang knows very well her husband’s death will be forgotten from people's minds as time passes. “It is fortunate that stability has been restored to Yeonpyeong Island, but those of us who suddenly lost our loved one are still living in tears.”",
    ]
};
