import sajak from './images/Sajek.png';
import sreemongol from './images/Sreemongol.png';
import sundorban from './images/sundorbon.png';

const placesData = [
    {
        id:1,
        name: "Cox's Bazar" ,
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...",
        image: sajak,
        lat:21.4285,
        long:91.9702
    },
    {
        id:2,
        name: "Sreemangal" ,
        description: "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor A copper plate of Raja Marundanath from the 11th century was found in Kalapur.",
        image: sreemongol,
        lat:24.3065,
        long:91.7296
    },
    {
        id:3,
        name: "Sundorbans" ,
        description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world.",
        image: sundorban,
        lat:21.9497,
        long:89.1833
    },
];

export default placesData;