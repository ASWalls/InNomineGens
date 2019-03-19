// DATA ****************************************************************************

const secretTargets = ['a relative', 'a photograph', 'a piece of jewelry', 'a letter', 'a piece of paperwork', 'a mysterious stain', 'a discarded wrapper', 'a lock of hair', 'a CD', 'a thumb drive', 'a floppy disk', 'a manilla envelope', 'a wad of cash', 'a mysterious package', 'a notebook', 'a cell phone', 'a scrap of paper', 'a piece of clothing', 'a shrine', 'a book', 'a severed finger', 'a severed hand', 'a glass eye', 'an empty pill-bottle', 'a discarded needle', 'a scrap of fabric', 'a friend of a friend', 'a young child', 'a police report', 'an old woman', 'an old man', 'a hollow book', 'an empty room', 'a single shoe', 'a single glove', 'a single sock', 'a package of ground meat', 'a old desktop computer', 'a bar of gold', 'a scrapbook', 'a three-ring binder', 'a playground', 'a used bandage', 'a DVD', 'a collection of creepy objects', 'a shattered plate', 'an empty office', 'a pile of ash', 'a bottle of bleach']

const secretReasons = ['infidelity', 'treason', 'murder', 'arson', 'accidental manslaughter', 'an unrequited crush', 'blasphemy', 'a secret child', 'a long-lost sibling', 'an abandoned career', 'an embarrassing hobby', 'blackmail', 'resentment', 'an embarrassing favorite food', 'a lie to their boss', 'a lie to their spouse', 'a lie to their child', 'stalking', 'an addiction', ' a medical condition', 'a psychiatric condition', 'disturbing tastes', 'theft', 'inappropriate lust', 'an intense craving', 'a lie about where they were born', 'a lie about their family', 'a lie about their career', 'a lie about their sexual orientation', 'a lie about their sexual preferences', 'a lie about their political beliefs', 'an embarrassing relationship', 'an embarrassing side-job', 'cosmetic surgery', ' manipulative intent', 'a secret obsession', 'a terminal illness', 'a disturbing taste in pornography', 'a fetish', 'time spent in prison', 'an embarrassing friendship', 'compulsive theft', 'compulsive masturbation', 'compulsive fire-starting', 'self-harm', 'hidden ambitions', 'a suicide attempt' ]

//A __, evidence of __

// HELPERS *************************************************************************

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// DOM MANIPULATION ****************************************************************


document.querySelector('#get-secret').addEventListener('click', () => {
    const target = getRandom(secretTargets);
    const reason = getRandom(secretReasons);
    document.querySelector('#secret').textContent = `You find  ${target}, evidence of ${reason}.`;
});